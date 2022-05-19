import { Routes, Route } from "react-router-dom"
import { CartPage } from "../pages/CartPage";
import { CreateJobPage } from "../pages/CreateJobPage";
import { HomePage } from "../pages/HomePage";
import { JobDetailPage } from "../pages/JobDetailPage";


export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/anunciar" element={<CreateJobPage />} />
            <Route path="/emprego/:id" element={<JobDetailPage />} />
        </Routes>
    )
}