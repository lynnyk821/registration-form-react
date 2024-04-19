import {useState} from "react";
import {useStorage} from "../../../../../../storage/StorageProvider";

export default function InputField({label, keyValue}){
    const storage = useStorage();
    const [inputValue, setInputValue] = useState("");
    const handleOnChange = (event) => {
        const textValue = event.target.value;
        setInputValue(textValue);
        storage.setValue(keyValue, textValue)
    }
    return (
        <div className="flex flex-col gap-2 border-b-2 border-solid border-[#E2E4E5] mb-6">
            <label className="text-[14px] font-poppins">{label}</label>
            <input
                className="h-10 px-3 text-[16px] font-roboto focus:outline-none"
                value={inputValue}
                onChange={(event) => handleOnChange(event)}
                placeholder="Alexander"
            />
        </div>
    );
}