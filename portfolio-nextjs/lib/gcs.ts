import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  credentials: {
    client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const bucketName = process.env.GCS_BUCKET_NAME || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const bucket = storage.bucket(bucketName!);

export { storage, bucket };

export async function uploadToGCS(file: Buffer, filename: string, contentType: string): Promise<string> {
  const blob = bucket.file(`portfolio/${Date.now()}-${filename}`);
  
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType,
    },
    public: true,
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', (err) => {
      reject(err);
    });

    blobStream.on('finish', async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file);
  });
}

export async function deleteFromGCS(fileUrl: string): Promise<void> {
  try {
    const filename = fileUrl.split('/').pop();
    if (filename) {
      await bucket.file(`portfolio/${filename}`).delete();
    }
  } catch (error) {
    console.error('Error deleting file from GCS:', error);
  }
}
