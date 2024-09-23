export function Experience() {
    return (
        <>
            <div>
                <div className="flex items-center justify-center w-full">
                    <hr className="w-full md:w-[600px] bg-[#252525] h-[2px] mb-16 opacity-45" />
                </div>
            </div>
            <div className="flex items-center justify-center w-full mb-16">
                <p className="text-white text-2xl font-medium uppercase">Experience & Education</p>
            </div>
            <div className="mb-16">
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="education-card flex items-center justify-center w-full sm:w-[600px] h-[200px]">
                            <div className="basis-1/4 flex flex-col items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                                    <img src="./img/asset/home.svg" className="w-5 h-5" alt="home" />
                                </span>
                                <div className="w-[2px] h-[100px] bg-[#252525]"></div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <span className="text-sm font-semibold text-white rounded-lg bg-[#252525] w-48 opacity-80 text-center mt-2" >April, 2023 - PRESENT</span>
                                <span className="uppercase text-white font-medium text-lg">Software Engineer - Cloudrevel Innovations</span>
                                <p className="text-lg text-white">Developing and maintaining software solutions tailored to client needs.</p>
                            </div>
                        </div>
                        <div className="education-card flex items-center justify-center w-full sm:w-[600px] h-[200px]">
                            <div className="basis-1/4 flex flex-col items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                                    <img src="./img/asset/home.svg" className="w-5 h-5" alt="home" />
                                </span>
                                <div className="w-[2px] h-[100px] bg-[#252525]"></div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <span className="text-sm font-semibold text-white rounded-lg bg-[#252525] w-48 opacity-80 text-center mt-2" >April, 2022 - June, 2022</span>
                                <span className="uppercase text-white font-medium text-lg">Web Developer Intern - Imaje Technology</span>
                                <p className="text-lg text-white">Assisted in developing responsive websites and optimizing front-end performance.</p>
                            </div>
                        </div>
                        <div className="education-card flex items-center justify-center w-full sm:w-[600px] h-[200px]">
                            <div className="basis-1/4 flex flex-col items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                                    <img src="./img/asset/home.svg" className="w-5 h-5" alt="home" />
                                </span>
                                <div className="w-[2px] h-[100px] bg-[#252525]"></div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <span className="text-sm font-semibold text-white rounded-lg bg-[#252525] w-48 opacity-80 text-center mt-2" >July, 2022 - April, 2023</span>
                                <span className="uppercase text-white font-medium text-lg">Junior Php Developer - Fido Groups</span>
                                <p className="text-lg text-white">Building and maintaining web applications while enhancing backend functionality.</p>
                            </div>
                        </div>
                        <div className="education-card flex items-center justify-center w-full sm:w-[600px] h-[200px]">
                            <div className="basis-1/4 flex flex-col items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                                    <img src="./img/asset/home.svg" className="w-5 h-5" alt="home" />
                                </span>
                                <div className="w-[2px] h-[100px] bg-[#252525]"></div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <span className="text-sm font-semibold text-white rounded-lg bg-[#252525] w-48 opacity-80 text-center mt-2" >August, 2018 - April, 2022</span>
                                <span className="uppercase text-white font-medium text-lg">Bachelor Degree - Anna University</span>
                                <p className="text-lg text-white">Bachelor's of Engineering in Computer Science from Anna University.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
