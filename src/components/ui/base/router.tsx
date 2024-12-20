import App from "@/App";
import { Routes, Route } from "react-router";

export const router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </>
    )
}
