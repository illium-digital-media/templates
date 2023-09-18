import Link from "next/link";
import styles from './Button.module.css';

const Button: React.FC<{ link: string; text: string; }> = (props) => {
    return (
        <button className={styles.buttonSolid}>
            <Link href={props.link} className="h-full w-full">{props.text}</Link>
        </button>
    )
}

export default Button;