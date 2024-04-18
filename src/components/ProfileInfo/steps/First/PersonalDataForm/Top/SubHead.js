export default function SubHead({title, label}){
    return (
        <div className="mb-8 font-poppins">
            <p className="text-xl font-bold">{title}</p>
            <label className="text-sm text-[#575F6E]">{label}</label>
        </div>
    );
}