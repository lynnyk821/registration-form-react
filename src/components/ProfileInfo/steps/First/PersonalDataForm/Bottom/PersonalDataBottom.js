import grayConfirmSvg from "../../../../../../assets/svg/grayConfirm.svg"

export default function PersonalDataBottom({itin}){
    return (
        <div className="h-[5rem] border-[1px] border-solid border-[#E2E4E5] rounded-lg p-4">
            <p className="text-lg font-roboto mb-1">{itin}</p>
            <div className="flex gap-2">
                <img src={grayConfirmSvg} alt={"graConfirm.svg"}/>
                <p className="text-[12px] text-[#575F6E] font-poppins">Your ITIN</p>
            </div>
        </div>
    );
}