# URL Masker

A package for adding an extra URL to provided with your own prefix using MongoDB.

## Installation

You can install the package via npm:

```bash
npm install url-masker
```

## Usage
First, import the MaskUrl class from the package:
```bash
import MaskUrl from "url-masker";
```

Then, create an instance of MaskUrl by providing the MongoDB connection string and the prefix URL:
```bash
const urlMasker = new MaskUrl("mongodb+srv://<username>:<password>@<cluster-address>/<database>","https://example.com");
```

Next, connect to the MongoDB database:
```bash
urlMasker.connectToDatabase()
  .then(() => {
    console.log(urlMasker.urlMasker(<URL_TO_MASK>));
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
```

## TO-DO
To make this fully work you will have to deploy this on a server with your domain which will redirect to the url.

## License
This project is licensed under the MIT License






