import {generateUniqueId} from './helpers/util';
import Database from './helpers/db';
import mongoose,{Schema,Connection} from 'mongoose'



export default class MaskUrl {
  dbString: string;
  urlPrefix: string;
  connection!: Connection | Error;
  database!: Database;


  constructor(dbString: string, urlPrefix: string) {
    this.dbString = dbString;
    this.urlPrefix = urlPrefix;
  }
  async connectToDatabase(): Promise<void> {
    try {
      this.database = new Database(this.dbString);
      this.connection = await this.database.connect();
      console.log("db connected")
    } catch (error) {
        throw error;
    }
  }

  generateUrl(): string {
    if (this.connection) {
        const uniqueId = generateUniqueId();
        const redirectionUrl = `${this.urlPrefix.trim()}/${uniqueId}`;
        const connection = this.connection as mongoose.Connection;
        const UrlModel = connection.model('Url', new mongoose.Schema({
            id: String,
            url: String,
        }));
        const newUrl = new UrlModel({
            id: uniqueId,
            url: redirectionUrl,
        });

        newUrl.save();

      return redirectionUrl;
    } else {
      throw new Error('Database connection is not established');
    }
  }
}

module.exports = MaskUrl;


