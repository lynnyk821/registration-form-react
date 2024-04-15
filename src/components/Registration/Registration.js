import React from "react";
import Layout from "../Layout/Layout";
import ProgressBar from "../ProgressBar/ProgressBar";

import Title from "../Title/Title";
import {registrationNotificationMessage, registrationTitleContentData} from "./registrationData";
import Notification from "../Notification/Notification";
import PhoneForm from "../PhoneForm/PhoneForm";

export default function Registration() {
    const RegistrationContainer = ({children}) => {
        return (
            <div className="w-full h-full">{children}</div>
        );
    }
    return (
        <Layout>
            <RegistrationContainer>
                <ProgressBar numberOfIndicators={3} activeIndicators={1}/>
                <Title name={"Registration"} content={registrationTitleContentData}/>
                <Notification message={registrationNotificationMessage}/>
                <PhoneForm></PhoneForm>
            </RegistrationContainer>
        </Layout>
    );
}