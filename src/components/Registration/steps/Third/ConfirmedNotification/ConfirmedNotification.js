import grayConfirmSvg from "../../../../../assets/svg/grayConfirm.svg"


export default function ConfirmedNotification({code, number}){

    return (
        <div className="h-20 px-4 py-3 rounded-lg border-[1px] border-solid border-[#E2E4E5] mb-8">
            <div className="flex items-center gap-2 text-lg font-normal mb-1">
                <p>{code}</p>
                <p>{number}</p>
            </div>
            <div className="flex gap-2 font-poppins font-medium  text-[#575F6E]">
                <img src={grayConfirmSvg} alt="grayConfirm.svg" />
                <p className="text-sm">Number confirmed</p>
            </div>
        </div>
    );
}