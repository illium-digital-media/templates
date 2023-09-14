import styles from './Title.module.css';

const Title: React.FC<{ title: string }> = (props) => {
    return (
        <h2 className={styles.csTitle}>{props.title}</h2>
    )
}

export default Title;