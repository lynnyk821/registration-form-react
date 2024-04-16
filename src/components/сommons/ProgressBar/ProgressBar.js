import React from "react";

import {Indicator} from "./Indicator";
import {Line} from "./Line";

export default function ProgressBar(progressBarProps : ProgressBarProps){
    const getProgressBarArray = (numberOfIndicators : number, activeIndicators : number) => {
        const progressBarArray = [];

        for (let i = 0; i < numberOfIndicators - 1; i++) {
            const isActiveIndicator = i < activeIndicators;
            const isActiveLine = i < activeIndicators - 1;

            progressBarArray.push(
                <React.Fragment key={i}>
                    <Indicator isActive={isActiveIndicator}/>
                    <Line isActive={isActiveLine}></Line>
                </React.Fragment>
            );
        }
        progressBarArray.push(<Indicator isActive={numberOfIndicators === activeIndicators} key={numberOfIndicators}/>);

        return progressBarArray;

    }
    return (
        <div className="w-full h-5 flex items-center gap-2 mb-14">
            {getProgressBarArray(progressBarProps.numberOfIndicators, progressBarProps.activeIndicators)}
        </div>
    );
}