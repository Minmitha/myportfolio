const Skills = ({ percentage, skill }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center border h-[80px] w-[160px] sm:h-[100px] sm:w-[200px] cursor-pointer border-[#252525] gap-2">
            <p className="text-xl sm:text-2xl text-white">{percentage}</p>
            <p className="text-xl sm:text-2xl font-semibold text-[#FFB400]">{skill}</p>
        </div>
    );
}
export default Skills;