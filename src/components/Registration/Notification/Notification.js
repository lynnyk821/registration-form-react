import notificationSvg from "../../../assets/svg/notification.svg"
import smallXSvg from "../../../assets/svg/smallX.svg"


export default function Notification(notificationProps : NotificationProps){
    return (
        <div className="w-full h-20 p-4 mb-8 flex gap-4 rounded-lg bg-[#F0F2F4]">
            <img className="w-6 h-6" src={notificationSvg} alt="notification"/>
            <p className="text-sm leading-5 font-poppins">{notificationProps.message}</p>
            <button className="w-6 h-6">
                <img src={smallXSvg} alt={"smallX.svg"}/>
            </button>
        </div>
    );
}