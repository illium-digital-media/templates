import styles from './Topper.module.css'

const Topper: React.FC<{ text: string }> = (props) => {
    return (
        <span className={styles.csTopper}>{props.text}</span>
    )
}

export default Topper;