import ProfileInfoLayout from "../../ProfileInfoLayout/ProfileInfoLayout";
import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {profileInfoTitleContent} from "../../data/profileInfoData";
import {useStorage} from "../../../../storage/StorageProvider";

export default function ProfileInfoThirdStep() {
    const storage = useStorage();
    return (
        <ProfileInfoLayout>
            <ProgressBar numberOfIndicators={3} activeIndicators={3}/>
            <Title name={"Profile Info"} content={profileInfoTitleContent} />
            <ul className="flex flex-col">
                <li>{storage.getValue("code")}</li>
                <li>{storage.getValue("phoneNumber")}</li>
                <li>{storage.getValue("email")}</li>
                <li>{storage.getValue("password")}</li>
                <li>{storage.getValue("firstName")}</li>
                <li>{storage.getValue("secondName")}</li>
                <li>{storage.getValue("dateOfBirth")}</li>
                <li>{storage.getValue("placeOfBirth")}</li>
                <li>{storage.getValue("firstMedia")}</li>
                <li>{storage.getValue("secondMedia")}</li>
            </ul>

        </ProfileInfoLayout>
    );

}