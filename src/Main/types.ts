interface UserMetadata {
  hasFinishedProfileSetup: boolean;
}

export interface Viewer {
  metadata: UserMetadata;
  bankAccount: {
    bankAccountId: string;
    status: 'PENDING' | 'VALIDATED' | 'CLOSED' | 'LOCKED';
  };
}

export interface QueryResult {
  viewer: Viewer;
}
