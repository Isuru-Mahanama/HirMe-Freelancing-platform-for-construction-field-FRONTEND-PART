
import { RiHome3Fill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import {RiHome4Line } from "react-icons/ri";


export const SlidebarData =[
    {
        title: "Home",
        icon: <RiHome4Line />,
        link:"/",

    },

    {
        title: "Account",
        icon: <VscAccount/>,
        link:"/firstPageforHire",

    },
    {
        title: "if i am a worker",
        icon: <RiHome3Fill/>,
        link:"/viewworkerappliedprojects",

    },

    {
        title: "Payments",
        icon: <RiHome3Fill/>,
        link:"/payments",

    },
    
    {
        title: "Messages",
        icon: <VscMail />,
        link:"/message",

    }
    ,
    {
        title: "Scheduling",
        icon: <VscMail />,
        link:"/Scheduling",

    }
    , {
        title: "if i am a hire",
        icon: <VscMail />,
        link:"/postedprojects",

    }
    
    
 


]