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
          <AccordionHeader targetId={String(idx)}>
            {lang === "en" ? group.fieldGroupEn : group.fieldGroupAr}
          </AccordionHeader>
          <AccordionBody accordionId={String(idx)}>
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
