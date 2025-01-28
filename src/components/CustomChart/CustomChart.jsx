import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import './CustomChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomChart = () => {
  const dataBtn = ['1M', '3M', '6M', 'Year', 'All time'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const chartData = {
    '1M': {
      labels: [
        'March 1, 2025', 'March 2, 2025', 'March 3, 2025', 'March 4, 2025', 'March 5, 2025',
        'March 6, 2025', 'March 7, 2025', 'March 8, 2025', 'March 9, 2025', 'March 10, 2025',
        'March 11, 2025', 'March 12, 2025', 'March 13, 2025', 'March 14, 2025', 'March 15, 2025',
        'March 16, 2025', 'March 17, 2025', 'March 18, 2025', 'March 19, 2025', 'March 20, 2025',
        'March 21, 2025', 'March 22, 2025', 'March 23, 2025', 'March 24, 2025', 'March 25, 2025',
        'March 26, 2025', 'March 27, 2025', 'March 28, 2025', 'March 29, 2025', 'March 30, 2025', 'March 31, 2025'
      ],
      datasets: [
        {
          data: [
            20, 30, 27, 28, 50, 45, 60, 55, 58, 62, 63, 70, 75, 85, 90, 95, 100, 110, 120, 130,
            140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250
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
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [
        {
          data: [60, 70, 65],
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

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.label = 'none';
      tooltipEl.style.background = '#EEF0F4';
      tooltipEl.style.borderRadius = '10px';
      tooltipEl.style.color = '#7A8699';
      tooltipEl.style.fontSize = '12px';
      tooltipEl.style.lineHeight = '14.4px';
      tooltipEl.style.textAlign = 'left';
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, -66px)';
      tooltipEl.style.transition = 'all .1s ease';
      tooltipEl.style.border = '1px solid #E2E1DD';

      const tooltipArrow = document.createElement('div');
      tooltipArrow.style.position = 'absolute';
      tooltipArrow.style.bottom = '-10px';
      tooltipArrow.style.left = '50%';
      tooltipArrow.style.transform = 'translateX(-50%)';
      tooltipArrow.style.width = '0';
      tooltipArrow.style.height = '0';
      tooltipArrow.style.borderLeft = '5px solid transparent';
      tooltipArrow.style.borderRight = '5px solid transparent';
      tooltipArrow.style.borderTop = '10px solid #EEF0F4';

      tooltipEl.appendChild(tooltipArrow);
      const table = document.createElement('table');
      table.style.margin = '0px';
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }
    return tooltipEl;
  };

  const externalTooltipHandler = (context) => {
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(b => b.lines);

    const tableHead = document.createElement('thead');
    titleLines.forEach(title => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      const text = document.createTextNode(title);
      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const text = document.createTextNode(body);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    const profit = "50.54";
    const totalBalance = "1500.43";

    const profitRow = document.createElement('tr');
    profitRow.style.display = 'flex';
    profitRow.style.alignItems = 'center';
    profitRow.style.gap = '10px';

    const profitTd = document.createElement('td');
    profitTd.colSpan = '2';
    profitTd.style.backgroundColor = '#50AF95';
    profitTd.style.borderRadius = '50px';
    profitTd.style.color = '#FFFFFF';
    profitTd.style.fontSize = '14px';
    profitTd.style.lineHeight = '22px';
    profitTd.style.padding = '0 5px';
    profitTd.style.textAlign = 'center';
    profitTd.innerText = `+${profit} $`;

    const balanceTd = document.createElement('td');
    balanceTd.style.color = '#021E2F';
    balanceTd.style.fontSize = '16px';
    balanceTd.style.lineHeight = '22px';
    balanceTd.innerText = `+${totalBalance} $`;

    profitRow.appendChild(profitTd);
    profitRow.appendChild(balanceTd);
    tableBody.appendChild(profitRow);

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler,
        callbacks: {
          label: () => '',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
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
        <Bar data={chartData[dataBtn[selectedIndex]]} options={options} />
      </div>
    </div>
  );
};

export default CustomChart;
