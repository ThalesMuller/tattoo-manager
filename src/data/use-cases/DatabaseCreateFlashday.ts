import { NoSQLDatabaseClientProtocol } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { Flashday } from "@domain/models/Flashday";
import { SaveFlashday } from "@domain/use-cases/SaveFlashday";

export class DatabaseSaveFlashday implements SaveFlashday {
  constructor(
    private readonly collection: string,
    private readonly databaseProtocol: NoSQLDatabaseClientProtocol
  ) { }

  async create(flashday: Flashday): Promise<void> {
    await this.databaseProtocol.add<Flashday, void>(this.collection, flashday);
  }

  async update(flashday: Flashday): Promise<void> {
    if (!flashday?.id) throw new Error("Flashday id is undefined");

    await this.databaseProtocol.update<Flashday>(this.collection, flashday.id, flashday);
  }

  async delete(flashday: Flashday): Promise<void> {
    if (!flashday?.id) throw new Error("Flashday id is undefined");

    await this.databaseProtocol.delete(this.collection, flashday.id);
  }

}
