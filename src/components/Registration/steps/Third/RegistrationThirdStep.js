import ProgressBar from "../../../сommons/ProgressBar/ProgressBar";
import Title from "../../../сommons/Title/Title";
import {registrationTitleContentData} from "../../data/registrationData";
import React from "react";
import ConfirmedNotification from "./ConfirmedNotification/ConfirmedNotification";
import RegisterForm from "./RegisterForm/RegisterForm";
import {getQueryParams} from "../../../../helpers/helpers";

export default function RegistrationThirdStep(){
    const code = ("+" + getQueryParams("code"));
    const number = getQueryParams("number");

    const RegistrationContainer = ({children}) => { return ( <div className="w-full h-full"> {children} </div> ); }

    return (
        <RegistrationContainer>
            <ProgressBar numberOfIndicators={3} activeIndicators={3} />
            <Title name={"Registration"} content={registrationTitleContentData} />
            <ConfirmedNotification code={code} number={number} />
            <RegisterForm path={"/profileInfo/1"} />
        </RegistrationContainer>
    );
}