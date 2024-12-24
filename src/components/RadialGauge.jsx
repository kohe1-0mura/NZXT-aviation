import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const RadialGauge = React.memo((props) => {
  const options = {
    theme: {
      mode: "light",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      sparkline: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        left: -10,
        right: 0,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -45,
        endAngle: 90,
        dataLabels: {
          name: {
            show: false,
            offsetX: 30,
          },
          value: {
            fontSize: "2rem",
            color: "black",
            offsetX: 30,
            formatter: function (val) {
              return val + "°C";
            },
          },
          offsetX: 30,
        },
        hollow: {
          size: "60%", 
          image: props.icon,
          imageWidth: 64, 
          imageHeight: 64,
          imageClipped: false,
          position: 'front',
          imageOffsetY: -55,
          // imageOffsetX: 10,
        },
        track: {
          show: true,
          background: "#e0e0e0",
          strokeWidth: "100%",
          opacity: 0.7,
          margin: 10,
        },
      },
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 20) {
            return "#00fa9a"; 
          } else if (value < 40) {
            return "#00fa9a";
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
    stroke: {
      lineCap: "round"
    },

    labels: [],
  };

  const series = [props?.data || 0];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="350px"
      />
    </>
  );
})

export default RadialGauge;
