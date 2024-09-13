export function Skills({ percentage, skill }) {

    return (
        <>
            <div className="card flex flex-col rounded-full items-center justify-center text-center border h-[150px] w-[250px] cursor-pointer border-[#252525] gap-2">
                <p className="text-2xl text-white">{percentage}</p>
                <p className="text-2xl font-semibold text-[#FFB400]">{skill}</p>
            </div>
        </>
    );
}
