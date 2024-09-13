import { LongButton } from "./LongButton"
import { Navbar } from "./Navbar"
export function Bio() {
    return (
        <>
            <div className="flex h-screen bg-[#111111] w-full">
                <div className="flex flex-row inset-0  lg:w-1/2">
                    <div className="hidden lg:block transform rotate-[-17deg] bg-[#FFB400] w-[600px] lg:w-[430px] h-full -left-60 absolute -bottom-10 scale-125">
                    </div>
                    <div className="flex flex-grow items-center justify-center relative lg:p-9">
                        <div className="bg-black w-auto h-full rounded-[30px] shadow-md overflow-hidden hidden lg:block flex items-center justify-center">
                            <img className="w-full h-full object-cover rounded-[30px]" src="./img/mini2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-around w-full">
                    <div className="text-left flex flex-col justify-center p-4  lg:pl-0  items-center lg:items-start">
                        <div className="lg:hidden p-12">
                            <img
                                alt="name"
                                src="./img/mini2.png"
                                className="mx-auto mb-25 w-48 h-48 md:w-[270px] md:h-[270px] rounded-full border-4 border-solid border-[#252525]" />
                        </div>
                        <p className="text-[#FFB400] text-3xl md:text-4xl xl:text-5xl font-bold">- I'M MINMITHA A.</p>
                        <p className="text-white text-3xl md:text-4xl xl:text-5xl mt-4 font-bold">SOFTWARE ENGINEER</p>
                        <p className="text-white text-base md:text-xl xl:text-lg mt-4">
                            I'm a software engineer with a passion for developing
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-lg mt-1">
                            robust and scalable solutions, With a focus on clean
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-lg mt-1 mb-10">
                            code and user-friendly design.
                        </p>
                        <LongButton text="Let's Go!"/>
                    </div>
                    <div className="w-32 pl-12 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4">
                       <Navbar />
                    </div>
                </div>

            </div>
        </>
    )
}