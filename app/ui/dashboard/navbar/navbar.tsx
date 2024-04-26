"use client"
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import {
    MdNotificationsNone,
    MdOutlineChat,
    MdOutlinePublic,
    MdSearch
} from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                <MdSearch/>
                <input type="text" placeholder='Search...' className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20}/>
                    <MdNotificationsNone size={20}/>
                    <MdOutlinePublic size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
