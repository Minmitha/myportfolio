export function LongButton({ text, icon, iconclass }) {
    return (
        <>
            <div className="relative inline-flex items-center rounded-full overflow-hidden bg-[#111111] shadow-xl border-2  border-[#FFB400]">
                {/* Text content */}
                <p className="bg-transparent outline-none border-none pl-5 pr-4 py-2 font-sans text-lg font-semibold text-white">
                    {text}
                </p>

                {/* Icon Button */}
                <button
                    className="w-12 h-12 flex-shrink-0 rounded-full bg-[#FFB400] border-2 border-[#FFB400] group shadow-xl flex items-center justify-center relative overflow-hidden m-1"
                >
                    {/* Render dynamic image */}
                    <img src={icon} className={iconclass} alt="Icon" />

                    {/* Background animation */}
                    <div className="w-full h-full rotate-45 absolute left-0 top-0 bg-black group-hover:-left-full group-hover:-top-full duration-1000"></div>
                    <div className="w-full h-full -rotate-45 absolute left-0 top-0 group-hover:left-full group-hover:top-full bg-black duration-1000"></div>
                </button>
            </div>
        </>
    );
}
