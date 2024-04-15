export default function MutedButton(props : MutedProps) {
    return (
        <button className="w-12 h-12 flex justify-center items-center">
            <img className="w-7 h-7" src={props.src} alt="mutedIcon"/>
        </button>
    );
}