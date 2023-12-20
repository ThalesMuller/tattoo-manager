import { NoSQLDatabaseClientProtocol } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flash } from "@domain/models/Flash";
import { CreateFlash } from "@domain/use-cases/CreateFlash";

export class DatabaseCreateFlash implements CreateFlash {
  constructor(
    private readonly collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  async create(flash: Flash): Promise<void> {
    await this.databaseProtocol.add<Flash, void>(this.collection, flash);
  }

}
