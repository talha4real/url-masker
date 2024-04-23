// Import the MaskUrl class
const MaskUrl = require('./index')

const MONGO_URL = "";
const PREFIX_URL = "";
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
      return urlMasker.fetchUrl("CODE");
    })
    expect(maskedUrl).toBe("");

  })
})