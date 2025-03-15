const Projects = () => {
    return (
        <>
            {[
                {
                    src: "./img/asset/project_logo.svg",
                    title: "Hinez",
                    description: "The project is designed to streamline and automate HR processes such as employee management, payroll, recruitment, attendance tracking, and performance evaluation, improving organizational efficiency and decision-making.",
                },
                {
                    src: "./img/asset/fidoacademy.png",
                    title: "Fido Markets",
                    description: "Fido Markets is an international brokerage firm in online forex trading, providing top quality financial and investment services all over the world.",
                },
                {
                    src: "./img/asset/fido_markets.jpg",
                    title: "Fido Academy",
                    description: "The Fido Academy is a Global Forex Trading institute offering multiple forex trading courses to all clients and Traders interested in Forex Markets.",
                },
                {
                    src: "./img/asset/swift.svg",
                    title: "Swiftrevel",
                    description: "Swiftrevel is a fintech platform that seamlessly integrates with existing tools to eliminate data silos and optimize workflow efficiency. It leverages modern technologies for secure and streamlined financial transactions.",
                },
                {
                    src: "./img/asset/my-ledger.png",
                    title: "My Ledger",
                    description: "My Ledger is an depth and accurate finance management tool/platform to monitor every aspect of revenue and spend analysis with error-free & precise reports.",
                },
                {
                    src: "./img/asset/rugrlogo.svg",
                    title: "Rugr",
                    description: "Rugr play a crucial role in the modem financial ecosystem by facilitating etween merchants and related stakeholders. As a PSP, it acts as an intermediary that connect merchants to various financial institutions, enabling the seamless processing of payments.",
                },
                {
                    src: "./img/asset/Nettech.svg",
                    title: "Fido Academy",
                    description: "The Fido Academy is a Global Forex Trading institute offering multiple forex trading courses to all clients and Traders interested in Forex Markets.",
                },
                {  
                     src: "./img/asset/Reach_point.svg",
                    title: "Fido Academy",
                    description: "The Fido Academy is a Global Forex Trading institute offering multiple forex trading courses to all clients and Traders interested in Forex Markets.",
                },
                {
                    src: "./img/asset/Book_logo.svg",
                    title: "Fido Academy",
                    description: "The Fido Academy is a Global Forex Trading institute offering multiple forex trading courses to all clients and Traders interested in Forex Markets.",
                },
               
            ].map((project, index) => (
                <div key={index} className="relative bg-white md:w-[350px] md:h-[200px] w-[300px] h-[200px] border rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                    <img src={project.src} alt={project.title} className="object-contain p-4 w-[250px] h-[200px]" />
                    <div className="absolute card__content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-full p-5 box-border bg-[#FFB400] opacity-0 transition-all duration-300 ease-in-out hover:rotate-0 hover:opacity-100">
                        <p className="m-0 text-[14px] text-[#252525] font-extrabold uppercase font-serif">{project.title}</p>
                        <p className="text-sm font-serif">{project.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Projects;