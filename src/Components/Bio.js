import { LongButton } from "./LongButton"


export function Bio() {
    return (
        <>
            <div className="flex h-screen bg-[#111111]">
                <div className="flex flex-row relative fixed inset-0 overflow-hidden">
                    <div className="hidden lg:block transform rotate-[-17deg] bg-[#FFB400] w-[600px] h-full -left-60 absolute -bottom-10 scale-125">
                    </div>
                    <div className="flex flex-grow items-center justify-center relative lg:p-9 ">
                        <div className="bg-black w-auto h-full rounded-[30px] shadow-md hidden lg:block">
                            <img className="w-auto h-full rounded-[30px] " src="./img/mini2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-left flex flex-col justify-center w-full sm:w-3/4 lg:w-1/2 p-4 sm:pl-40 lg:pl-52">
                    <div className="lg:hidden p-12">
                        <img
                            alt="name"
                            src="./img/mini2.png"
                            className="mx-auto mb-25 w-48 h-48 md:w-[270px] md:h-[270px] rounded-full  border-4 border-solid border-[#252525]" />
                    </div>
                    <p className="text-[#FFB400] text-4xl md:text-5xl lg:text-6xl font-bold">- I'M MINMITHA A.</p>
                    <p className="text-white text-3xl md:text-5xl lg:text-6xl mt-4 font-bold">SOFTWARE ENGINEER</p>
                    <p className="text-white text-base md:text-xl lg:text-lg mt-4">
                        I'm a software engineer with a passion for developing
                    </p>
                    <p className="text-white text-base md:text-xl lg:text-lg mt-1">
                        robust and scalable solutions, With a focus on clean
                    </p>
                    <p className="text-white text-base md:text-xl lg:text-lg mt-1 mb-10">
                        code and user-friendly design.
                    </p>
                    <LongButton />
                </div>
                <div className="pl-32 flex flex-col justify-center hidden lg:block">
                    <div class="mb-4 right-0 top-0 bottom-0 flex items-center justify-center w-14 h-14 bg-[#FFB400] rounded-full hover:bg-[#FFB400] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-8 h-8 text-white transition-colors">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <div class="mb-4 right-0 top-0 bottom-0 flex items-center justify-center w-14 h-14 bg-[#FFB400] rounded-full hover:bg-[#FFB400] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-8 h-8 text-white transition-colors">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <div class="mb-4 right-0 top-0 bottom-0 flex items-center justify-center w-14 h-14 bg-[#FFB400] rounded-full hover:bg-[#FFB400] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-8 h-8 text-white transition-colors">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <div class="mb-4 right-0 top-0 bottom-0 flex items-center justify-center w-14 h-14 bg-[#FFB400] rounded-full hover:bg-[#FFB400] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-8 h-8 text-white transition-colors">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>


        </>
    )
}