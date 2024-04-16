import ProgressBar from "../../сommons/ProgressBar/ProgressBar";
import Title from "../../сommons/Title/Title";
import {registrationTitleContentData} from "../data/registrationData";
import React from "react";
import PhoneNumberInfo from "./PhoneNumberInfo/PhoneNumberInfo";
import ConfirmationForm from "./ConfirmationForm/ConfirmationForm";

export default function RegistrationSecondStep(){
    const RegistrationContainer = ({children}) => { return ( <div className="w-full h-full"> {children} </div> ); }

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={2}/>
            <Title name={"Registration"} content={registrationTitleContentData}/>
            <PhoneNumberInfo/>
            <ConfirmationForm/>
        </RegistrationContainer>
    );
}