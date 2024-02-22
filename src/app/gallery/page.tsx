import React from 'react'
import Upload from './upload'
import cloudinary from "cloudinary"
import View from './view'

const Gallery = async () => {

    let res = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id','desc')
        .max_results(5)
        .with_field('tags')
        .execute()
        //console.log(res.resources)
        

    return (

        <>
            <div className='flex justify-between items-center px-5 py-4'>
                <h2 className="text-3xl font-semibold tracking-tight">
                    Gallery
                </h2>
                <Upload/>
            </div>

            {/* Masonry Grid */}

            <div className=' columns-4  flex justify-center items-center flex-wrap gap-4 mx-auto p-5 space-y-4'>
                {
                    res.resources.map((item:any, i:number)=>(
                        <div key={i} className=' break-inside-avoid'>
                            <View  src = {item.public_id} tags = {item.tags}/>
                        </div>
                    ))
                }
            </div>
        </>

    )
  
}

export default Gallery