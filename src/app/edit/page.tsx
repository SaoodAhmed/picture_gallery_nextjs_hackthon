import { TabsDemo } from "./tabs";


const Page = ({ params: {}, searchParams: { publicId } } : { params: {}, searchParams: { publicId: string } }) => {
    console.log(publicId)
  return (
    <>
      <div className="px-5 py-4">
        <h2 className="text-3xl font-semibold tracking-tight">Edit Picture</h2>

      </div>
      <TabsDemo src = {publicId}/>
      

    </>
  );
};

export default Page;
