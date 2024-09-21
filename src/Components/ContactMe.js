import { Navbar } from "./Navbar"
import { LongButton } from "./LongButton"
export function ContactMe() {
    return (
        <>
            <div className="flex bg-[#111111] h-screen">
                <div className="container mx-auto h-full">
                    <div className="flex items-start justify-center">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold">
                                <span className="text-white mr-3">GET IN </span>
                                <span className="text-[#FFB400]">TOUCH</span>
                            </span>
                            <p className="text-[#222222] text-[110px] font-extrabold">CONTACT</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center min-h-[600px]">
                        <div className="basis-1/4">
                            <p className="uppercase text-2xl font-bold text-white mb-8">Don't Be Shy!</p>
                            <p className="text-base text-white mb-8">
                                Feel free to get in touch with me. I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className="flex w-full">
                                <div className="flex flex-col gap-4 w-full">

                                    <div className="flex gap-4 items-center w-full h-20">
                                        <div className="flex items-center justify-center w-16 h-16">
                                            <img src="./img/asset/user_message.svg" className="w-10 h-10" alt="Email Icon" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-white uppercase text-xs font-bold opacity-85">mail me</p>
                                            <p className="text-white text-xl font-medium">
                                                <a href="mailto:minmitha0822@gmail.com">
                                                    minmitha0822@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center w-full h-20">
                                        <div className="flex items-center justify-center w-16 h-16">
                                            <img src="./img/asset/contact.svg" className="w-10 h-10" alt="Phone Icon" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-white uppercase text-xs font-bold opacity-85">call me</p>
                                            <p className="text-white text-xl font-medium">6381928805</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="basis-3/4 flex flex-col items-center justify-center">
                            <form className="w-full max-w-[800px] flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <input
                                        className="bg-[#252525] h-10 flex-1 text-center rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="YOUR NAME"
                                    />
                                    <input
                                        className="bg-[#252525] h-10 flex-1 text-center rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="YOUR EMAIL"
                                    />
                                    <input
                                        className="bg-[#252525] h-10 flex-1 text-center rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                        type="text"
                                        placeholder="YOUR PHONE"
                                    />
                                </div>
                                <textarea
                                    className="bg-[#252525] h-[200px] w-full text-left rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#FFB400] caret-white text-white"
                                    placeholder="YOUR MESSAGE"
                                ></textarea>
                            </form>
                            <div className="flex w-full max-w-[800px] justify-start mt-4">
                                <LongButton text="SEND" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-32 pr-8 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                    <Navbar />
                </div>
            </div>
        </>
    )
}