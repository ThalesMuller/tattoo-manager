import { NoSQLDatabaseClientProtocol, NoSQLQuery } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { collection, getFirestore, Firestore, doc, getDoc, addDoc, setDoc, WithFieldValue, DocumentData, deleteDoc, onSnapshot } from "@firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { orderBy, query, where } from "firebase/firestore";

export class FirebaseDatabaseAdapter implements NoSQLDatabaseClientProtocol {
  private readonly app: FirebaseApp;
  private readonly db: Firestore;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async get<ReturnType>(_collection: string, _doc: string): Promise<ReturnType> {
    const response = await getDoc(doc(this.db, _collection, _doc));

    if (response instanceof Error) {
      throw response;
    }

    return response.data() as unknown as ReturnType;
  }

  async add<PayloadType extends WithFieldValue<DocumentData>, ReturnType>(_collection: string, _data: PayloadType): Promise<ReturnType> {
    const response = await addDoc(collection(this.db, _collection), _data);

    if (response instanceof Error) {
      throw response;
    }

    return response as unknown as ReturnType;
  }

  async update<PayloadType extends WithFieldValue<DocumentData>>(_collection: string, _id: string, _data: PayloadType): Promise<void> {
    await setDoc(doc(this.db, _collection, _id), _data);
  }

  async delete(_collection: string, _id: string): Promise<void> {
    await deleteDoc(doc(this.db, _collection, _id));
  }

  private parseWhere(_where?: NoSQLQuery['where']) {
    if (!_where) return;

    const { field, operator, value } = _where;

    return where(field, operator, value)
  }

  private parseOrderBy(_orderBy?: NoSQLQuery['orderBy']) {
    if (!_orderBy) return;

    const { field, direction } = _orderBy;

    return orderBy(field, direction);
  }

  private parseQuery(_collection: string, _query?: NoSQLQuery) {
    const ref = collection(this.db, _collection);

    const parsedWhere = this.parseWhere(_query?.where);
    const parsedOrderBy = this.parseOrderBy(_query?.orderBy);

    if (!parsedWhere) return ref;

    if (!parsedOrderBy) return query(ref, parsedWhere);

    return query(ref, parsedWhere, parsedOrderBy);
  }


  watch<ReturnType>(_collection: string, _callback: (data: ReturnType[]) => void, _query?: NoSQLQuery): void {

    onSnapshot(this.parseQuery(_collection, _query), (snapshot) => {
      const parsedDocsData = snapshot.docs.map((doc) => { return doc.data() as unknown as ReturnType });

      _callback(parsedDocsData);
    });
  }

}
