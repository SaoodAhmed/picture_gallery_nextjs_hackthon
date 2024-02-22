"use client"


import { CldImage } from 'next-cloudinary'




import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo({src} : {src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-5">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oilpnt">Oil Paint</TabsTrigger>
      </TabsList>
      <TabsContent value="original">
        <div className='flex justify-center items-center py-4 gap-x-7'>

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            
            />

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            
            />
        </div>

            
      </TabsContent>

      {/* Blur */}
      <TabsContent value="blur">
        <div className='flex justify-center items-center py-4 gap-x-7'>

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            
            />

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            blur={400}
            
            />
        </div>

            
      </TabsContent>

      {/* Gray Scale */}

      <TabsContent value="gray">
        <div className='flex justify-center items-center py-4 gap-x-7'>

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            
            />

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
            
            />
        </div>
      </TabsContent>
      {/* Oil Paint*/}

      <TabsContent value="oilpnt">
        <div className='flex justify-center items-center py-4 gap-x-7'>

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            
            />

            <CldImage
            className='rounded-sm'
            width="400"
            height="400"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
            
            />
        </div>
      </TabsContent>
      
 
      
    </Tabs>
  )
}



