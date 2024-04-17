import blueReturnSvg from "../../../../../assets/svg/blueReturn.svg"
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {formatCodeNumber, getStringWithDigitsClean} from "../../../../../helpers/helpers";
import {confirmationCode, maxLenOfMessageCode} from "../../../data/registrationData";


export default function ConfirmationForm({path} : {path : string}) {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const { handleSubmit } = useForm();

    const onSubmit = () => {
        if(confirmationCode === getStringWithDigitsClean(inputText)) {
            navigate(path)
        }
    }

    const onChangeInput = (event) => {
        const formattedText = formatCodeNumber(event.target.value);

        if (getStringWithDigitsClean(formattedText).length <= maxLenOfMessageCode) {
            console.log(event.target.value);
            setInputText(formattedText);
        }
    }

    return (
        <form className="h-52 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="w-full h-5 mb-5">Confirmation code</label>

            <div className="w-full flex">
                <div className="w-2/3">
                    <input
                        className="h-11 w-full focus:outline-none focus:border-b-[1px] focus:border-[#007AFF] mb-2"
                        placeholder="—     —     —     —"
                        value={inputText}
                        onChange={onChangeInput}
                    />
                    <p className="w-full h-10 text-sm text-[#575F6E] font-poppins">
                        Confirm phone number with code from sms message
                    </p>
                </div>
                <div className="w-1/3 h-1/2 flex justify-end">
                     <button
                        className="flex items-center justify-center gap-2 text-lg font-medium font-roboto text-[#007AFF]"
                        type="reset"
                     >
                         <img src={blueReturnSvg} alt="blueReturn.svg" />
                         Send again
                     </button>
                </div>
            </div>

            <div className="mt-auto">
                <button
                    className="w-28 h-12 border-[1px] text-lg font-medium border-solid border-[#BBBFC1] rounded-[4px] bg-white"
                    type="submit"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
}