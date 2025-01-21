import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import './CustomChart.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomChart = () => {
  const dataBtn = ['1M', '3M', '6M', 'Year', 'All time']
  const [selectedIndex, setSelectedIndex] = useState(0);


  const chartData = {
    '1M': {
      labels: [
        'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
        'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20',
        'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30',
      ],
      datasets: [
        {
          data: [
            20, 30, 27, 28, 50, 55, 60, 60, 65, 70,
            80, 85, 90, 105, 70, 75, 50, 55, 67, 70,
            95, 98, 90, 100, 105, 92, 75, 63, 92, 30
          ],
          backgroundColor: '#FFE2A5',
          borderColor: '#FFE2A5',
          borderWidth: 1,
          borderRadius: 6,
          categoryPercentage: 0.95,
          barPercentage: 1,
          hoverBackgroundColor: '#F6AC12',
        },
      ],
    },
    '3M': {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          data: [60, 70, 65, 60, 70, 65, 60, 70, 65, 60, 70, 65],
          borderColor: '#FFE2A5',
          borderWidth: 1,
          borderRadius: 6,
          categoryPercentage: 0.95,
          barPercentage: 1,
          hoverBackgroundColor: '#F6AC12',
        },
      ],
    },
    '6M': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [65, 70, 80, 75, 85, 90],
          backgroundColor: '#FFE2A5',
          borderColor: '#FFE2A5',
          borderWidth: 1,
          borderRadius: 6,
          categoryPercentage: 0.95,
          barPercentage: 1,
          hoverBackgroundColor: '#F6AC12',
        },
      ],
    },
    'Year': {
      labels: ['2021', '2022', '2023'],
      datasets: [
        {

          data: [100, 120, 130],
          backgroundColor: '#FFE2A5',
          borderColor: '#FFE2A5',
          borderWidth: 1,
          borderRadius: 6,
          categoryPercentage: 0.95,
          barPercentage: 1,
          hoverBackgroundColor: '#F6AC12',
        },
      ],
    },
    'All time': {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          data: [50, 80, 100, 120, 150, 180],
          backgroundColor: '#FFE2A5',
          borderColor: '#FFE2A5',
          borderWidth: 1,
          borderRadius: 6,
          categoryPercentage: 0.95,
          barPercentage: 1,
          hoverBackgroundColor: '#F6AC12',
        },
      ],
    },
  };

  // const getCurrentDate = () => {
  //   const today = new Date();
  //   const day = String(today.getDate()).padStart(2, '0');
  //   const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  //   const year = today.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        display: false,
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      }
    },
  };



  return (
    <div className='capitalGrowthContainer'>
      <div className='headerDataCapital'>
        <h2>Capital growth</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {dataBtn.map((buttonText, index) => (
            <button
              key={index}
              className={`btnPeriod ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <p className={selectedIndex === index ? 'active-text' : ''}>
                {buttonText}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="chartWrapper">
        <Bar
          data={chartData[dataBtn[selectedIndex]]}
          options={options}
        />
      </div>
    </div>
  );
};

export default CustomChart;
