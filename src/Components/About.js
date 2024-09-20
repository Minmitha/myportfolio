import { LongButton } from "./LongButton";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

export function About() {
    return (
        <>
            <div className="flex bg-[#111111]">
                <div className="container mx-auto h-full">
                    <div className="flex items-start justify-center">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold">
                                <span className="text-white mr-3">ABOUT </span>
                                <span className="text-[#FFB400]"> ME</span>
                            </span>
                            <p className="text-[#222222] text-[110px] font-extrabold">RESUME</p>
                        </div>
                    </div>
                    <div className="flex mb-16">
                        <div className="flex grow">
                            <div className="flex flex-col grow">
                                <div>
                                    <p className="text-2xl text-white font-bold pb-[22px]">PERSONAL INFOS</p>
                                </div>
                                <div className="flex grow">
                                    <div className="text-white basis-1/2">
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Name: </span>
                                            <span className="text-base">Minmitha A</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Mobile: </span>
                                            <span className="text-base">6381928805</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Email: </span>
                                            <span className="text-base">arumugamminmitha1971@gmail.com</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Age: </span>
                                            <span className="text-base">24</span>
                                        </div>

                                    </div>
                                    <div className="text-white basis-1/2">
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">DOB: </span>
                                            <span className="text-base">August 22, 2000</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Freelance: </span>
                                            <span className="text-base">Available</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Nationality: </span>
                                            <span className="text-base">Indian</span>
                                        </div>
                                        <div className="pb-[20px]">
                                            <span className="opacity-80 text-base">Adress: </span>
                                            <span className="text-base">Indian</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <LongButton text="HIRE ME" />
                                </div>

                            </div>

                        </div>
                        <div className="flex flex-col grow gap-4">
                            <div className="flex basis-1/2 gap-4">
                                <div className="basis-1/2 border border-[#252525] ">
                                    <div className="relative h-40">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-5xl text-[#FFB400]">3+</span>
                                        </div>
                                        <div className="flex items-center absolute inset-x-0 bottom-2">
                                            <span className="flex justify-center items-center basis-1/4">
                                                <hr className="w-8 bg-white h-1" />
                                            </span>
                                            <span className="flex flex-col items-start justify-center text-2xl basis-3/4 font-medium">
                                                <span className="text-white">YEARS OF</span>
                                                <span className="text-white">EXPERIENCE</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/2 border border-[#252525] ">
                                    <div className="relative h-40">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-5xl text-[#FFB400]">15+</span>
                                        </div>
                                        <div className="flex items-center absolute inset-x-0 bottom-2">
                                            <span className="flex justify-center items-center basis-1/4">
                                                <hr className="w-8 bg-white h-1" />
                                            </span>
                                            <span className="flex flex-col items-start justify-center text-2xl basis-3/4 font-medium">
                                                <span className="text-white">COMPLETED</span>
                                                <span className="text-white">PROJECTS</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex basis-1/2 gap-4">
                                <div className="basis-1/2 border border-[#252525] ">
                                    <div className="relative h-40">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-5xl text-[#FFB400]">2+</span>
                                        </div>
                                        <div className="flex items-center absolute inset-x-0 bottom-2">
                                            <span className="flex justify-center items-center basis-1/4">
                                                <hr className="w-8 bg-white h-1" />
                                            </span>
                                            <span className="flex flex-col items-start justify-center text-2xl basis-3/4 font-medium">
                                                <span className="text-white">YEARS OF</span>
                                                <span className="text-white">EXPERIENCE</span>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className=" basis-1/2 border border-[#252525] ">
                                    <div className="relative h-40">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-5xl text-[#FFB400]">2+</span>
                                        </div>
                                        <div className="flex items-center absolute inset-x-0 bottom-2">
                                            <span className="flex justify-center items-center basis-1/4">
                                                <hr className="w-8 bg-white h-1" />
                                            </span>
                                            <span className="flex flex-col items-start justify-center text-[16px] basis-3/4 font-medium">
                                                <span className="text-white">YEARS OF</span>
                                                <span className="text-white">EXPERIENCE</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div>
                            <div className="flex items-center justify-center w-full mb-16">
                                <hr className="w-[600px] bg-[#252525] h-[2px] opacity-45" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-full mb-16">
                                <p className="text-white text-2xl font-medium uppercase">My Skills</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="cards flex flex-wrap justify-center gap-4">
                                <div className="flex flex-col gap-4">
                                    <Skills percentage="50%" skill="HTML" />
                                    <Skills percentage="70%" skill="CSS" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Skills percentage="75%" skill="JAVASCRIPT" />
                                    <Skills percentage="70%" skill="JQUERY" />
                                </div>
                                <div className=" flex flex-col gap-4">
                                    <Skills percentage="60%" skill="AJAX" />
                                    <Skills percentage="60%" skill="REACT" />
                                </div>
                                <div className=" flex flex-col gap-4">
                                    <Skills percentage="85%" skill="PHP" />
                                    <Skills percentage="85%" skill="LARAVEL" />
                                </div>
                                <div className=" flex flex-col gap-4">
                                    <Skills percentage="75%" skill="TAILWIND CSS" />
                                    <Skills percentage="60%" skill="MYSQL" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                       <Experience/>
                    </div>
                </div>
                <div className="w-32 pl-12 pr-12 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4">
                    <Navbar />
                </div>
            </div >

        </>
    )
}