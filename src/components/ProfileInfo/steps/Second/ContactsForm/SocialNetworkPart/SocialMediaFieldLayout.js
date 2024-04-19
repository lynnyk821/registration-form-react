import SelectMedia from "./SelectMedia";

export default function SocialMediaFieldLayout(props : SocialMediaFieldProps){
    return (
        <div className="flex gap-5">
            <div className="w-3/5 h-10">
                <SelectMedia
                    selectedItem={props.selectedValue}
                    items={props.items}
                    keyValue={props.keyValue}
                    onChangeSelectedValue={props.onChangeSelectedValue}>
                </SelectMedia>
            </div>
            <div className="w-2/5 h-10 flex items-end ">
                <input
                    className="w-full p-2 text-lg border-b-[1px] focus:outline-none"
                    value={props.inputValue}
                    onChange={(event) => props.onChangeInputValue(event.target.value)}
                />
            </div>
        </div>
    );
}