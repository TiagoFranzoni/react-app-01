import styles from "./BlogMenu.module.css";

export function BlogMenu() {
    return (
        <div className={styles.blogmenu}>
            <ul className="nav-menu">
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
            </ul>
        </div>
    );
}