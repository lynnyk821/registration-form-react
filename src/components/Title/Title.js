import TitleName from "./TitleName";
import TitleContent from "./TitleContent";
import React from "react";

export default function Title(titleProps : TitleProps){
    return (
        <div className="w-full h-24 flex flex-col mb-8">
            <TitleName>{titleProps.name}</TitleName>
            <TitleContent>{titleProps.content}</TitleContent>
        </div>
    );
}