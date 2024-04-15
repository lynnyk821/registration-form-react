export function Button({children}){
    return (
        <button className="w-32 h-12 border-[1px] text-lg font-medium border-solid border-[#BBBFC1] rounded-[4px] bg-white">
            {children}
        </button>
    );
}