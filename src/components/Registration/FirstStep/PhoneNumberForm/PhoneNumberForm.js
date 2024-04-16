import Select from "../../../сommons/Select/Select";

import {numbers} from "../registrationData";

export default function PhoneNumberForm(props : PhoneNumberFormProps){
    return (
        <form className="w-full h-56 flex flex-col">
            <div className="w-full flex flex-col h-2/3 py-8 px-8 gap-8 text-[18px] rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                <label className="w-full text-[16px] font-normal font-poppins">Enter your phone number</label>
                <div className="flex gap-4">
                    <Select width={"5rem"} height={"2rem"} items={props.numbers} selectedItem={numbers[0]}/>
                    <div className="w-full h-8 border-b-[1px] border-solid border-[#E2E4E5]">
                        <input className="w-full px-4 focus:outline-none" placeholder="555 555-1234"/>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <button className="w-32 h-12 border-[1px] text-lg font-medium border-solid border-[#BBBFC1] rounded-[4px] bg-white">
                    Send Code
                </button>
            </div>
        </form>
    );
}