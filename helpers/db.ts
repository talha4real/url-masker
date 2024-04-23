import mongoose, { Connection,model,Schema } from 'mongoose';
  
export default class Database {
    private dbString: string;
    connection: Connection | null = null;
    private _UrlModel = new mongoose.Schema({
        id: String,
        prefix: String,
        url: String,
    });    

    constructor(dbString: string) {
      this.dbString = dbString;
    }
  
    connect(): Promise<Connection | Error> {
        return new Promise<Connection | Error>((resolve, reject) => {
          this.connection = mongoose.createConnection(this.dbString);
          this.connection.on('connected', () => {
            resolve(this.connection as Connection);
          });
          this.connection.on('error', (error) => {
            reject(error);
          });
        });
    }
  
    disconnect(): Promise<void | Error> {
        return new Promise<void | Error>((resolve, reject) => {
          if (!this.connection) {
            reject(new Error('Connection is null'));
            return;
          }
          this.connection.close();
        });
      }
}
 