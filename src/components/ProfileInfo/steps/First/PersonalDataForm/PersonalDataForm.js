import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import PersonalDataTop from "./Top/PersonalDataTop";
import PersonalDataBottom from "./Bottom/PersonalDataBottom";
import PersonalDataButton from "./Button/PersonalDataButton";
import vectorSvg from "../../../../../assets/svg/profileInfo/vector.svg"


export default function PersonalDataForm() {
    const navigate = useNavigate();
    const {handleSubmit} = useForm();

    const onSubmit = () => {
        navigate("/profileInfo/2")
    }

    return (
        <form className="h-[40rem] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <PersonalDataTop title={"Personal Data"} label={"Specify exactly as in your passport"}></PersonalDataTop>
            <PersonalDataBottom itin={"123-45-678"} />
            <div className={"mt-auto"}>
                <PersonalDataButton type={"submit"}>
                    Go Next
                    <img src={vectorSvg} alt="vector.svg"/>
                </PersonalDataButton>
            </div>
        </form>
    );
}