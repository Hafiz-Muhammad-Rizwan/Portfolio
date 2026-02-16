import { Storage } from '@google-cloud/storage';

let storage: Storage | null = null;
let bucket: any = null;

try {
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    storage = new Storage({
      projectId,
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
    });

    const bucketName = process.env.GCS_BUCKET_NAME || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
    if (bucketName) {
      bucket = storage.bucket(bucketName);
    }
  } else {
    console.warn('Google Cloud Storage credentials not found. Upload features will be disabled.');
  }
} catch (error) {
  console.error('GCS initialization error:', error);
}

export { storage, bucket };

export async function uploadToGCS(file: Buffer, filename: string, contentType: string): Promise<string> {
  if (!bucket) {
    throw new Error('Google Cloud Storage not initialized');
  }

  const blob = bucket.file(`portfolio/${Date.now()}-${filename}`);
  
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType,
    },
    public: true,
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', (err: Error) => {
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
  if (!bucket) {
    throw new Error('Google Cloud Storage not initialized');
  }

  try {
    const filename = fileUrl.split('/').pop();
    if (filename) {
      await bucket.file(`portfolio/${filename}`).delete();
    }
  } catch (error) {
    console.error('Error deleting file from GCS:', error);
    throw error;
  }
}
