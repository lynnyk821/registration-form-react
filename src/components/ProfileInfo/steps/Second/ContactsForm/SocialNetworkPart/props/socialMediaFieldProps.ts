type Item = {
    id: string,
    value: string,
}

type SocialMediaFieldProps = {
    inputValue: string,
    onChangeInputValue: () => void,
    selectedValue: string,
    items: Item[],
    keyValue: string,
    onChangeSelectedValue: () => void,
}