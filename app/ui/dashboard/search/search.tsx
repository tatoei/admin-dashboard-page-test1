import styles from './search.module.css'
import { MdOutlineSearch } from "react-icons/md";

const Search = ({ placeholder }: any) => {
    return (
        <div className={styles.container}>
            <MdOutlineSearch />
            <input type="text" placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Search