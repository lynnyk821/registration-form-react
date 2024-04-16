import TitleName from "./TitleName";
import TitleContent from "./TitleContent";
import React from "react";

export default function Title(titleProps : TitleProps){
    const renderContentLines = (content) => {
        return content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    };
    return (
        <div className="w-full h-24 flex flex-col mb-8">
            <TitleName>{titleProps.name}</TitleName>
            <TitleContent>{renderContentLines(titleProps.content)}</TitleContent>
        </div>
    );
}