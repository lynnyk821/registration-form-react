import React from "react";
import ProgressBar from "../../сommons/ProgressBar/ProgressBar";
import Title from "../../сommons/Title/Title";
import {numbers, registrationNotificationMessage, registrationTitleContentData} from "./registrationData";
import Notification from "./Notification/Notification";
import PhoneNumberForm from "./PhoneNumberForm/PhoneNumberForm";

export default function RegistrationFirstStep(){
    const RegistrationContainer = ({children}) => {
        return (
            <div className="w-full h-full">{children}</div>
        );
    }
    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={1}/>
            <Title name={"Registration"} content={registrationTitleContentData}/>
            <Notification message={registrationNotificationMessage}/>
            <PhoneNumberForm numbers={numbers}></PhoneNumberForm>
        </RegistrationContainer>
    );
}