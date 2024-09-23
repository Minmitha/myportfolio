import { LongButton } from "./LongButton";
import { Navbar } from "./Navbar";
import { TopNavbar } from "./TopNavbar";

export function Bio() {
    return (
        <>
            <div className="flex h-screen bg-[#111111] w-full fixed">
               <TopNavbar/>
                <div className="flex flex-row inset-0 lg:w-1/2">
                    <div className="hidden lg:block transform rotate-[-17deg] bg-[#FFB400] w-[600px] lg:w-[430px] h-full -left-60 absolute -bottom-10 scale-125"></div>
                    <div className="flex flex-grow items-center justify-center relative lg:p-9">
                        <div className="bg-black w-auto h-full rounded-[30px] shadow-md overflow-hidden hidden lg:block flex items-center justify-center">
                            <img className="w-full h-full object-cover rounded-[30px]" src="./img/mini2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-around w-full">
                    <div className="text-left flex flex-col justify-center p-4 items-center lg:items-start">
                        <div className="lg:hidden p-6 md:p-12">
                            <img
                                alt="name"
                                src="./img/mini2.png"
                                className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-[270px] md:h-[270px] rounded-full border-4 border-solid border-[#252525]"
                            />
                        </div>
                        <h1 className="text-[#FFB400] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                            - I'M MINMITHA A.
                        </h1>
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-2 sm:mt-4 font-bold text-center lg:text-left">
                            SOFTWARE ENGINEER
                        </h2>
                        <p className="text-white text-sm sm:text-base md:text-xl xl:text-lg mt-4 w-full sm:w-[80%] lg:w-[50%] pb-8 text-center lg:text-left">
                            I'm a software engineer with a passion for developing robust and scalable solutions, with a
                            focus on clean code and user-friendly design.
                        </p>
                        <LongButton text="Let's Go!" />
                    </div>
                    <div className="w-32 pr-8 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                        <Navbar />
                    </div>
                </div>
            </div>
        </>
    );
}
