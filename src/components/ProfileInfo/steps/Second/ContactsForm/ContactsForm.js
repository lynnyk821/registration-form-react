import ContactButton from "./ContactsPart/ContactButton";

import vectorSvg from "../../../../../assets/svg/vector.svg";
import {useStorage} from "../../../../../storage/StorageProvider";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import ContactsPart from "./ContactsPart/ContactsPart";
import SocialNetworkPart from "./SocialNetworkPart/SocialNetworkPart";

export default function ContactsForm({path}){
    const storage = useStorage();
    const navigate = useNavigate();
    const {handleSubmit} = useForm();

    const onSubmit = () => {
        navigate(path);
    }

    return (
        <form className="h-[37rem] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[30rem] p-8 border-[1px] border-solid border-[#E2E4E5]">
                <ContactsPart storage={storage} />
                <SocialNetworkPart storage={storage} />
            </div>
            <div className="mt-auto">
                <ContactButton type={"submit"}>
                    Go Next
                    <img src={vectorSvg} alt="vector.svg"/>
                </ContactButton>
            </div>
        </form>
    );
}