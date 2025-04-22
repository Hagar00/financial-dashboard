import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function ChartModal({ modalTitle, modalData, lang }) {
  const chartOptions = {
    chart: { type: "column" },
    title: { text: modalTitle },
    xAxis: {
      categories: modalData.map((d) => d.year),
    },
    yAxis: {
      title: { text: "Value" },
    },
    series: [
      {
        name: modalTitle,
        data: modalData.map((d) => parseFloat(d.value)),
      },
    ],
  };

  return (
    <div
      className="modal fade"
      id="chartModal"
      tabIndex="-1"
      aria-labelledby="chartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div
            className={`modal-header d-flex ${
              lang === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <h5
              className={`modal-title ${
                lang === "ar" ? "text-end" : "text-start"
              } flex-grow-1`}
            >
              {modalTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartModal;
