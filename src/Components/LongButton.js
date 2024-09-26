import { useNavigate } from "react-router-dom";
const LongButton = ({ text, icon, iconclass, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Check if it's a Google Drive URL
        if (link.includes("drive.google.com")) {
            const fileIdMatch = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
            if (fileIdMatch) {
                const fileId = fileIdMatch[1];
                const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                // Create anchor element to download the file
                const a = document.createElement("a");
                a.href = downloadLink;
                a.download = true;
                a.click();
            }
        } else {
            // For normal navigation
            navigate(link);
        }
    };

    return (
        <>
            <div className="relative inline-flex items-center rounded-full overflow-hidden bg-[#111111] shadow-xl border-2 border-[#FFB400]">
                <p className="bg-transparent outline-none border-none pl-5 pr-4 py-2 font-sans text-lg font-semibold text-white">
                    {text}
                </p>
                <button onClick={handleClick}
                    className="w-12 h-12 flex-shrink-0 rounded-full bg-[#FFB400] border-2 border-[#FFB400] group shadow-xl flex items-center justify-center relative overflow-hidden m-1"
                >
                    <div className="w-full h-full rotate-45 absolute left-0 top-0 bg-black group-hover:-left-full group-hover:-top-full duration-1000 z-0"></div>
                    <div className="w-full h-full -rotate-45 absolute left-0 top-0 group-hover:left-full group-hover:top-full bg-black duration-1000 z-0"></div>
                    <img src={icon} className={iconclass} alt="Icon" />
                </button>
            </div>
        </>
    );
};

export default LongButton;
