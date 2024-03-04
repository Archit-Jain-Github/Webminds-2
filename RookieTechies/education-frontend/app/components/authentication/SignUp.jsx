import SignUpCard from "./authcards/SignUpCard"
import styles from '../../styles/signup.module.css';

export default function SignIn() {
    return (
        <div className={styles.signup_container}>
            <SignUpCard />
        </div>
    )
}