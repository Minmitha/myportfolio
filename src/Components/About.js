import "../App.css";
import LongButton from "./LongButton";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Experience from "./Experience";
import TopNavbar from "./TopNavbar";
import TransitionMotion from "./TransitionMotion";
const About = () => {
    const driveUrl = "https://drive.google.com/file/d/1pSZEKVxVfsOdU2aATysCPBCst_bpCCDk/view?usp=sharing";

    return (
        <>
            <div className="flex flex-col bg-[#111111]">
                <TopNavbar />
                <div className="container mx-auto h-full pt-20 w-full px-4 lg:px-0">
                    <div className="flex items-center justify-center mb-20 flex-col">
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-extrabold">
                                <span className="text-white mr-2 md:mr-3 font-serif">ABOUT</span>
                                <span className="text-[#FFB400] font-serif">ME</span>
                            </span>
                            <p className="text-[#222222] text-5xl md:text-[110px] font-extrabold font-serif">RESUME</p>
                        </div>
                    </div>

                    <div className="flex  flex-col lg:flex-row mt-8 mb-16 px-4 lg:px-48">
                        <div className="flex flex-col grow mb-8 lg:mb-0 lg:basis-1/2">
                            <p className="text-2xl text-white font-medium pb-6 font-serif">PERSONAL INFOS</p>
                            <div className="flex flex-col lg:flex-row grow">
                                <div className="text-white basis-1/2">
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Name: </span>
                                        <span className="font-kaushan text-base font-serif">Minmitha A</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Mobile: </span>
                                        <span className="text-base font-serif">6381928805</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Email: </span>
                                        <span className="text-base font-serif">minmitha0822@gmail.com</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Age: </span>
                                        <span className="text-base font-serif">24</span>
                                    </div>
                                </div>
                                <div className="text-white basis-1/2">
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">DOB: </span>
                                        <span className="text-base font-serif">August 22, 2000</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Freelance: </span>
                                        <span className="text-base font-serif">Available</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Nationality: </span>
                                        <span className="text-base font-serif">Indian</span>
                                    </div>
                                    <div className="pb-4">
                                        <span className="opacity-80 text-base font-serif">Address: </span>
                                        <span className="text-base font-serif">Indian</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <LongButton text="DOWNLOAD CV" icon="./img/asset/download.svg" iconclass="relative w-5 h-5" link={driveUrl} />
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col gap-4 grow lg:basis-1/2">
                            {/* Single stat for mobile */}
                            <div className="flex gap-4">
                                <div className="flex-1 border border-[#252525] p-4">
                                    <div className="relative h-32">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-3xl md:text-5xl text-[#FFB400] font-serif">2+</span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-2"> 
                                            <span className="text-white text-base md:text-2xl font-serif">YEARS OF EXPERIENCE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 border border-[#252525] p-4">
                                    <div className="relative h-32">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-3xl md:text-5xl text-[#FFB400] font-serif">15+</span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-2">
                                            <span className="text-white text-base md:text-2xl font-serif">COMPLETED PROJECTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Another row of stats */}
                            <div className="flex gap-4">
                                <div className="flex-1 border border-[#252525] p-4">
                                    <div className="relative h-32">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-3xl md:text-5xl text-[#FFB400] font-serif">4+</span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-2">
                                            <span className="text-white text-base md:text-2xl font-serif">AWARDS WON</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 border border-[#252525] p-4">
                                    <div className="relative h-32">
                                        <div className="absolute top-2 left-2">
                                            <span className="font-extrabold text-3xl md:text-5xl text-[#FFB400] font-serif">10+</span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-2">
                                            <span className="text-white text-base md:text-2xl font-serif">EXPERT SKILLS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center justify-center w-full mb-8">
                            <hr className="w-full lg:w-[600px] bg-[#252525] h-[2px] opacity-45" />
                        </div>
                        <div className="flex items-center justify-center w-full mb-8">
                            <p className="text-white text-2xl font-medium uppercase font-serif">My Skills</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 px-4">
                            <div className="flex flex-col gap-8">
                                <Skills percentage="50%" skill="HTML" />
                                <Skills percentage="70%" skill="CSS" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <Skills percentage="75%" skill="JAVASCRIPT" />
                                <Skills percentage="70%" skill="JQUERY" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <Skills percentage="60%" skill="AJAX" />
                                <Skills percentage="60%" skill="REACT" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <Skills percentage="85%" skill="PHP" />
                                <Skills percentage="85%" skill="LARAVEL" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <Skills percentage="75%" skill="TAILWIND CSS" />
                                <Skills percentage="60%" skill="MYSQL" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <Experience />
                    </div>
                </div>

                <div className="w-32 pr-8 hidden lg:flex flex-col items-end justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                    <Navbar />
                </div>
            </div >
        </>
    );
}

export default TransitionMotion(About);