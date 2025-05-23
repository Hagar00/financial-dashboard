import { useEffect, useState } from "react";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import FinancialAccordion from "./components/FinancialAccordion";
import ChartModal from "./components/ChartModal";

// Import Bootstrap CSS and JavaScript
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import * as bootstrap from "bootstrap";
import Footer from "./components/Footer";
window.bootstrap = bootstrap;

function App() {
  const [lang, setLang] = useState("en");
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const handleShowChart = (field) => {
    const yearsRange = ["2022", "2021", "2020", "2019"];
    setModalTitle(lang === "en" ? field.nameEn : field.nameAr);
    setModalData(field.values.filter((v) => yearsRange.includes(v.year)));

    const chartModal = new window.bootstrap.Modal(
      document.getElementById("chartModal")
    );
    chartModal.show();
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <div className="container">
        <div className="mx-auto">
          <FinancialAccordion
            data={data.financialRatioFieldsGroups}
            lang={lang}
            handleShowChart={handleShowChart}
          />
        </div>
        <ChartModal modalData={modalData} modalTitle={modalTitle} lang={lang} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
