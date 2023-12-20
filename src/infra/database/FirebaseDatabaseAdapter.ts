import { NoSQLDatabaseClientProtocol } from "@data/protocols/database/NoSQLDatabaseClientProtocol";
import { collection, getFirestore, Firestore, doc, getDoc, addDoc, setDoc, WithFieldValue, DocumentData, deleteDoc, onSnapshot } from "@firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";



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

  watch<ReturnType>(_collection: string, _callback: (data: ReturnType[]) => void): void {
    onSnapshot(collection(this.db, _collection), (snapshot) => {
      const parsedDocsData = snapshot.docs.map((doc) => { return doc.data() as unknown as ReturnType });

      _callback(parsedDocsData);
    });
  }

}
