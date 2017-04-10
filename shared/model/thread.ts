export interface Thread {
  id:           number;
  messageIds:   number[];
  // key is participantId, value is unread messages for that Id
  participants: {[key: number]: number};
}