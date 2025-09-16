import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
  const params = {
    Bucket: import.meta.env.VITE_S3_BUCKET,
    Key: fileName,
    Body: uint8Array,
    ContentType: file.type,
  };

  


  try {
    await s3.send(new PutObjectCommand(params));
    return `https://${import.meta.env.VITE_S3_BUCKET}.s3.${
      import.meta.env.VITE_AWS_REGION
    }.amazonaws.com/${fileName}`;
  } catch (err) {
    console.error("S3 upload error:", err);
    throw err;
  }
};
