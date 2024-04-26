import Image from 'next/image';
import styles from "../../../ui/dashboard/users/signalUser/singleUser.module.css";

const SignalProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/image.png" alt="" fill />
                </div>
                Toeii
            </div>
            <div className={styles.forminfoContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Toeii" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Toeii@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="0968849495" />
                    <label>Address</label>
                    <textarea name="address" placeholder="Thailand" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};
export default SignalProductPage;