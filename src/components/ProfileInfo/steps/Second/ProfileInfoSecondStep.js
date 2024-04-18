import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {profileInfoTitleContent} from "../../data/profileInfoData";
import ProfileInfoLayout from "../../ProfileInfoLayout/ProfileInfoLayout";

export default function ProfileInfoSecondStep() {
    return (
        <ProfileInfoLayout>
            <ProgressBar numberOfIndicators={3} activeIndicators={2}/>
            <Title name={"Profile Info"} content={profileInfoTitleContent} />
        </ProfileInfoLayout>
    );
}