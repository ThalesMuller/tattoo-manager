import { NoSQLDatabaseClientProtocol, NoSQLQuery } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flash } from "@domain/models/Flash";
import { ListFlashes } from "@domain/use-cases/ListFlashes";

export class DatabaseListFlashes implements ListFlashes {
  constructor(
    private readonly _collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  private query: NoSQLQuery = {
    where: {
      field: 'size',
      operator: '==',
      value: "MD"
    },
    orderBy: {
      field: 'name',
      direction: 'desc'
    }
  }

  watch(setFlashes: React.Dispatch<Flash[]>): void {

    this.databaseProtocol.watch<Flash>(this._collection, (flashes: Flash[]) => {
      setFlashes(flashes)
    }, this.query);

  }

}
