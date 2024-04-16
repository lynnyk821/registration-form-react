interface Item {
    id: number,
    value: string,
}

type SelectProps = {
    width : string,
    height : string,
    selectedItem : Item,
    items: Item[],
}