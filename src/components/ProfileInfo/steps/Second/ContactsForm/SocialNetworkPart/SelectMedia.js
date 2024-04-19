import Select from "../../../../../сommons/Select/Select";

export default function SelectMedia({selectedItem, items, keyValue, onChangeSelectedValue}) {
    return (
        <Select width={"100%"} height={"100%"}
                selectedValue={selectedItem}
                items={items}
                keyValue={keyValue}
                onChangeSelectedValue={onChangeSelectedValue}
        />
    );
}