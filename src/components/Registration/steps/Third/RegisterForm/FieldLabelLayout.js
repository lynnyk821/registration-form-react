import buttonEyeSvg from "../../../../../assets/svg/buttonEye.svg";

export const FieldLabelLayout = ({className, label, children, eyeButton}) => {
    return (
        <div className={className}>
            <label className="h-6 flex items-center shrink-0 text-[15px] mb-2 font-poppins">{label}</label>
            <div className="flex h-11 border-b-[2px] border-solid border-[#E2E4E5]">
                {children}
                {eyeButton ? <div className="w-10 h-full flex justify-center items-center">
                    <button type="reset">
                        <img className="w-6 h-6" src={buttonEyeSvg} alt="buttonEye.svg"/>
                    </button>
                </div> : null}
            </div>
        </div>
    );
}