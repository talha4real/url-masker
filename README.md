# URL Masker

A package for adding an extra URL with your own prefix to any URL using MongoDB.

## Installation

You can install the package via npm:

```bash
npm install @talha4real/url-masker
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
    // Once connected, generate a masked URL
    console.log(urlMasker.generateUrl());
  })
  .catch((error) => {
    // Handle connection errors
    console.error("Error connecting to the database:", error);
  });
```

## License
This project is licensed under the MIT License






