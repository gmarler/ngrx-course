import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {ThreadsService} from "../../services/threads.service";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {SEND_NEW_MESSAGE_ACTION} from "app/store/actions";

@Injectable()
export class WriteNewMessageEffectService {
  constructor(private actions$: Actions, private threadsService: ThreadsService) {

  }

  @Effect({dispatch: false}) newMessages$: Observable<any> = this.actions$
    .ofType(SEND_NEW_MESSAGE_ACTION)
    .switchMap(action => this.threadsService.saveNewMessage(action.payload));
}
