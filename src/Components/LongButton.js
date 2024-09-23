import '../App.css';
export function LongButton({ text }) {
    return (
        <>
            {/* <div>
                <button className="Btn-Container flex w-[170px] h-auto bg-[#0a0a0a] hover:bg-[#FFB400] rounded-full shadow-md justify-between items-center  cursor-pointer border-[2px] border-[#FFB400]">
                    <span className="text text-white text-xl font-bold tracking-wide flex-1 h-full flex items-center justify-center">{text}</span>
                    <span className="icon-Container w-[45px] h-[45px] bg-[#FFB400] flex items-center justify-center rounded-full border-8 border-[#FFB400]">
                        <svg
                            width="16"
                            height="19"
                            viewBox="0 0 16 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="1.61321" cy="1.61321" r="1.5" fill="white"></circle>
                            <circle cx="5.73583" cy="1.61321" r="1.5" fill="white"></circle>
                            <circle cx="5.73583" cy="5.5566" r="1.5" fill="white"></circle>
                            <circle cx="9.85851" cy="5.5566" r="1.5" fill="white"></circle>
                            <circle cx="9.85851" cy="9.5" r="1.5" fill="white"></circle>
                            <circle cx="13.9811" cy="9.5" r="1.5" fill="white"></circle>
                            <circle cx="5.73583" cy="13.4434" r="1.5" fill="white"></circle>
                            <circle cx="9.85851" cy="13.4434" r="1.5" fill="white"></circle>
                            <circle cx="1.61321" cy="17.3868" r="1.5" fill="white"></circle>
                            <circle cx="5.73583" cy="17.3868" r="1.5" fill="white"></circle>
                        </svg>
                    </span>
                </button>

                
            </div> */}
            <div class="relative rounded-full overflow-hidden bg-[#111111] shadow-xl w-48 border-2 border-[#FFB400]">
                <p
                    class="input bg-transparent outline-none border-none pl-5 pr-6 py-4 w-full font-sans text-lg font-semibold text-white"

                >{ text }</p>
                <div class="absolute right-2 top-[0.4em] border border-[#FFB400] rounded-full">
                    <button
                        class="w-12 h-12 rounded-full bg-[#FFB400] group shadow-xl flex items-center justify-center relative overflow-hidden"
                    >
                        <svg
                            class="relative z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 64 64"
                            height="50"
                            width="50"
                        >
                            <path
                                fill-opacity="0.01"
                                fill="white"
                                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                            ></path>
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="3.76603"
                                stroke="white"
                                d="M42.8496 18.7067L21.0628 44.6712"
                            ></path>
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="3.76603"
                                stroke="white"
                                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                            ></path>
                        </svg>
                        <div
                            class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
                        ></div>
                        <div
                            class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
                        ></div>
                    </button>
                </div>
            </div>
        </>
    )
}