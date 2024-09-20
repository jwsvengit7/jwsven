import { description } from "../utils/app_utils";

export default function About({number}:{number:number}) {
    return (
        <>
            <div style={{ height: "50px" }}></div>
            <center><h2 className="text-3xl font-extrabold text-gray-300">About Me</h2></center>

            <div style={{ height: "40px" }}></div>
            <div style={{paddingLeft:"40px",paddingRight:"40px"}} className="pad">
            <div className="main flex justify-start items-center">


                <div className="outer2 p-5">
                    <p className="p-2 mt-4 text-lg text-gray-600" >
                       
                    {number !=0 ? `${description.substring(0, number)}...` : description}


                    </p>


                </div>
                <div
                    className="bg-image2"
                    style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-image-r"></div>
                </div>

            </div>
</div>
        </>
    )

}