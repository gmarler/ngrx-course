import {ApplicationState} from "../store/application-state";

export function userNameSelector(state: ApplicationState): string {
  const currentUserId      = state.uiState.userId,
        currentParticipant = state.storeData.participants[currentUserId];

  // If userId is not defined, return the empty string
  if (!currentParticipant) {
    return "";
  }
  return currentParticipant.name;
}
