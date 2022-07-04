import Shared from "./Shared";
import styles from "./A.module.css";

export default function A() {
    return (
        <Shared className={styles.theClass} color={"red"} />
    );
}
