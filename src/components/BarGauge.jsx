import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const BarGauge = React.memo((props) => {
  const options = {
    theme: {
      mode: "light",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      min: 0,
      max: 100,
      categories: [1],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["#848484", "transparent"],
        opacity: 0.2,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
        borderRadius: 10, 
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 20) {
            return "#00FA9A"; 
          } else if (value < 40) {
            return "#00FA9A";
          } else if (value < 60) {
            return "#FFD700";
          } else if (value < 80) {
            return "#FF570D";
          } else {
            return "#DC143C";
          }
        },
      ],
      opacity: 1,
    },
  };
  const series = [
    {
      data: [props?.data || 0],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "0.8rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="180px"
          height={20}
        />
        <h3
          style={{
            fontSize: "1.5rem",
            margin: "0",
          }}
        >
          {props?.label || "No Label"}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginLeft: "1.5rem",
        }}
      >
        <p
          style={{
            display: "block",
            width: "40px",
            marginTop: "-0.7rem",
          }}
        >
          {props?.data || "0"}
        </p>
        <p
          style={{
            marginTop: "-0.5rem",
            fontSize: "1.1rem",
          }}
        >
          %
        </p>
      </div>
    </div>
  );
});

export default BarGauge;
