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
    } catch (error) {
        throw error;
    }
  }

  maskUrl(url: string): string {
    if (this.connection) {
        const uniqueId = generateUniqueId();
        const redirectionUrl = `${this.urlPrefix.trim()}/${uniqueId}`;
        const connection = this.connection as mongoose.Connection;
        const UrlModel = connection.model('Url', new mongoose.Schema({
            id: String,
            prefix: String,
            url: String,
        }));
        const newUrl = new UrlModel({
            id: uniqueId,
            prefix: this.urlPrefix,
            url: url,
        });

        newUrl.save();

      return redirectionUrl;
    } else {
      throw new Error('Database connection is not established');
    }
  }

  async fetchUrl(_url:string){
    if (this.connection) {
        const id = _url.split("/").pop();
        console.log(id)
        const connection = this.connection as mongoose.Connection;
        const UrlModel = connection.model('Url', new mongoose.Schema({
            id: String,
            prefix: String,
            url: String,
        }));        
        try {
            const urlDocument = await UrlModel.findOne({ id });

            if (urlDocument) {
                // Return the URL if found
                return urlDocument.url;
            } else {
                // Return null if no URL found with the provided ID
                return null;
            }
        } catch (error) {
            // Handle any errors that occur during the database operation
            throw new Error('Error fetching URL from database.');
        }
    }else{
        throw new Error('Database connection is not established');
    }
  }
}

module.exports = MaskUrl;


