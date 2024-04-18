import React from "react";

import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import Notification from "./Notification/Notification";
import PhoneNumberForm from "./PhoneNumberForm/PhoneNumberForm";
import RegistrationContainer from "../../RegistrationLayout/RegistrationLayout";

import {numbers, registrationNotificationMessage, registrationTitleContentData} from "../../data/registrationData";

export default function RegistrationFirstStep(){
    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={1} />
            <Title name={"Registration"} content={registrationTitleContentData} />
            <Notification message={registrationNotificationMessage} />
            <PhoneNumberForm numbers={numbers} path={"/registration/2"} />
        </RegistrationContainer>
    );
}