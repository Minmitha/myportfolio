import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location (route)

    return (
        <>
            {/* HOME Button */}
            <div className={`flex items-center rounded-full bg-[#FFB400] group transition-all duration-700 ease-in-out hover:bg-[#FFB600] ${location.pathname === '/' ? 'bg-[#FFB600]' : ''}`}>
                <p className="p-3 text-white text-sm font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    HOME
                </p>
                <button className={`flex items-center justify-center w-14 h-14 rounded-full transition-all  group-hover:bg-[#FFB600] duration-700 ease-in-out ${location.pathname === '/' ? 'bg-[#FFB600]' : 'bg-[#2B2A2A]'}`} onClick={() => navigate('/')}>
                    <img src="./img/asset/home.svg" className="w-7 h-7" alt="home" />
                </button>
            </div>

            {/* ABOUT Button */}
            <div className={`flex items-center rounded-full group transition-all duration-700 ease-in-out hover:bg-[#FFB600]  ${location.pathname === '/about' ? 'bg-[#FFB600]' : ''}`}>
                <p className="p-3 text-white text-sm font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    ABOUT
                </p>
                <button className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-700 ease-in-out  group-hover:bg-[#FFB600] ${location.pathname === '/about' ? 'bg-[#FFB600]' : 'bg-[#2B2A2A]'}`} onClick={() => navigate('/about')}>
                    <img src="./img/asset/user.svg" className="w-7 h-7" alt="about" />
                </button>
            </div>

            {/* PORTFOLIO Button */}
            <div className={`flex items-center rounded-full group transition-all duration-700 ease-in-out hover:bg-[#FFB600] ${location.pathname === '/portfolio' ? 'bg-[#FFB600]' : ''}`}>
                <p className="p-3 text-white text-sm font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    PORTFOLIO
                </p>
                <button className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-700 ease-in-out  group-hover:bg-[#FFB600] ${location.pathname === '/portfolio' ? 'bg-[#FFB600]' : 'bg-[#2B2A2A]'}`} onClick={() => navigate('/portfolio')}>
                    <img src="./img/asset/job.svg" className="w-7 h-7" alt="portfolio" />
                </button>
            </div>

            {/* CONTACT Button */}
            <div className={`flex items-center rounded-full group transition-all duration-700 ease-in-out hover:bg-[#FFB600] ${location.pathname === '/contactme' ? 'bg-[#FFB600]' : ''}`}>
                <p className="p-3 text-white text-sm font-medium hidden group-hover:inline-block transition-all duration-700 ease-in-out">
                    CONTACT
                </p>
                <button className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-700 ease-in-out  group-hover:bg-[#FFB600]  ${location.pathname === '/contactme' ? 'bg-[#FFB600]' : 'bg-[#2B2A2A]'}`} onClick={() => navigate('/contactme')}>
                    <img src="./img/asset/mail.svg" className="w-7 h-7" alt="contact" />
                </button>
            </div>
        </>
    );
}
export default Navbar;