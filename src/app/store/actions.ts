import {Action} from "@ngrx/store";
import {AllUserData} from "../../../shared/to/all-user-data";

export const USER_THREADS_LOADED_ACTION
  = 'USER_THREADS_LOADED_ACTION';

export class UserThreadsLoadedAction implements Action {
    type = USER_THREADS_LOADED_ACTION;
    constructor(public payload?: AllUserData) {

    }
}
