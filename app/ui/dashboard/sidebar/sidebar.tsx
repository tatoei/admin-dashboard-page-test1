import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
    MdOutlineDashboard,
    MdFaceUnlock,
    MdOutlineShoppingBag,
    MdOutlineAttachMoney,
    MdOutlineWorkOutline,
    MdOutlineAnalytics,
    MdOutlinePeople,
    MdOutlineSettings,
    MdHelpOutline,
    MdLogout,
} from "react-icons/md";
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdOutlineDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdFaceUnlock />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdOutlineShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdOutlineAttachMoney />
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdOutlineWorkOutline />
            },
            {
                title: "Reports",
                path: "/dashboard/analytics",
                icon: <MdOutlineAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/people",
                icon: <MdOutlinePeople />
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpOutline />
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/image.png" alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>Ta Toei</span>
                    <span className={styles.userTitle}>Admin</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}
                </li>
            ))}
            </ul>
            <button className={styles.logout}>
            <MdLogout/>
                Logout</button>
        </div>
    )
}

export default Sidebar
