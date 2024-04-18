import SubHead from "./SubHead";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function PersonalDataTop({title, label}) {
    return (
        <div className="h-[25rem] p-8 mb-8 border-[1px] border-solid border-[#E2E4E5] rounded-lg">
            <SubHead title={title} label={label} />
            <div className="flex flex-col">
                <InputField label={"First name"} />
                <InputField label={"Second name"} />
            </div>
            <div className="flex">
                <div className="w-1/2 flex">
                    <SelectField label={"Date of Birth"} />
                </div>
                <div className="w-1/2 flex justify-end">
                    <SelectField label={"Place of Birth"} />
                </div>
            </div>
        </div>
    );
}