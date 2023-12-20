import { NoSQLDatabaseClientProtocol, NoSQLQuery } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flashday } from "@domain/models/Flashday";
import { ListFlashdays } from "@domain/use-cases/ListFlashdays";

export class DatabaseListFlashdays implements ListFlashdays {
  constructor(
    private readonly _collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  private query: NoSQLQuery = {
    orderBy: {
      field: 'name',
      direction: 'asc'
    }
  }

  watch(setFlashes: React.Dispatch<Flashday[]>): void {

    this.databaseProtocol.watch<Flashday>(this._collection, (flashdays: Flashday[]) => {
      setFlashes(flashdays)
    }, this.query);

  }

}
