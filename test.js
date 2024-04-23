// Import the MaskUrl class
const MaskUrl = require('./index')

const MONGO_URL = "mongodb+srv://icop:WvVbRPpqhY3nIFiC@suicats.dcbtmrc.mongodb.net/Icop";
const PREFIX_URL = "https://links.xyzcompany.com";
const MASK_URL = "";

// describe('MaskUrl',()=>{
//   test('generateUrl method should return a masked URL',async()=>{
//     const urlMasker = new MaskUrl(MONGO_URL, PREFIX_URL);
//     const maskedUrl = await urlMasker.connectToDatabase().then(()=>{
//       return urlMasker.maskUrl(MASK_URL);
//     })
//     expect(maskedUrl.startsWith('')).toBe(true);

//   })
// })

describe('MaskUrl',()=>{
  test('generateUrl method should return a masked URL',async()=>{
    const urlMasker = new MaskUrl(MONGO_URL, PREFIX_URL);
    const maskedUrl = await urlMasker.connectToDatabase().then(()=>{
      return urlMasker.fetchUrl("7sjtv");
    })
    expect(maskedUrl).toBe("test.com");

  })
})