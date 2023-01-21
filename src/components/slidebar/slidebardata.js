
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
        title: "My Applications",
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
        title: "My Projects",
        icon: <VscMail />,
        link:"/postedprojects",

    }
    
    
 


]