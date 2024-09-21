import { MdCardMembership, MdGroups2, MdSpaceDashboard } from "react-icons/md";

const adminDashboardData = [
    {
        href: "/user/dashboard",
        title: "Dashboard",
        icon: <MdSpaceDashboard className="size-6" />
    },
    {
        href: "/create-user",
        title: "Create user",
        icon: <MdSpaceDashboard className="size-6" />
    },
    {
        href: "/add-task",
        title: "Assign task",
        icon: <MdSpaceDashboard className="size-6" />
    },
    {
        href: "/team",
        title: "Team Member",
        icon: <MdCardMembership className="size-6" />
    },
    {
        href: "/groups",
        title: "Groups",
        icon: <MdGroups2 className="size-6" />
    },
    {
        href: "/pending-task",
        title: "Pending task",
        icon: <MdSpaceDashboard className="size-6" />
    },
]


export default adminDashboardData