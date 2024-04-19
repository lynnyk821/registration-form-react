import Select from "../../../../сommons/Select/Select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import {useState} from "react";
import {getStringWithDigitsClean, formatPhoneNumber} from "../../../../../utils/helpers";
import {maxLenOfPhoneNumber} from "../../../data/registrationData";
import {useStorage} from "../../../../../storage/StorageProvider";

export default function PhoneNumberForm(props : PhoneNumberFormProps){
    const navigate = useNavigate();
    const { setValue } = useStorage();
    const [selectedCode, setSelectedCode] = useState(props.numbers[0].value);
    const [inputText, setInputText] = useState("");
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const phoneNumber = data.phoneNumber;

        if(maxLenOfPhoneNumber === getStringWithDigitsClean(phoneNumber).length){
            setValue("code", selectedCode);
            setValue("phoneNumber", data.phoneNumber);
            navigate(props.path);
        }
    }


    const onChangeInput = (event) => {
        const formattedText = formatPhoneNumber(event.target.value);

        if (getStringWithDigitsClean(formattedText).length <= maxLenOfPhoneNumber) {
            setInputText(formattedText);
        }
    }

    return (
        <form className="w-full h-56 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col h-2/3 py-8 px-8 gap-8 text-[18px] rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                <label className="w-full text-[16px] font-normal font-poppins">Enter your phone number</label>
                <div className="flex gap-4">
                    <Select
                        {... register("selectedValue") }
                        width={"5rem"} height={"2rem"} widthSelect={"7rem"}
                        items={props.numbers}
                        selectedValue={selectedCode}
                        onChangeSelectedValue={setSelectedCode}
                    />
                    <div className="w-full h-8 border-b-[1px] border-solid border-[#E2E4E5]">
                        <input
                            {...register("phoneNumber")}
                            className="w-full px-4 focus:outline-none"
                            placeholder="555 555-1234"
                            value={inputText}
                            onChange={onChangeInput}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <button
                    className="w-32 h-12 border-[1px] text-lg font-medium border-solid border-[#BBBFC1] rounded-[4px] bg-white"
                    type="submit"
                >
                    Send Code
                </button>
            </div>
        </form>
    );
}