import styles from "./styles.module.scss"

export const CartCard = () => {
    return (
        <div className={styles.container}>
            <h4>Vendedor da DeepWeb</h4>

            <p>Preço: R$100,00</p>
            <p>Prazo: 17/05/2022</p>

            <div>
                <button type="button">Ver detalhes</button>
                <button type="button">Adicionar no Carrinho</button>
            </div>
        </div>
    )
}