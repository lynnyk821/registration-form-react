import {Button} from "./Button";
import {Label} from "./Label";
import {Input} from "./Input";
import Select from "../../сommons/Select/Select";

import {numbers} from "../registrationData";

export default function PhoneForm(){
    return (
        <form className="w-full h-56 flex flex-col">
            <div className="w-full flex flex-col h-2/3 py-8 px-8 gap-8 text-[18px] rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                <Label>Enter your phone number</Label>
                <div className="flex gap-4">
                    <Select
                        width={"5rem"}
                        height={"2rem"}
                        items={numbers}
                        selectedItem={numbers[0]}
                    >
                    </Select>
                    <Input/>
                </div>
            </div>
            <div className="mt-auto">
                <Button>Send Code</Button>
            </div>
        </form>
    );
}