import Select from "../../../../../сommons/Select/Select";

const SelectField = ({label, selectedValue, items, onChangeSelectedValue, keyValue}) => {
    return (
        <div className="w-[90%] flex flex-col">
            <label className="text-[14px] font-poppins">{label}</label>
            <Select
                    width={"100%"}
                    height={"auto"}
                    widthSelect={"15rem"}
                    selectedValue={selectedValue}
                    items={items}
                    keyValue={keyValue}
                    onChangeSelectedValue={onChangeSelectedValue}
            />
        </div>
    );
}

export default SelectField;