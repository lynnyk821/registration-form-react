import React from "react";
import {useParams} from "react-router-dom";
import Layout from "../components/сommons/Layout/Layout";
import ProfileInfoFirstStep from "../components/ProfileInfo/steps/First/ProfileInfoFirstStep";
import ProfileInfoSecondStep from "../components/ProfileInfo/steps/Second/ProfileInfoSecondStep";
import ProfileInfoThirdStep from "../components/ProfileInfo/steps/Third/ProfileInfoThirdStep";

export default function ProfileInfo(){
    const { id } = useParams();

    const ProfileInfoSwitcher = (id : string) => {
        if (id === "1") {
            return <ProfileInfoFirstStep />;
        } else if (id === "2") {
            return <ProfileInfoSecondStep />;
        } else if (id === "3") {
            return <ProfileInfoThirdStep />
        } else {
            return <div>Page not found (use valid path /profileInfo/[1-3])</div>;
        }
    }

    return (
        <Layout>{ProfileInfoSwitcher(id)}</Layout>
    );
}

