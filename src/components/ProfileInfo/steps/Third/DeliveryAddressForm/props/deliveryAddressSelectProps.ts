type Item = {
    id: number,
    value: string,
}

type DeliveryAddressSelectProps = {
    label: string,
    widthSelected: string,
    selectedValue: string,
    disabled : boolean,
    items: Item[],
    keyValue: string,
    onChangeSelectedValue: () => void,
}