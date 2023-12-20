import { FirebaseDatabaseAdapter } from "@infra/database/FirebaseDatabaseAdapter"

export const makeFirebaseDatabaseAdapter = (): FirebaseDatabaseAdapter => {
  return new FirebaseDatabaseAdapter();
}
