import { useNavigate } from "react-router-dom";
export function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center rounded-full bg-[#FFB400] group transition-all duration-700 ease-in-out hover:bg-[#FFB600]">
                <p className="p-3 text-white text-sm font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    HOME
                </p>
                <button className="flex items-center justify-center w-14 h-14 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]" onClick={() => navigate('/')}>
                    <img src="./img/asset/home.svg" className="w-7 h-7" alt="home" />
                </button>
            </div>

            <div className="flex items-center rounded-full group transition-all duration-700 ease-in-out hover:bg-[#FFB600]">
                <p className="p-3 text-white text-sm font-medium text-nowrap hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    ABOUT
                </p>
                <button
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2B2A2A] transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]" onClick={() => navigate('/about')}>
                    <img src="./img/asset/user.svg" className="w-7 h-7" alt="about" />
                </button>
            </div>
            <div className="flex items-center rounded-full  group transition-all duration-700 ease-in-out hover:bg-[#FFB600]">
                <p className="p-3 text-white text-sm font-medium text-nowrap hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    PORTFOLIO
                </p>
                <button className="flex items-center justify-center w-14 h-14  rounded-full  bg-[#2B2A2A] transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                    <img src="./img/asset/job.svg" className="w-7 h-7" alt="job" />
                </button>
            </div>
            <div className="flex items-center rounded-full  group transition-all duration-700 ease-in-out hover:bg-[#FFB600]">
                <p className="p-3 text-white text-sm font-medium text-nowrap hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    CONTACT
                </p>
                <button className="flex items-center justify-center w-14 h-14  rounded-full  bg-[#2B2A2A] transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                    <img src="./img/asset/mail.svg" className="w-7 h-7" alt="mail" />
                </button>
            </div>
            <div className="flex items-center rounded-full  group transition-all duration-700 ease-in-out hover:bg-[#FFB600]">
                <p className="p-3 text-white text-sm font-medium text-nowrap hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    BLOG
                </p>
                <button className="flex items-center justify-center w-14 h-14  rounded-full  bg-[#2B2A2A] transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                    <img src="./img/asset/message.svg" className="w-7 h-7" alt="blog" />
                </button>
            </div>
        </>
    )
}