import bluePanSvg from "../../../../../assets/svg/bluePan.svg"
import {useStorage} from "../../../../../storage/StorageProvider";

export default function PhoneNumberInfo({code, phoneNumber} : PhoneNumberInfoProps) {
    return (
        <div className="h-20 px-4 py-3 rounded-lg border-[1px] border-solid border-[#E2E4E5] flex flex-col mb-8">
            <div className="flex items-center gap-2 text-lg font-normal mb-1">
                <p>{code}</p>
                <p>{phoneNumber}</p>
            </div>
            <div className="flex">
                <p className="w-full text-sm text-[#575F6E] font-poppins">
                    Number not confirmed yet
                </p>
                <a href="/registration/1">
                    <img className="w-5 h-5" src={bluePanSvg} alt="bluePan.svg"/>
                </a>
            </div>
        </div>
    );
}