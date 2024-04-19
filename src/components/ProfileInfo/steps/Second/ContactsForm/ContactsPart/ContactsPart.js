import TitleInfo from "../TitleInfo";
import InfoField from "./InfoField";
import letterSvg from "../../../../../../assets/svg/letter.svg";
import phoneSvg from "../../../../../../assets/svg/phone.svg";

export default function ContactsPart({storage}){
    return (
        <div className="flex flex-col">
            <TitleInfo title={"Contacts"} label={"These contacts are used to inform about orders"} />
            <InfoField icon={letterSvg} info={storage.getValue("email")} />
            <InfoField icon={phoneSvg} info={storage.getValue("code") + " " + storage.getValue("phoneNumber")} />
        </div>
    );
}