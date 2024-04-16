import bluePanSvg from "../../../../assets/svg/bluePan.svg"

export default function PhoneNumberInfo() {
    const queryParams = new URLSearchParams(window.location.search);
    const code = "+" + queryParams.get("code");
    const number = queryParams.get("number");

    return (
        <div className="h-20 p-3 rounded-lg border-[1px] border-solid border-[#E2E4E5] flex flex-col mb-8">
            <div className="flex items-center gap-2 text-lg font-normal mb-1">
                <p>{code}</p>
                <p>{number}</p>
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