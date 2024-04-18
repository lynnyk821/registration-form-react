import greenConfirmSvg from "../../../../../assets/svg/registration/greenConfirm.svg"

export const Caption = ({password, email} : {password : string, email : string }) => {
    const GoodCaption = ({text}) => {
        return (
            <div className="flex items-center gap-1">
                <img className="w-3 h-3" src={greenConfirmSvg} alt="greenConfirm.svg" />
                <p className="text-[11px] font-medium text-[#34C759]">{text}</p>
            </div>
        );
    }
    const CaptionHandler = () => {
        if(password.length >= 10) {
            return <GoodCaption text={"Good password"} />
        }
        if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")) {
            return <GoodCaption text={"Correct format of email"} />;
        }
    }
    return (
        <div className="w-full h-4">
            <CaptionHandler />
        </div>
    );
}