import SelectMedia from "./SelectMedia";
import {useState} from "react";
import {firstMedias, secondMedias} from "../../../../data/profileInfoData";

export default function SocialNetworkPart({storage}){
    const [selectedFirstMedia, setSelectedFirstMedia] = useState(firstMedias[0].value);
    const [selectedSecondMedia, setSelectedSecondMedia] = useState(secondMedias[0].value);

    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-3/5 h-10">
                    <SelectMedia
                        selectedItem={selectedFirstMedia}
                        items={firstMedias}
                        keyValue={"firstMedia"}
                        onChangeSelectedValue={setSelectedFirstMedia}>
                    </SelectMedia>
                </div>
                <div className="w-2/5 h- bg-amber-50"></div>
            </div>

            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-3/5">
                        <SelectMedia
                            selectedItem={selectedSecondMedia}
                            items={secondMedias}
                            keyValue={"secondMedia"}
                            onChangeSelectedValue={setSelectedSecondMedia}>
                        </SelectMedia>
                    </div>
                    <div className="w-2/5">
                        <div className="w-2/5 h- bg-amber-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}