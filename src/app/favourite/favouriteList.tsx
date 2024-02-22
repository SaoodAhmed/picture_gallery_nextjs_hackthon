"use client"

import { useEffect, useState } from 'react'
import View from './view'




const FavouriteList = ({resources}:{resources:string[]}) => {
    const [initialState, setInitialState] = useState(resources)
    useEffect(()=>{
        
        setInitialState(resources)
    },[resources])
  return (
    
         <div className=' columns-4 gap-4 mx-auto p-5 space-y-4'>
                {
                    initialState.map((item:any, i:number)=>(
                        <div key={i} className=' break-inside-avoid'>
                            <View src = {item.public_id} tags = {item.tags} func = {(publicId:string)=>{
                                setInitialState((current)=>current.filter((val:any)=>val.public_id !== publicId))
                            }}/>
                        </div>
                    ))
                }
            </div>
  )
}

export default FavouriteList