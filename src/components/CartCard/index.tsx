import styles from "./styles.module.scss"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { JobsTypes } from "../../interfaces/types"


export const CartCard = () => {
    const [jobsList, setJobsList] = useState<JobsTypes[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        api('/jobs')
            .then((res) => {
                setJobsList(res.data.jobs)
                setLoading(true)
            })
            .catch(() => {
                alert('Ocorreu um erro, tente novamente!')
            })
    }, [])


    return (
        <>
            {jobsList?.length > 0 &&
                jobsList?.map((job) => (
                    <div key={job.id} className={styles.container}>
                        <h4>{job.description}</h4>

                        <p>Preço: {job.price}</p>
                        <p>Prazo: 17/05/2022</p>

                        <div>
                            <button type="button">Ver detalhes</button>
                            <button type="button">Adicionar no Carrinho</button>
                        </div>
                    </div>
                ))
            }
            {!loading && <h1 className={styles.loading}>Loading...</h1>}
        </>
    )
}