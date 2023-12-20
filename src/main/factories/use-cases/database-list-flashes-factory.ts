import { DatabaseListFlashes } from "@data/use-cases/DatabaseListFlashes";
import { makeFirebaseDatabaseAdapter } from "../database/firebase-factory";

export const makeDatabaseListFlashes = (): DatabaseListFlashes => {
  return new DatabaseListFlashes(
    'flashes',
    makeFirebaseDatabaseAdapter()
  );
};
