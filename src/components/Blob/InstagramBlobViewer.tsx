import React, { useEffect, useState } from "react";

interface InstagramBlobViewerProps {
  blob: Blob;
}

export default function InstagramBlobViewer({ blob }: InstagramBlobViewerProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);

      // Clean up the URL object when the component unmounts
      return () => URL.revokeObjectURL(url);
    }
  }, [blob]);

  if (!blobUrl) {
    return <div>Loading...</div>;
  }

  // Determine the blob's type (e.g., image, video)
  if (blob.type.startsWith("image/")) {
    return <img src={blobUrl} alt="Instagram content" className="max-w-full h-auto" />;
  } else if (blob.type.startsWith("video/")) {
    return (
      <video controls className="max-w-full h-auto">
        <source src={blobUrl} type={blob.type} />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <a href={blobUrl} download="downloadedFile" className="text-blue-500 underline">
        Download File
      </a>
    );
  }
}
