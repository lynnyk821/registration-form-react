import {useStorage} from "../../../../../storage/StorageProvider";

export default function DeliveryAddressInputField({label, keyValue, placeholder}){
    const storage = useStorage();

    return (
        <div className="h-20 w-full mb-5">
            <p className="h-5 text-sm flex font-poppins">{label}</p>
            <input
                className="w-full text-lg border-b-[1px] mt-2 p-3 border-solid border-[#E2E4E5] focus:outline-none"
                placeholder={placeholder}
                onChange={(event) => {
                    storage.setValue(keyValue, event.target.value);
                }}
            />
        </div>
    );
}