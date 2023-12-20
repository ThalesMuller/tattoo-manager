import { DatabaseSaveFlashday } from "@data/use-cases/DatabaseCreateFlashday";
import { makeFirebaseDatabaseAdapter } from "../database/firebase-factory";

export const makeDatabaseSaveFlashday = (): DatabaseSaveFlashday => {
  return new DatabaseSaveFlashday(
    'flashdays',
    makeFirebaseDatabaseAdapter()
  );
};
