import { DocumentData, WithFieldValue } from "@firebase/firestore"

export interface NoSQLDatabaseClientProtocol {
  get: <ReturnType>(collection: string, docId: string) => Promise<ReturnType>
  add: <PayloadType extends WithFieldValue<DocumentData>, ReturnType> (collection: string, data: PayloadType) => Promise<ReturnType>
  update: <PayloadType extends WithFieldValue<DocumentData>>(collection: string, id: string, data: PayloadType) => Promise<void>
  delete: (collection: string, id: string) => Promise<void>
  watch: <ReturnType>(collection: string, callback: (doc: ReturnType[]) => void) => void
}
