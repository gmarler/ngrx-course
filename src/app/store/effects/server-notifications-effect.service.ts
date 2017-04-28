import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ThreadsService} from '../../services/threads.service';
import {Effect} from '@ngrx/effects';
import {NewMessagesReceivedAction} from '../actions';
import {ApplicationState} from '../application-state';
import {Store} from '@ngrx/store';
import {uiState} from '../reducers/uiStateReducer';
import {UiState} from "../ui-state";

@Injectable()
export class ServerNotificationsEffectService {
  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationState>) { }

  @Effect() newMessages$ = Observable.interval(3000)
    .withLatestFrom(this.store.select<UiState>('uiState'))
    .map(([any, uiState]) => uiState)
    .filter(uiState => uiState.userId)
    .switchMap(uiState => this.threadsService.loadNewMessagesForUser(uiState.userId))
    .debug("new messages received from server")
    .withLatestFrom(this.store.select<UiState>('uiState'))
    .map(([unreadMessages, uiState]) =>
      new NewMessagesReceivedAction({
        unreadMessages,
        currentThreadId: uiState.currentThreadId,
        currentUserId:   uiState.currentUserId
      }));
}
