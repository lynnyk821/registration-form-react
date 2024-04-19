import SubHead from "./SubHead";
import InputField from "./InputField";
import SelectField from "./SelectField";
import {useState} from "react";
import {datesOfBirth, placesOfBirth} from "../../../../data/profileInfoData"

export default function PersonalDataTop(
    { title, label }
) {
    const [selectedDateOfBirth, setSelectedDateOfBirth] = useState("Choose the date");
    const [selectedPlaceOfBirth, setSelectedPlaceOfBirth] = useState("Choose the place");

    return (
        <div className="h-[25rem] p-8 mb-8 border-[1px] border-solid border-[#E2E4E5] rounded-lg">
            <SubHead title={title} label={label} />
            <div className="flex flex-col">
                <InputField label={"First name"} keyValue={"firstName"} />
                <InputField label={"Second name"} keyValue={"secondName"}/>
            </div>
            <div className="flex">
                <div className="w-1/2 flex">
                    <SelectField
                        label={"Date of Birth"}
                        selectedValue={selectedDateOfBirth}
                        items={datesOfBirth}
                        keyValue={"dateOfBirth"}
                        onChangeSelectedValue={setSelectedDateOfBirth}
                    />
                </div>
                <div className="w-1/2 flex justify-end">
                    <SelectField
                        label={"Place of Birth"}
                        selectedValue={selectedPlaceOfBirth}
                        items={placesOfBirth}
                        keyValue={"placeOfBirth"}
                        onChangeSelectedValue={setSelectedPlaceOfBirth}
                    />
                </div>
            </div>
        </div>
    );
}