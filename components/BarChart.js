import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      grid: {
        display:false
      }
    },
    y: {
      grid: {
        display:false
      }
    }
  }
};

const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Transaction',
      data: [90, 40, 55, 65, 50, 80, 60],
      backgroundColor: 'rgba(34,40,49,.7)',
      borderRadius: 100,

    },
  ],
};

const BarChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart