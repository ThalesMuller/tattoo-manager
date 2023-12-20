import { makeFirebaseDatabaseAdapter } from "../database/firebase-factory";
import { DatabaseSaveFlash } from "@data/use-cases/DatabaseCreateFlash";

export const makeDatabaseSaveFlash = (): DatabaseSaveFlash => {
  return new DatabaseSaveFlash(
    'flashes',
    makeFirebaseDatabaseAdapter()
  );
};
