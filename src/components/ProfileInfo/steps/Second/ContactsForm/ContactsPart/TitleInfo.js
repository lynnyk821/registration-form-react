export default function TitleInfo({title, label}) {
    return (
        <div className="flex flex-col font-poppins mb-6">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-sm text-[#575F6E]">{label}</p>
        </div>
    );
}