import { Listbox } from "@headlessui/react";
import {forwardRef, useState} from "react";
import selectSvg from "../../../assets/svg/registration/select.svg";

const Select = forwardRef((selectProps : SelectProps, ref) => {
    const [selectedValue, setSelectedValue] = useState(selectProps.selectedValue);

    const SelectContainer = ({ children }) => {
        return (
            <div ref={ref}
                className={"flex py-1 text-[16px] flex-col items-center gap-2 shrink-0 border-b-[1px] border-solid border-[#E2E4E5]"}
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
                <Listbox.Button className="w-full px-4 flex items-center">
                    <div className="flex">
                        {selectedValue}
                    </div>
                    <div className="ml-auto">
                        <img className="h-2 w-2" src={selectSvg} alt="select" />
                    </div>
                </Listbox.Button>
                <Listbox.Options>
                    <div className={`w-[100%] h-36 overflow-auto border-[1px] bg-white relative`}>
                        {selectProps.items.map(number => (
                            <Listbox.Option
                                className={`p-2 cursor-pointer hover:bg-gray-100`}
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