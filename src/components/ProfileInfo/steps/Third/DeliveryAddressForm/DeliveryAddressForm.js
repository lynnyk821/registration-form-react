import DeliveryButton from "./DeliveryButton";
import TitleInfo from "../../TitleInfo";
import DeliveryAddressInputField from "./DeliveryAddressInputField";
import {useForm} from "react-hook-form";
import {useStorage} from "../../../../../storage/StorageProvider";
import DeliveryAddressSelectField from "./DeliveryAddressSelectField";
import {useState} from "react";

export default function DeliveryAddressForm(){
    const [selectedCity, setSelectedCity] = useState("Choose city");
    const [selectedCountry, setSelectedCountry] = useState("Choose country");
    
    const {getValue, getStorageItems} = useStorage();
    const {handleSubmit} = useForm();

    const onSubmit = () => {
        const items = getStorageItems();
        console.log("Storage values:");
        for (const key in items) {
            console.log(`${key}: ${getValue(key)}`);
        }
    }

    return (
        <form className="h-[37rem] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[32rem] p-8 mb-6 rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                    <TitleInfo title={"Delivery address"} label={"Used for shipping orders"} />

                <DeliveryAddressInputField label={"Address"} placeholder={"Address"} keyValue={"address"} />

                <DeliveryAddressSelectField
                    label={"City"}
                    widthSelected={"27rem"}
                    selectedValue={selectedCity}
                    keyValue={"city"}
                    items={[{id: 0, value: "Kiev"}]}
                    onChangeSelectedValue={setSelectedCity}
                />

                <div className="flex gap-10">
                    <DeliveryAddressSelectField
                        label={"Country"}
                        widthSelected={"12rem"}
                        selectedValue={selectedCountry}
                        keyValue={"country"}
                        items={[{id: 0, value: "Ukraine"}]}
                        onChangeSelectedValue={setSelectedCountry}
                    />
                    <DeliveryAddressInputField label={"Zip code"} placeholder={"Zip code"} keyValue={"zipCode"} />
                </div>

                <DeliveryAddressInputField label={"Optional"} keyValue={"optional"} />
            </div>
            <div className="mt-auto">
                <DeliveryButton type={"submit"}>
                    Save
                </DeliveryButton>
            </div>
        </form>
    );
}