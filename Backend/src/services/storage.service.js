const ImageKit=require('imagekit');

const imagekit=new ImageKit({
  publicKey:"your_public_key",
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint:"https://ik.imagekit.io/your_imagekit_id"
});

async function uploadFile(buffer) {
  try {
    const result=await imagekit.upload({
      file:buffer,
      fileName:"image.jpg"
    })
    return result
  } catch(error) {
    console.error("Upload Error:",error);
    throw error;
  }
}

module.exports={
  uploadFile
}
