export default function DeliveryButton({type, children}:{type: string, children: React.ReactNode}){
    return (
        <button
            className="w-28 h-12 bg-[#007AFF] text-white font-medium font-poppins rounded-[4px]"
            type={type}
        >
            {children}
        </button>
    );
}