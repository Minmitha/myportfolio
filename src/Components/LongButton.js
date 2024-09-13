import '../App.css';
export function LongButton({text}) {
    return (
        <>
            <div>
                <button className="Btn-Container flex w-[170px] h-auto bg-[#0a0a0a] rounded-full shadow-md justify-between items-center  cursor-pointer border-[2px] border-[#FFB400]">
                    <span className="text text-white text-xl tracking-wide flex-1 h-full flex items-center justify-center">{text}</span>
                    <span className="icon-Container w-[45px] h-[45px] bg-[#FFB400] flex items-center justify-center rounded-full border-[3px] border-[#1d2129]">
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

            </div>
        </>
    )
}