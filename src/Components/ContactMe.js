import { Navbar } from "./Navbar";
import { LongButton } from "./LongButton";
import { TopNavbar } from "./TopNavbar";
export function ContactMe() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[#111111] h-screen">
                <TopNavbar />
                <div className="container mx-auto h-full  pt-20 w-full px-4 lg:px-0">
                    <div className="flex items-start justify-center ">
                        <div className="relative flex flex-col items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-3xl lg:text-5xl  font-extrabold">
                                <span className="text-white mr-3">GET IN</span>
                                <span className="text-[#FFB400]">TOUCH</span>
                            </span>
                            <p className="text-[#222222] text-[60px] lg:text-[110px] font-extrabold">CONTACT</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px]">
                        <div className="basis-full lg:basis-1/4 text-center lg:text-left mb-10 lg:mb-0">
                            <p className="uppercase text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-8">Don't Be Shy!</p>
                            <p className="text-sm lg:text-base text-white mb-4 lg:mb-8">
                                Feel free to get in touch with me. I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className="flex w-full justify-center lg:justify-start">
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex gap-2 items-center w-full h-16 lg:h-20">
                                        <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16">
                                            <img src="./img/asset/user_message.svg" className="w-8 h-8 lg:w-10 lg:h-10" alt="Email Icon" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-white uppercase text-xs lg:text-xs font-bold opacity-85">mail me</p>
                                            <p className="text-white text-sm lg:text-xl font-medium">
                                                <a href="mailto:minmitha0822@gmail.com">
                                                    minmitha0822@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center w-full h-16 lg:h-20">
                                        <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16">
                                            <img src="./img/asset/contact.svg" className="w-8 h-8 lg:w-10 lg:h-10" alt="Phone Icon" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-white uppercase text-xs lg:text-xs font-bold opacity-85">call me</p>
                                            <p className="text-white text-sm lg:text-xl font-medium">6381928805</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-full lg:basis-3/4 flex flex-col items-center justify-center">
                            <form className="w-full lg:max-w-[800px] flex flex-col gap-4">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <input
                                        className="bg-[#252525] h-12  text-xl md:text-center pl-4 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        className="bg-[#252525] h-12  text-xl md:text-center pl-4  rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="Your Email"
                                    />
                                    <input
                                        className="bg-[#252525]  h-12  text-xl md:text-center pl-4 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="Your Phone"
                                    />
                                </div>
                                <textarea
                                    className="bg-[#252525] h-[150px] lg:h-[200px] w-full text-xl text-left rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                    placeholder="Your Message"
                                ></textarea>
                            </form>
                            <div className="flex w-full max-w-[400px] lg:max-w-[800px] justify-start mt-4">
                                <LongButton text="SEND" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-32 pr-8 hidden lg:flex lg:flex-col items-end justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                    <Navbar />
                </div>
            </div>
        </>
    );
}
