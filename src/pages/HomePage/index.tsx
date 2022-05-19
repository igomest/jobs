import { CartCard } from "../../components/CartCard"
import { FilterJobs } from "../../components/FilterJobs"
import styles from "./styles.module.scss"


export const HomePage = () => {
  return (
    <div className={styles.container}>
      <FilterJobs />

      <div className={styles.cartCardContainer}>
        <CartCard />
      </div>
    </div>
  )
}