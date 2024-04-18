import notificationSvg from "../../../../../assets/svg/notification.svg"
import smallXSvg from "../../../../../assets/svg/smallX.svg"
import {useState} from "react";


export default function Notification(notificationProps : NotificationProps){
    const [flag, setFlag] = useState(true);

    const NotificationContainer = (notificationContainerProps : NotificationContainerProps) => {
        return (
            <div className="w-full h-20 p-4 mb-8 gap-4 rounded-lg bg-[#F0F2F4]"
                 style={notificationContainerProps.isVisible ? {display: "flex"} : {display: "none"}}>
                 {notificationContainerProps.children}
            </div>
        );
    }

    return (
        <NotificationContainer isVisible={flag}>
            <img className="w-6 h-6" src={notificationSvg} alt="notification"/>
            <p className="text-sm leading-5 font-poppins">{notificationProps.message}</p>
            <button className="w-6 h-6 shrink-0" onClick={()=> setFlag(false)}>
                <img className="w-4 h-4"  src={smallXSvg} alt={"smallX.svg"}/>
            </button>
        </NotificationContainer>
    );
}