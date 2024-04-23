// Import the MaskUrl class
const MaskUrl = require('./index')

const MONGO_URL = "";
const PREFIX_URL = "";

describe('MaskUrl',()=>{
  test('generateUrl method should return a masked URL',async()=>{
    const urlMasker = new MaskUrl(MONGO_URL, PREFIX_URL);
    const maskedUrl = await urlMasker.connectToDatabase().then(()=>{
      return urlMasker.generateUrl();
    })
    expect(maskedUrl.startsWith('https://example.com/')).toBe(true);

  })
})

