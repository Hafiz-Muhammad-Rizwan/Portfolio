import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Dynamic import to avoid build-time initialization
    const { bucket, uploadToGCS } = await import('@/lib/gcs');
    
    if (!bucket) {
      return NextResponse.json(
        { error: 'Upload service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Google Cloud Storage
    const publicUrl = await uploadToGCS(buffer, file.name, file.type);

    return NextResponse.json(
      { url: publicUrl, message: 'File uploaded successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');

    if (!fileUrl) {
      return NextResponse.json(
        { error: 'File URL required' },
        { status: 400 }
      );
    }

    // Dynamic import to avoid build-time initialization
    const { bucket } = await import('@/lib/gcs');
    
    if (!bucket) {
      return NextResponse.json(
        { error: 'Delete service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Extract filename from URL
    const filename = fileUrl.split('/').pop();
    if (filename) {
      await bucket.file(`portfolio/${filename}`).delete();
    }

    return NextResponse.json(
      { message: 'File deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
}
