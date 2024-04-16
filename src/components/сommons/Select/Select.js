import { Listbox } from "@headlessui/react";
import {forwardRef, useState} from "react";
import selectSvg from "../../../assets/svg/select.svg";

const Select = forwardRef((selectProps : SelectProps, ref) => {
    const [selectedValue, setSelectedValue] = useState(selectProps.selectedValue);

    const SelectContainer = ({ children }) => {
        return (
            <div ref={ref}
                className={"flex flex-col items-center gap-2 shrink-0 border-b-[1px] border-solid border-[#E2E4E5]"}
                style={{ width: selectProps.width, height: selectProps.height }}
            >
                {children}
            </div>
        );
    };

    return (
        <SelectContainer>
            <Listbox value={selectedValue} onChange={(value) => {
                setSelectedValue(value);
                selectProps.onChangeSelectedValue(value);
            }}>
                <Listbox.Button className="flex gap-2 justify-center items-center">
                    {selectedValue}
                    <img className="h-2 w-2" src={selectSvg} alt="select" />
                </Listbox.Button>
                <Listbox.Options>
                    <div className={"h-36 overflow-auto border-[1px] bg-white relative"}>
                        {selectProps.items.map(number => (
                            <Listbox.Option
                                className="p-1 cursor-pointer hover:bg-gray-100"
                                key={number.id}
                                value={number.value}
                                style={{ width: selectProps.width }}
                            >
                                {number.value}
                            </Listbox.Option>
                        ))}
                    </div>
                </Listbox.Options>
            </Listbox>
        </SelectContainer>
    );
});

export default Select;