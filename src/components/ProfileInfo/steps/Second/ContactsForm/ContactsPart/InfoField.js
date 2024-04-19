export default function InfoField({icon, info}){
    return (
        <div className="h-10 flex items-center gap-5 border-b-[1px] border-solid border-[#E2E4E5] mb-6">
            <img src={icon} alt="icon.svg"/>
            <p className="text-lg font-roboto">{info}</p>
        </div>
    );
}