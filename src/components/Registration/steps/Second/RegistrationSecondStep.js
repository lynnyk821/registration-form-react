import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {registrationTitleContentData} from "../../data/registrationData";
import React from "react";
import PhoneNumberInfo from "./PhoneNumberInfo/PhoneNumberInfo";
import ConfirmationForm from "./ConfirmationForm/ConfirmationForm";
import RegistrationContainer from "../../RegistrationLayout/RegistrationLayout";
import {useStorage} from "../../../../storage/StorageProvider";

export default function RegistrationSecondStep(){
    const storage = useStorage();

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={2} />
            <Title name={"Registration"} content={registrationTitleContentData} />
            <PhoneNumberInfo code={storage.getValue("code")} phoneNumber= {storage.getValue("phoneNumber")} />
            <ConfirmationForm path={`/registration/3`} />
        </RegistrationContainer>
    );
}