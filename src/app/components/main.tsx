"use client"
import Image from "next/image";
import { EasyVolt, Access, Decagon, JS, NEST, NEXT, PHP, Laravel, JAVA, SPRING, FLUTTER, AWS, TS, REACT } from "../utils/app_utils";
import Link from "next/link";


import Section from "./section-two";
import { Provider } from "react-redux";
import { store } from "../api/services/store";
import About from "./about";
export default function Main() {

    return (
        <>

            <main>
            <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
                <div className="main flex justify-start">

                    <div
                        className="bg-image"
                        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="bg-image-r"></div>
                    </div>

                    <div className="outer p-5">
                        <h1 className="text-2xl p-5">
                            <span className="text-animate">Hello!</span>{' '}
                            <span className="text-animate">I'm a Senior Software Engineer with extensive experience in developing robust solutions.</span>{' '}
                            <span className="text-animate">I specialize in building tailored software.</span>
                        </h1>
                        <h3 className="text-1xl p-5">
                            Reach out to me for any project or consultation—I'm always open to discussing new opportunities.
                            <Link className="text-gray-500" href="mailto:chiorlujack@gmail.com">
                                &nbsp;chiorlujack@gmail.com
                            </Link>.
                        </h3>

                        <h3 className="text-1xl p-5">I have had the pleasure of working with several esteemed companies throughout my career:</h3>

                        <div className="p-5 flex justify-between" style={{ width: "60%" }}>
                            <Image src={EasyVolt} alt="EasyVolt logo" width={80} height={80} />
                            <Image src={Access} alt="Access logo" width={80} height={80} />
                            <Image src={Decagon} alt="Decagon logo" width={80} height={80} />
                        </div>
                    </div>
                </div>
                </div>
       
                <Provider store={store}>
                    <Section />
                </Provider>

       


               {/* <p className="te">Technologies</p> */}


                <div className="main flex justify-center">
                <div className="relative  w-[500px] mx-auto flex items-center justify-center icond">

  <Image
    className="absolute z-10"
    src={JAVA}
    alt="Sun"
    width={120}
    height={120}
  />

  {/* Orbiting Images */}
  <Image
    className="absolute p-3 rounded-full"
    src={JS}
    alt="Planet 1"
    width={80}
    height={80}
    style={{ transform: "rotate(0deg) translate(160px) rotate(0deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={NEST}
    alt="Planet 2"
    width={80}
    height={80}
    style={{ transform: "rotate(36deg) translate(160px) rotate(-36deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={NEXT}
    alt="Planet 3"
    width={80}
    height={80}
    style={{ transform: "rotate(72deg) translate(160px) rotate(-72deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={PHP}
    alt="Planet 4"
    width={80}
    height={80}
    style={{ transform: "rotate(108deg) translate(160px) rotate(-108deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={Laravel}
    alt="Planet 5"
    width={80}
    height={80}
    style={{ transform: "rotate(144deg) translate(160px) rotate(-144deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={TS}
    alt="Planet 6"
    width={80}
    height={80}
    style={{ transform: "rotate(180deg) translate(160px) rotate(-180deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={FLUTTER}
    alt="Planet 7"
    width={80}
    height={80}
    style={{ transform: "rotate(216deg) translate(160px) rotate(-216deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={REACT}
    alt="Planet 8"
    width={80}
    height={80}
    style={{ transform: "rotate(252deg) translate(160px) rotate(-252deg)" }}
  />
  {/* Added Two More Images */}
  <Image
    className="absolute p-3 rounded-full"
    src={AWS}
    alt="Planet 9"
    width={80}
    height={80}
    style={{ transform: "rotate(288deg) translate(160px) rotate(-288deg)" }}
  />
  <Image
    className="absolute p-3 rounded-full"
    src={SPRING}
    alt="Planet 10"
    width={80}
    height={80}
    style={{ transform: "rotate(324deg) translate(160px) rotate(-324deg)" }}
  />


</div>



                </div>
            <About />
            </main>
        </>
    );
}
