
import cloudinary from "cloudinary"
import View from '../gallery/view'
import FavouriteList from "./favouriteList"

const Gallery = async () => {

    let res = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favourite')
        .sort_by('public_id','desc')
        //.max_results(5)
        .with_field('tags')
        .execute()
        //console.log(res.resources)

    return (

        <>
            <div className='flex justify-between items-center px-5 py-4'>
                <h2 className="text-3xl font-semibold tracking-tight">
                    Favourite
                </h2>
            </div>
            <FavouriteList resources={res.resources}/>

           
        </>

    )
  
}

export default Gallery