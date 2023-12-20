import { DatabaseWatchFlashes } from "@data/use-cases/DatabaseWatchFlashes";
import { makeFirebaseDatabaseAdapter } from "../database/firebase-factory";

export const makeDatabaseWatchFlashes = (): DatabaseWatchFlashes => {
  return new DatabaseWatchFlashes(
    'flashes',
    makeFirebaseDatabaseAdapter()
  );
};
