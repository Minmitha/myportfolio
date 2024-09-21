import { Navbar } from "./Navbar"
export function Portfolio() {
    return (
        <>
            <div className="flex bg-[#111111] h-screen">
                <div className="container mx-auto flex flex-col items-center justify-center h-full ">
                    <div className="relative flex items-center justify-center mb-8">
                        <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold">
                            <span className="text-white mr-3">MY</span>
                            <span className="text-[#FFB400]">PORTFOLIO</span>
                        </span>
                        <p className="text-[#222222] text-[110px] font-extrabold">WORKS</p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div class=" relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/project_logo.svg" alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>

                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/fidoacademy.png"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Fido Markets</p>
                                <p class="text-sm font-serif">
                                Fido Markets is an international brokerage firm in online forex trading, providing top quality financial and investment services all over the world. 
                                Fido Markets is the trade name for Fido Markets , United Kingdom. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/fido_markets.jpg" alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Fido Academy</p>
                                <p class="text-sm font-serif">
                               The Fido Academy is Global Forex Trading institute offering multiple forex trading courses to all clients and Traders intrested in Forex  Markets. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/house_logo.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/worship_live.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/Book_logo.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/Nettech.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/Reach_point.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                        <div class="relative bg-white w-[350px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]  hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                            <img src="./img/asset/sample.svg"  alt=""></img>
                            <div class="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-0 hover:opacity-100">
                                <p class="m-0 text-[14px] text-[#252525] font-extrabold uppercase">Hinez</p>
                                <p class="text-sm font-serif">
                                    The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking,
                                    and performance evaluation, improving organizational efficiency and decision-making. </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-16">
                    </div>

                </div>
                <div className="w-32 pr-8 flex-col items-end justify-center hidden lg:flex lg:justify-center gap-4 fixed right-0 top-1/2 transform -translate-y-1/2">
                <Navbar />
                </div>
            </div>



        </>
    )
}