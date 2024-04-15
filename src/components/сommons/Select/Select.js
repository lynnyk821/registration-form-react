import {Listbox} from "@headlessui/react";
import {useState} from "react";
import selectSvg from "../../../assets/svg/select.svg"

export default function Select(selectProps : SelectProps) {
    const [selectedNumber, setSelectedNumber] = useState(selectProps.selectedItem.value)

    const SelectContainer = ({children}) => {
        return (
            <div
                className={"flex flex-col items-center gap-2 shrink-0 border-b-[1px] border-solid border-[#E2E4E5]"}
                style={{ width: selectProps.width, height: selectProps.height }}
            >
                {children}
            </div>
        );
    }

    return (
        <SelectContainer>
            <Listbox value={selectedNumber} onChange={setSelectedNumber}>
                <Listbox.Button className="flex gap-2 justify-center items-center">
                    {selectedNumber}
                    <img className="h-2 w-2" src={selectSvg} alt="select"/>
                </Listbox.Button>
                <Listbox.Options>
                    <div className={"h-36 overflow-auto border-[1px] bg-white relative"}>
                        {
                            selectProps.items.map(number => (
                                <Listbox.Option
                                    className="p-1 cursor-pointer hover:bg-gray-100"
                                    key={number.id}
                                    value={number.value}
                                    style={{width:selectProps.width}}
                                >
                                    {number.value}
                                </Listbox.Option>
                            ))
                        }
                    </div>
                </Listbox.Options>
            </Listbox>
        </SelectContainer>
    )
}