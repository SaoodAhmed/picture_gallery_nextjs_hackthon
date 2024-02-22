"use client";

import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart, AiFillEdit, AiFillFolderAdd } from "react-icons/ai";
import AddTags from "./action";
import { useState } from "react";
import Link from "next/link";

const View = ({ src, tags }: { src: string; tags: string[] }) => {
  const [fav, setFav] = useState(tags.includes("favourite"));
  return (

    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />


    {/* heart icon to Add in favourite */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart size={30} className="text-red-500 cursor-pointer" />
        ) : (
          <AiOutlineHeart
            size={30}
            className=" text-slate-50 hover:text-red-500 cursor-pointer duration-300"
          />
        )}
      </div>


      {/* edit icon for editing page */}


      <div className=" absolute top-1 left-1">
        <Link href={`/edit?publicId=${src}`}>
          <AiFillEdit
            size={30}
            className=" text-slate-50 hover:text-red-500 cursor-pointer duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default View;
