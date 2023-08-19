import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "../_common/Header";
import { FormPage } from "../form-page/FormPage";
import { MainPage } from "../main-page/MainPage";
import { ResultPage } from "../result-page/ResultPage";

export const MainRouter = () => {
  //
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/input" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};
