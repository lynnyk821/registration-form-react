import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {registrationTitleContentData} from "../../data/registrationData";
import React from "react";
import ConfirmedNotification from "./ConfirmedNotification/ConfirmedNotification";
import RegisterForm from "./RegisterForm/RegisterForm";
import {useStorage} from "../../../../storage/StorageProvider";
import RegistrationContainer from "../../RegistrationLayout/RegistrationLayout";

export default function RegistrationThirdStep(){
    const storage = useStorage();

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={3} />
            <Title name={"Registration"} content={registrationTitleContentData} />
            <ConfirmedNotification code={storage.getValue("code")} phoneNumber={storage.getValue("phoneNumber")} />
            <RegisterForm path={"/profileInfo/1"} storage={storage} />
        </RegistrationContainer>
    );
}