"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache";


const AddTags = async (public_id:string, fav:boolean)=>{

    fav ? await cloudinary.v2.uploader.remove_tag("favourite",[public_id]) : await cloudinary.v2.uploader.add_tag("favourite",[public_id])

    await new Promise((resolve)=>{
        setTimeout(resolve),1000;
    });
    revalidatePath('/gallery')

}
export default AddTags;


export async function FolderCreate(folder:string, image:string){
    await cloudinary.v2.api.create_folder(folder)
    await cloudinary.v2.uploader.rename(image,`${folder}/${image}`)
}