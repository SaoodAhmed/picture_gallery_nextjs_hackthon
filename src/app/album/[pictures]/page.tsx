import React from "react";

import cloudinary from "cloudinary";
import View from "./view";

const Gallery = async ({ params }: { params: { pictures: string } }) => {
  console.log(params);

  let res = await cloudinary.v2.search
    .expression(`resource_type:image AND folder: ${params.pictures}`)
    .sort_by("public_id", "desc")
    //.max_results(5)
    .with_field("tags")
    .execute();
  //console.log(res.resources)

  return (
    <>
      <div className="flex justify-between items-center px-5 py-4">
        <h2 className="text-3xl font-semibold tracking-tight">{`Album : ${params.pictures}`}</h2>
      </div>

      {/* Masonry Grid */}

      <div className=" columns-4 gap-4 mx-auto p-5 space-y-4">
        {res.resources.map((item: any, i: number) => (
          <div key={i} className=" break-inside-avoid">
            <View src={item.public_id} tags={item.tags} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
