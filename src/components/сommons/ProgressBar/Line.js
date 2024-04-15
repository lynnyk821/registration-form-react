const getLineBgColors = (isActive : boolean) =>
    isActive ? "bg-[#007AFF]" : "bg-[#B9B9C3]";

export const Line = (lineProps : LineProps) => {
    return (
        <span className={"w-10 h-[1px] " + getLineBgColors(lineProps.isActive)}></span>
    );
}