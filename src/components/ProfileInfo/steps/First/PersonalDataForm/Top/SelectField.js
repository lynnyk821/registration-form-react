import Select from "../../../../../сommons/Select/Select";

const SelectField = ({label}) => {

    return (
        <div className="w-[90%] flex flex-col">
            <label className="text-[14px] font-poppins">{label}</label>
            <Select
                    width={"100%"}
                    height={"auto"}
                    selectedValue={"12.05.1992"}
                    items={[{id: 1, value: "12.05.1992"}]}
                    onChangeSelectedValue={"s"}
            />
        </div>
    );
}

export default SelectField;