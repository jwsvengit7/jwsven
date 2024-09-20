import Link from "next/link";
import Image from "next/image";

import { DEVELOPER_NAME, DEVELOPER_IMAGE, TWITTER, INSTAGRAM, LINKEDIN, GIT } from "../utils/app_utils";

export default function Header() {
    return (
        <>
            <header className="flex justify-between" >
                <div className="flex justify-around items-center p-3 icon-div ">
                    <Image className="p-1 rounded-full"  style={{border:"2px solid goldenrod"}}
                    src={DEVELOPER_IMAGE} 
                    alt="EVELOPER_IMAGE" width={40} 
                    height={40} />
                    <h2 className=" primary text-white text-sm">&nbsp;&nbsp;{DEVELOPER_NAME}</h2>
                  
                </div>

                <nav className="p-3 flex">

                    <Link className="p-3 text-white text-sm flex items-center" 
                    href="https://github.com/jwsvengit7">
                        <Image className="p-2 rounded-full" 
                        src={GIT} alt="EVELOPER_IMAGE" 
                        width={35} height={35} /> 
                        </Link>


                    <Link className="p-3 text-white text-sm flex items-center" 
                    href="https://www.linkedin.com/in/jack-temple-chiorlu-526b09250/">
                        <Image className="p-2 rounded-full" 
                        src={LINKEDIN} alt="EVELOPER_IMAGE" 
                        width={35} height={35} />
                         </Link>



                    <Link className="p-3 text-white text-sm flex items-center" 
                    href="https://github.com/jwsvengit7">
                        <Image className="p-2 rounded-full" 
                        src={TWITTER} alt="EVELOPER_IMAGE" 
                        width={35} height={35}
                         />
                        </Link>



                    <Link className="p-3 text-white text-sm flex items-center" 
                    href="https://github.com/jwsvengit7">
                        <Image className="p-2 rounded-full" 
                        src={INSTAGRAM} alt="EVELOPER_IMAGE" 
                        width={35} height={35} 
                        />
                    </Link>

                </nav>

            </header>

        </>
    )
}