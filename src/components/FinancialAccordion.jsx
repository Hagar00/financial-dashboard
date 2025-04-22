import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import FinancialTable from "./FinancialTable";
import { useState } from "react";

function FinancialAccordion({ data, lang, handleShowChart }) {
  const [open, setOpen] = useState("0");

  const toggle = (id) => setOpen(open === id ? "0" : id);

  return (
    <Accordion open={open} toggle={toggle}>
      {data.map((group, idx) => (
        <AccordionItem key={idx}>
          <AccordionHeader
            targetId={String(idx)}
            className={`bg-light fw-bold d-flex align-items-center ${
              lang === "ar" ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <h5
              className={`mb-0 text-success fw-semibold text-uppercase flex-grow-1 ${
                lang === "ar" ? "text-end" : "text-start"
              }`}
              style={{
                letterSpacing: "1px",
                fontSize: "1rem",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              {lang === "en" ? group.fieldGroupEn : group.fieldGroupAr}
            </h5>
          </AccordionHeader>
          <AccordionBody accordionId={String(idx)} className="bg-light">
            <FinancialTable
              fields={group.financialRatioFieldsGroupFields}
              lang={lang}
              handleShowChart={handleShowChart}
            />
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FinancialAccordion;
