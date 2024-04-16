import React from "react";

import Layout from "../components/сommons/Layout/Layout";
import RegistrationFirstStep from "../components/Registration/FirstStep/RegistrationFirstStep";
import {useParams} from "react-router-dom";
import RegistrationSecondStep from "../components/Registration/SecondStep/RegistrationSecondStep";
import RegistrationThirdStep from "../components/Registration/ThirdStep/RegistrationThirdStep";

export default function Registration(){
    const { id } = useParams();

    const RegistrationSwitcher = (id : string) => {
        if (id === "1") {
            return <RegistrationFirstStep />;
        } else if (id === "2") {
            return <RegistrationSecondStep />;
        } else if (id === "3") {
            return <RegistrationThirdStep />;
        } else {
            return <div>Page not found</div>;
        }
    }

    return (
        <Layout>{RegistrationSwitcher(id)}</Layout>
    );
}