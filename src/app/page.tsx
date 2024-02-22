"use client"

import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from "react";
import Upload from './gallery/upload';



interface ImageUpload {
  event : "success",
  info : {public_id : string}
  
}


export default function Home() {
  const [ImageId, setImageId] = useState('jx0ikcgir0hmkulp9dya')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Upload/>
      <CldImage
        width="600"
        height="700"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
        className=' rounded-md object-cover'
      />
    </main>
  );
}
