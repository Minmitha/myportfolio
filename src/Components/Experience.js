import React from 'react';

// Reusable Card Component for Experience/Education
const Card = ({ icon, period, title, description }) => (
    <div className="education-card flex items-center justify-center w-full sm:w-[600px] h-[200px]">
        <div className="basis-1/4 flex flex-col items-center">
            <span className="flex items-center justify-center w-10 h-10 bg-[#FFB400] rounded-full transition-all duration-700 ease-in-out group-hover:bg-[#FFB600]">
                <img src={icon} className="w-5 h-5" alt="icon" />
            </span>
            <div className="w-[2px] h-[100px] bg-[#252525]"></div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <span className="text-sm font-semibold text-white rounded-lg bg-[#252525] w-48 opacity-80 text-center mt-2 font-serif">
                {period}
            </span>
            <span className="uppercase text-white font-medium text-lg font-serif">{title}</span>
            <p className="text-lg text-white font-serif">{description}</p>
        </div>
    </div>
);

const Experience = () => {
    // Experience Data
    const experienceData = [
        {
            icon: './img/asset/job.svg',
            period: 'April, 2023 - PRESENT',
            title: 'Software Engineer - Cloudrevel Innovations',
            description: 'Developing and maintaining software solutions tailored to client needs.',
        },
        {
            icon: './img/asset/job.svg',
            period: 'July, 2022 - April, 2023',
            title: 'Junior PHP Developer - Fido Groups',
            description: 'Building and maintaining web applications while enhancing backend functionality.',
        },
        {
            icon: './img/asset/job.svg',
            period: 'April, 2022 - June, 2022',
            title: 'Web Developer Intern - Imaje Technology',
            description: 'Assisted in developing responsive websites and optimizing front-end performance.',
        },
    ];

    // Education Data
    const educationData = [
        {
            icon: './img/asset/education.svg',
            period: 'August, 2018 - April, 2022',
            title: 'Bachelor Degree - Anna University',
            description: "Bachelor's of Engineering in Computer Science from Anna University.",
        },
        {
            icon: './img/asset/education.svg',
            period: 'June, 2016 - March, 2018',
            title: 'Class XII - TV Sundram Matric Higher Secondary School',
            description: 'Completed Class XII with a focus on Science.',
        },
        {
            icon: './img/asset/education.svg',
            period: 'June, 2014 - March, 2016',
            title: 'Class X - TV Sundram Matric Higher Secondary School',
            description: 'Completed Class X with a focus on general studies.',
        },
    ];

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <hr className="w-full md:w-[600px] bg-[#252525] h-[2px] mb-16 opacity-45" />
            </div>

            <div className="flex items-center justify-center w-full mb-16">
                <p className="text-white text-2xl font-medium uppercase font-serif">Experience & Education</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-center">
                {/* Experience Section */}
                <div className="flex flex-col gap-4">
                    {experienceData.map((exp, index) => (
                        <Card
                            key={index}
                            icon={exp.icon}
                            period={exp.period}
                            title={exp.title}
                            description={exp.description}
                        />
                    ))}
                </div>

                {/* Education Section */}
                <div className="flex flex-col gap-4">
                    {educationData.map((edu, index) => (
                        <Card
                            key={index}
                            icon={edu.icon}
                            period={edu.period}
                            title={edu.title}
                            description={edu.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Experience;
