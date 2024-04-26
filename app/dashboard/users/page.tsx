import Search from '@/app/ui/dashboard/search/search'
import styles from '../../ui/dashboard/users/users.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const UsersPage = () => {
    return (

        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <a href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </a>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.user}>
                            <Image src="/image copy 2.png" alt="" width={40} height={40} className={styles.userImage} />
                            Ta toei
                        </div>
                        </td>
                        <td >Toei@gmail.com</td>
                        <td>13.03.2022</td>
                        <td>Admin</td>
                        <td>avtive</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={'/dashboard/users/test'} >
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href={'/'}>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>                           
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>

    )
}

export default UsersPage
