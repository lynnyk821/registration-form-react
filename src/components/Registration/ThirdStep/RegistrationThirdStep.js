import ProgressBar from "../../сommons/ProgressBar/ProgressBar";
import Title from "../../сommons/Title/Title";
import {registrationTitleContentData} from "../data/registrationData";
import PhoneNumberInfo from "../SecondStep/PhoneNumberInfo/PhoneNumberInfo";
import ConfirmationForm from "../SecondStep/ConfirmationForm/ConfirmationForm";
import React from "react";

export default function RegistrationThirdStep(){
    const RegistrationContainer = ({children}) => { return ( <div className="w-full h-full"> {children} </div> ); }

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={3}/>
            <Title name={"Registration"} content={registrationTitleContentData}/>
        </RegistrationContainer>
    );
}