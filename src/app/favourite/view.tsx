"use client"

import { CldImage } from 'next-cloudinary'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import AddTags from '../gallery/action';
import { useState } from 'react';

const View = ({ src,tags, func }:{ src:string, tags:string[], func: any }) => {
  const [fav, setFav] = useState(tags.includes("favourite"))
  return (
    <div className='relative'>

      <CldImage
      className='rounded-sm'
      width="400"
      height="400"
      src={src}
      sizes="100vw"
      alt="Description of my image"
    />

    <div className='absolute top-1 right-1'
    onClick={()=>{
      func(src)
      setFav(!fav)
      AddTags(src,fav)
    }}
    >
      
      {
        fav ?(<AiFillHeart size={30} className='text-red-500 cursor-pointer'/>): (<AiOutlineHeart size={30} className=' text-slate-50 hover:text-red-500 cursor-pointer duration-300'/>)
      }
    </div>

  </div>
  )
}

export default View