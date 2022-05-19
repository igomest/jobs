import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src="" alt="" />
                    <h1>Jobs</h1>
                </Link>
            </div>

            <div>
                <Link to="/carrinho">
                    <button type="button">Carrinho</button>
                </Link>
            </div>
        </header>
    )
}