import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {profileInfoTitleContent} from "../../data/profileInfoData";
import ProfileInfoLayout from "../../ProfileInfoLayout/ProfileInfoLayout";
import ContactsForm from "./ContactsForm/ContactsForm";

export default function ProfileInfoSecondStep() {
    return (
        <ProfileInfoLayout>
            <ProgressBar numberOfIndicators={3} activeIndicators={2}/>
            <Title name={"Profile Info"} content={profileInfoTitleContent} />
            <ContactsForm path={"/profileInfo/3"} />
        </ProfileInfoLayout>
    );
}