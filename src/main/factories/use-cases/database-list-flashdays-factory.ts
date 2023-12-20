import { DatabaseListFlashdays } from "@data/use-cases/DatabaseListFlashdays";
import { makeFirebaseDatabaseAdapter } from "../database/firebase-factory";

export const makeDatabaseListFlashdays = (): DatabaseListFlashdays => {
  return new DatabaseListFlashdays(
    'flashdays',
    makeFirebaseDatabaseAdapter()
  );
};
