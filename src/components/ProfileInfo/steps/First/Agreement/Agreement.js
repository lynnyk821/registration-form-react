import {useState} from "react";
import agreeButtonSvg from "../../../../../assets/svg/agreeButton.svg"


export default function Agreement({text, link, linkText}) {
    const [isAgree, setIsAgree] = useState(false);

    const buttonStyles = (isAgree) => {
        const styles = "w-4 h-4 flex justify-center items-center rounded-sm";
        return isAgree ? styles + " bg-[#007AFF]" : styles + " border-2 border-[#E2E4E5]";
    }

    return (
        <div className="h-10 px-2 gap-4 flex items-center mb-6">
            <button className={buttonStyles(isAgree)} onClick={() =>  setIsAgree(!isAgree)}>
                {isAgree ? <img className="w-3 h-3" src={agreeButtonSvg} alt="argreeButton.svg" /> : null}
            </button>
            <div className="flex items-center gap-3 font-roboto">
                <p className="text-[16px] font-medium">{text}</p>
                <a className="text-[16px] font-bold text-[#007AFF]" href={link}>{linkText}</a>
            </div>
        </div>
    );
}