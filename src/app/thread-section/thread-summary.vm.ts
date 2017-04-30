export interface ThreadSummaryVM {
  id:               number;
  participantNames: string;
  lastMessageText:  string;
  timestamp:        number;
  // Whether the thread has been read for this user
  read:             boolean;
}

