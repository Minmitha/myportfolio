import Navbar  from "./Navbar";
import TopNavbar  from "./TopNavbar";
import Form from "./Form";
import TransitionMotion from "./TransitionMotion";

const ContactMe = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[#111111] min-h-screen  no-scrollbar">
                <TopNavbar />
                <div className="container mx-auto h-full pt-20 w-full px-4 lg:px-0">
                    <div className="flex items-start justify-center ">
                        <div className="relative flex flex-col items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-3xl lg:text-5xl  font-extrabold">
                                <span className="text-white mr-3 font-serif">GET IN</span>
                                <span className="text-[#FFB400] font-serif">TOUCH</span>
                            </span>
                            <p className="text-[#222222] text-[60px] lg:text-[110px] font-extrabold font-serif">CONTACT</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px]">
                        <div className="basis-full lg:basis-1/4 text-center lg:text-left mb-10 lg:mb-0">
                            <p className="uppercase text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-8 font-serif">Don't Be Shy!</p>
                            <p className="text-sm lg:text-base text-white mb-4 lg:mb-8 font-serif">
                                Feel free to get in touch with me. I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className="flex w-full justify-center lg:justify-start">
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex gap-2 items-center w-full h-16 lg:h-20">
                                        <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16">
                                            <img src="./img/asset/user_message.svg" className="w-8 h-8 lg:w-10 lg:h-10" alt="Email Icon" />
                                        </div>
                                        <div className="">
                                            <p className="text-white uppercase text-xs lg:text-xs font-bold opacity-85 font-serif text-left">mail me</p>
                                            <p className="text-white text-sm lg:text-xl font-medium font-serif">
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
                                        <div className="">
                                            <p className="text-white uppercase text-xs lg:text-xs font-bold opacity-85 font-serif  text-left">call me</p>
                                            <p className="text-white text-sm lg:text-xl font-medium font-serif">6381928805</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-full lg:basis-3/4 flex flex-col items-center justify-center">
                           <Form/>

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
export default TransitionMotion(ContactMe);