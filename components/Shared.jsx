import styles from "./Shared.module.css";

export default function Shared(props) {
    return (
        <div className={`${styles.theClass} ${props.className}`}> This should be always {props.color || "blue"}</div>
    );
}
