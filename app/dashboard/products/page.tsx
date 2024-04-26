import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a products..." />
                <a href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </a>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.product}>
                            <Image src="/image copy 3.png" alt="" width={40} height={40} className={styles.productImage} />
                            ig toeiiapr
                        </div>
                        </td>
                        <td >Desc</td>
                        <td>$123</td>
                        <td>Oct 29 2023</td>
                        <td>34</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={'/dashboard/products/test'} >
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

export default ProductsPage
