import { NoSQLDatabaseClientProtocol } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flash } from "@domain/models/Flash";
import { WatchFlashes } from "@domain/use-cases/WatchFlashes";

export class DatabaseWatchFlashes implements WatchFlashes {
  constructor(
    private readonly collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  watch(setFlashes: React.Dispatch<Flash[]>): void {

    this.databaseProtocol.watch<Flash>(this.collection, (flashes: Flash[]) => {
      setFlashes(flashes)
    });

  }

}
