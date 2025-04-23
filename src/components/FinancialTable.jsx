import { useTranslation } from "react-i18next";

function FinancialTable({ fields, lang, handleShowChart }) {
  const { t } = useTranslation();
  const yearsRange = ["2022", "2021", "2020", "2019"];

  return (
    <div className="table-responsive">
      <table className="table  table-striped">
        <thead className="table-secondary ">
          <tr>
            <th>{t("name")}</th>
            {yearsRange.map((year) => (
              <th key={year}>{year}</th>
            ))}
            <th>{t("details")}</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, i) => (
            <tr key={i}>
              <td className="fw-semibold text-primary">
                {lang === "en" ? field.nameEn : field.nameAr}
              </td>
              {yearsRange.map((year) => {
                const val = field.values.find((v) => v.year === year);
                const number =
                  val && val.value !== "-" ? parseFloat(val.value) : null;

                return (
                  <td
                    key={year}
                    className={` ${
                      number > 0
                        ? "text-success fw-semibold"
                        : number < 0
                        ? "text-danger fw-semibold"
                        : ""
                    }`}
                  >
                    {number !== null ? number.toFixed(2) : "-"}
                  </td>
                );
              })}
              <td className="">
                <button
                  className="btn btn-sm"
                  onClick={() => handleShowChart(field)}
                  title={t("show Chart")}
                >
                  <i className="fa-solid fa-chart-simple bg-light text-dark px-3 py-2 rounded fs-5"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinancialTable;
