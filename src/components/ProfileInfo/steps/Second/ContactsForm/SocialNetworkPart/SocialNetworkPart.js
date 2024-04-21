import {useState} from "react";
import {firstMedias, secondMedias} from "../../../../data/profileInfoData";
import SocialMediaFieldLayout from "./SocialMediaFieldLayout";
import TitleInfo from "../../../TitleInfo";

export default function SocialNetworkPart({storage}){
    const [firstMediaInput, setFirstMediaInput] = useState("");
    const [secondMediaInput, setSecondMediaInput] = useState("");

    const [selectedFirstMedia, setSelectedFirstMedia] = useState("Choose first media");
    const [selectedSecondMedia, setSelectedSecondMedia] = useState("Choose second media");

    return (
        <div className="flex flex-col gap-6  mt-5">
            <TitleInfo title={"Social network"} label={"Indicate the desired communication method"} />
            <SocialMediaFieldLayout
                inputValue={firstMediaInput}
                onChangeInputValue={(value) => {
                    setFirstMediaInput(value);
                    storage.setValue("firstMedia", value);
                }}
                selectedValue={selectedFirstMedia}
                items={firstMedias}
                keyValue={"firstMedia"}
                onChangeSelectedValue={setSelectedFirstMedia}
            />
            <SocialMediaFieldLayout
                inputValue={secondMediaInput}
                onChangeInputValue={(value) => {
                    setSecondMediaInput(value);
                    storage.setValue("secondMedia", value);
                }}
                selectedValue={selectedSecondMedia}
                items={secondMedias}
                keyValue={"secondMedia"}
                onChangeSelectedValue={setSelectedSecondMedia}
            />
            <a className="flex text-lg font-medium font-roboto text-[#007AFF] gap-2" href={"/add-more"}>
                <span>+</span>
                <p>Add More</p>
            </a>
        </div>
    );
}