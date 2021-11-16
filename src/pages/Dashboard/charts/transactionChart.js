import React from "react"
import ReactApexChart from "react-apexcharts"

const Apaexlinecolumn = () => {
  const series = [
    {
      name: "Revenue",
      data: [15000, 15000, 15000, 15000, 12500, 12500, 12500, 9750, 9750, 12500, 3500, 15000 ],
    },
    {
      name: "Expenses",
      data: [500, 1230, 5000, 17000, 0, 1000, 0, 300, 100, 0, 0, 3500],
    }
  ]
  const options = {
    chart: {
      stacked: !0,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: !0
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    xaxis: {
      show: true,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      labels: {
        show: true
      }
    },
    colors: ["#022AFF90", "#D9534F"],
    // legend: {
    //   position: "bottom"
    // },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val
        },
      },
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={470} className="apex-charts" />
  )
}

export default Apaexlinecolumn
