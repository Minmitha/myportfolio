import { Navbar } from "./Navbar"
export function Portfolio() {
    return (
        <>
            <div className="flex bg-[#111111] h-screen">
                <div className="container mx-auto flex flex-col items-center justify-center h-full">
                    <div className="relative flex items-center justify-center mb-8">
                        <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold">
                            <span className="text-white mr-3">MY</span>
                            <span className="text-[#FFB400]">PORTFOLIO</span>
                        </span>
                        <p className="text-[#222222] text-[110px] font-extrabold">WORKS</p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>

                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="cards relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg"></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-yellow-300 opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-white font-bold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-32 pl-12 pr-12 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4">
                    <Navbar />
                </div>
            </div>



        </>
    )
}