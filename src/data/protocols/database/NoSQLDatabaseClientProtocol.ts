import { DocumentData, WithFieldValue } from "@firebase/firestore"

export interface NoSQLWhere {
  field: string
  operator: '==' | '<' | '<=' | '>' | '>=' | 'array-contains' | 'in' | 'array-contains-any'
  value: string | number | boolean | Date | null
}

export interface NoSQLOrderBy {
  field: string
  direction: 'asc' | 'desc'
}

export interface NoSQLQuery {
  where?: NoSQLWhere
  orderBy?: NoSQLOrderBy
}

export interface NoSQLDatabaseClientProtocol {
  get: <ReturnType>(collection: string, docId: string) => Promise<ReturnType>
  add: <PayloadType extends WithFieldValue<DocumentData>, ReturnType> (collection: string, data: PayloadType) => Promise<ReturnType>
  update: <PayloadType extends WithFieldValue<DocumentData>>(collection: string, id: string, data: PayloadType) => Promise<void>
  delete: (collection: string, id: string) => Promise<void>
  watch: <ReturnType>(collection: string, callback: (doc: ReturnType[]) => void, queries?: NoSQLQuery) => void
}
