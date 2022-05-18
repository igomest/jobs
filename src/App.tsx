import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"
import { Routers } from "./routes/Routers"
import './styles/global.scss'

export const App = () => {
  return (
    <>
      <Header />
      <Routers />
    </>
  )
}
