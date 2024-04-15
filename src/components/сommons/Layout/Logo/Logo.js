export default function Logo(props : LogoProps) {
    return (
        <button className={"w-44 h-6 flex justify-center items-center gap-3"}>
            <img src={props.src} alt="logo"/>
            <p className="text-[16px] font-raleway font-bold leading-4 text-[#242731]">{props.children}</p>
        </button>
    );
}