'use client';

import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import { useState } from 'react';

const Cover = () => {
  const [image, setImage] = useState<string>('');

  return (
    <div className="border border-gray-400 relative max-w-[500px] mx-auto min-h-[30vh] mb-6">
      {image && <Image src={image} alt="image" fill sizes="(max-width: 500px) 100vw, 500px" className="object-cover" />}
      <div className="absolute bottom-0 right-0">
        <UploadButton
          className="w-fit ut-allowed-content:hidden ut-button:bg-gray-200 ut-button:text-gray-800 ut-button:dark:bg-gray-800 ut-button:dark:text-gray-200 ut-button:hover:bg-gray-100 ut-button:dark:hover:bg-slate-500"
          endpoint="imageUploader"
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onClientUploadComplete={res => {
            localStorage.setItem('image_cover', res[0].url);
            setImage(res[0].url);
          }}
          onBeforeUploadBegin={files => {
            return files.map(f => new File([f], 'image-S-BLOG' + f.name, { type: f.type }));
          }}
        />
      </div>
    </div>
  );
};

export default Cover;
