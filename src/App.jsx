import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";

function App() {
    // return <MainLayout />;
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/main" element={<div>main component</div>} />
                    <Route path="/addquestion" element={<div>add question</div>} />
                    <Route path="/forbidden" element={<div>forbidden</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
