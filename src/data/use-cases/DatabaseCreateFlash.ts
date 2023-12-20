import { NoSQLDatabaseClientProtocol } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flash } from "@domain/models/Flash";
import { SaveFlash } from "@domain/use-cases/SaveFlash";

export class DatabaseSaveFlash implements SaveFlash {
  constructor(
    private readonly collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  async create(flash: Flash): Promise<void> {
    await this.databaseProtocol.add<Flash, void>(this.collection, flash);
  }

  async update(flash: Flash): Promise<void> {
    if (!flash?.id) throw new Error("Flash id is undefined");

    await this.databaseProtocol.update<Flash>(this.collection, flash.id, flash);
  }

  async delete(flash: Flash): Promise<void> {
    if (!flash?.id) throw new Error("Flash id is undefined");

    await this.databaseProtocol.delete(this.collection, flash.id);
  }

}
