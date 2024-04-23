import {generateUniqueId} from './helpers/util';
import Database from './helpers/db';
import {Schema} from 'mongoose'



export default class MaskUrl {
  dbString: string;
  urlPrefix: string;
  db: Database;

  constructor(dbString: string, urlPrefix: string) {
    this.dbString = dbString;
    this.urlPrefix = urlPrefix;
    this.db = new Database(dbString);
    this.db.connect();
  }

  

  generateUrl(): string {
    if (this.db.connection) {
      const uniqueId = generateUniqueId();
      const redirectionUrl = `${this.urlPrefix.trim()}/${uniqueId}`;
      const UrlModel = this.db.UrlModel;

      // Create a new document using the UrlModel
      const newUrl = new UrlModel({
        id: uniqueId,
        url: redirectionUrl,
      });

      newUrl.save()
        .then((result:any) => {
          console.log('Document saved successfully:', result);
        })
        .catch((error:any) => {
          console.error('Error saving document:', error);
        });

      return redirectionUrl;
    } else {
      throw new Error('Database connection is not established');
    }
  }
}

module.exports = MaskUrl;


