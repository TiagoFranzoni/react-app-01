import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <ul className="sidebar">
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
                <li><a href="#">Section 5</a></li>
                <li><a href="#">Section 6</a></li>
                <li><a href="#">Section 7</a></li>
                <li><a href="#">Section 8</a></li>
                <li><a href="#">Section 9</a></li>
                <li><a href="#">Section 10</a></li>
            </ul>
        </aside>
    );
}