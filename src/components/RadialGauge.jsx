import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const RadialGauge = React.memo((props) => {
  const { label, data, icon } = props;
  
  // label に基づいて開始角度と終了角度を設定
  let startAngle, endAngle;
  
  if (label === "CPU") {
    startAngle = 270; // 9時
    endAngle = 60;    // 2時
  } else if (label === "GPU") {
    startAngle = 90;   // 3時
    endAngle = 300;    // 10時
  } else {
    // デフォルトの角度
    startAngle = -45;
    endAngle = 90;
  }
  
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
        startAngle: startAngle,
        endAngle: endAngle,
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "2rem",
            color: "black",
            formatter: function (val) {
              return val + "°C";
            },
          },
        },
        hollow: {
          size: "60%", 
          image: icon,
          imageWidth: 64, 
          imageHeight: 64,
          imageClipped: false,
          position: 'front',
          imageOffsetY: -55,
          imageOffsetX: 10,
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

  const series = [data || 0];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="350px"
    />
  );
});

export default RadialGauge;
