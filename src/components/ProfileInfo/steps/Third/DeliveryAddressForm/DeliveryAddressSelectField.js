import Select from "../../../../сommons/Select/Select";

export default function DeliveryAddressSelectField(props : DeliveryAddressSelectProps){
    return (
        <div className="h-20 w-full mb-6">
            <p className="h-5 text-sm font-poppins">
                {props.label}
            </p>
            <Select width={"100%"} height={"3.75rem"} widthSelect={props.widthSelected} padding={"15px"}
                    selectedValue={props.selectedValue}
                    items={props.items}
                    keyValue={props.keyValue}
                    onChangeSelectedValue={props.onChangeSelectedValue}
            />
        </div>
    );
}