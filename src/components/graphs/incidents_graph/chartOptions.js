

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#fff",
        font: {
          size: 12,
          family: "'Arial', sans-serif",
          weight: "bold",
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      display: false,
    },
  },
  elements: {
    arc: {
      borderWidth: 2,
      borderColor: "rgba(0, 0, 0, 0)",
      hoverBorderColor: "rgba(0, 0, 0, 0)",
    },
  },
};
