import Link from "next/link";
import { Project } from "../utils/utils";
import Image from "next/image";


  
  export default function Box({ data }:{data:Project} ) {
    return (
   
     <div className="box p-2 flex">
        <Link href={`${data.link}`}>
        <div className="">
          <Image src={data.imageUrl} style={{width:"100%",height:"280px"}} alt={data.name} className=" object-fit"></Image> 
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-sm text-gray-600 mt-2">
  {data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description}
</p>
<div className="mt-4">
            <Link href={`project/${data.language}`} className="text-blue-500 hover:underline">{data.language}</Link>
          </div>
          {/* <div className="mt-4">
            <Link href={`project/${data.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div> */}
        </div>
        </Link>
      </div>
     
    );
  }
  