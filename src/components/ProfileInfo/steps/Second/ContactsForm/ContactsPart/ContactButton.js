export default function ContactButton({type, children}){
    return (
        <button
            className="w-28 h-12 flex gap-2 justify-center items-center border-[1px] text-lg font-medium border-solid border-[#BBBFC1] rounded-[4px] bg-white"
            type={type}
        >
            {children}
        </button>
    );
}
