export const Indicator = (indicatorProps : IndicatorProps) => {
    const getIndicatorBgAndBorderStyles = (isActive : boolean) =>
        isActive ? "bg-[#007AFF]" : "bg-none border-[1px] border-solid border-[#B9B9C3]";

    return (
        <span className={"w-4 h-4 rounded-[50%] " + getIndicatorBgAndBorderStyles(indicatorProps.isActive)}></span>
    );
}
