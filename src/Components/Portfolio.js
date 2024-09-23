import { Navbar } from "./Navbar";
import { TopNavbar } from "./TopNavbar";
import { Projects } from "./Projects";

export function Portfolio() {
    return (
        <>
            <div className="flex bg-[#111111] h-full w-full flex-col lg:flex-row">
                <TopNavbar />
                <div className="container mx-auto flex flex-col items-center justify-center pt-20 w-full px-4 lg:px-0">
                    <div className="relative flex items-center justify-center mb-20">
                        <span className="absolute inset-0 flex items-center justify-center md:text-5xl text-3xl font-extrabold">
                            <span className="text-white mr-3">MY</span>
                            <span className="text-[#FFB400]">PORTFOLIO</span>
                        </span>
                        <p className="text-[#222222] md:text-5xl text-6xl md:text-[60px] lg:text-[110px] font-extrabold">WORKS</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <Projects/>
                    </div>

                    <div className="mb-16"></div>
                </div>

                <div className="w-32 pr-8 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                    <Navbar />
                </div>
            </div>
        </>
    );
}
