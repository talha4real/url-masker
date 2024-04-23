// Import the MaskUrl class
const MaskUrl = require('./index')


describe('MaskUrl',()=>{
  test('generateUrl method should return a masked URL',async()=>{
    const urlMasker = new MaskUrl("mongodb+srv://icop:WvVbRPpqhY3nIFiC@suicats.dcbtmrc.mongodb.net/Icop", "https://example.com");
    const maskedUrl = await urlMasker.connectToDatabase().then(()=>{
      return urlMasker.generateUrl();
    })
    expect(maskedUrl.startsWith('https://example.com/')).toBe(true);

  })
})

