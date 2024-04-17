import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {registrationTitleContentData} from "../../data/registrationData";
import React from "react";
import PhoneNumberInfo from "./PhoneNumberInfo/PhoneNumberInfo";
import ConfirmationForm from "./ConfirmationForm/ConfirmationForm";
import {getQueryParams} from "../../../../helpers/helpers";
import RegistrationContainer from "../../RegistrationLayout/RegistrationLayout";

export default function RegistrationSecondStep(){
    const code = getQueryParams("code");
    const number = getQueryParams("number");

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={2} />
            <Title name={"Registration"} content={registrationTitleContentData} />
            <PhoneNumberInfo code={"+" + code} number = {number} />
            <ConfirmationForm path={`/registration/3?code=${code}&number=${number}`} />
        </RegistrationContainer>
    );
}