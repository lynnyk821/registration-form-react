import ProfileInfoLayout from "../../ProfileInfoLayout/ProfileInfoLayout";
import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {profileInfoTitleContent} from "../../data/profileInfoData";
import DeliveryAddressForm from "./DeliveryAddressForm/DeliveryAddressForm";

export default function ProfileInfoThirdStep() {
    return (
        <ProfileInfoLayout>
            <ProgressBar numberOfIndicators={3} activeIndicators={3}/>
            <Title name={"Profile Info"} content={profileInfoTitleContent} />
            <DeliveryAddressForm />
        </ProfileInfoLayout>
    );

}