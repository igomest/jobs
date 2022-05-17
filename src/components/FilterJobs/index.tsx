import styles from "./styles.module.scss"


export const FilterJobs = () => {
    return (
        <div className={styles.container}>
            {/* <div> */}
                <input type="number" placeholder="Valor Mínimo" />

                <input type="number" placeholder="Valor Máximo" />


                <input type="text" placeholder="Busca por título ou descrição" />

                <select>
                    <option>Sem Ordenação</option>
                    <option>Menor Valor</option>
                    <option>Maior Valor</option>
                    <option>Título</option>
                    <option>Prazo</option>
                </select>
        </div>
    )
}