type Item = {
    id: number,
    value: string,
}

type SelectProps = {
    width : string,
    height : string,
    selectedValue : string,
    items: Item[],
    keyValue : string,
    onChangeSelectedValue: () => void,
}