import { useTranslation } from "react-i18next";

function FinancialTable({ fields, lang, handleShowChart }) {
  const { t } = useTranslation();
  const yearsRange = ["2022", "2021", "2020", "2019"];

  return (
    <table className="table table-bordered table-striped">
      <thead>
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
            <td>{lang === "en" ? field.nameEn : field.nameAr}</td>
            {yearsRange.map((year) => {
              const val = field.values.find((v) => v.year === year);
              return (
                <td key={year}>
                  {val && val.value !== "-"
                    ? parseFloat(val.value).toFixed(2)
                    : "-"}
                </td>
              );
            })}
            <td>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleShowChart(field)}
              >
                {t("showChart")}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FinancialTable;
