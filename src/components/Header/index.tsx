import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.container}>
            <div>
                <img src="" alt="" />
                <h1>Jobs</h1>
            </div>

            <div>
                <button type="button">Carrinho</button>
            </div>
        </header>
    )
}