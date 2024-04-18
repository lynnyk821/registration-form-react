import ProfileInfoLayout from "../../ProfileInfoLayout/ProfileInfoLayout";
import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import { profileInfoTitleContent } from "../../data/profileInfoData";
import Agreement from "./Agreement/Agreement";
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm";

export default function ProfileInfoFirstStep() {
    return (
        <ProfileInfoLayout>
            <ProgressBar numberOfIndicators={3} activeIndicators={1} />
            <Title name={"Profile Info"} content={profileInfoTitleContent} />
            <Agreement text={"I agree with"} link={"/term-of-use"} linkText={"Term of use"} />
            <PersonalDataForm />
        </ProfileInfoLayout>
    );
}