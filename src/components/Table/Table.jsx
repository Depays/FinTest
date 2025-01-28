import React from 'react';
import './Table.css';

import icons from '../../resources/icons';

export default function Table({ data }) {
    const columns = Object.keys(data[0] || {});

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{ backgroundColor: '#EEF0F4' }}>
                <tr>
                    {columns.map((col, colIndex) => (
                        <th
                            key={col}
                            className='table-col'
                            style={{
                                borderRadius: colIndex === 0 ? '8px 0 0 8px' : (colIndex === columns.length - 1 ? '0 8px 8px 0' : ''),
                                textAlign: colIndex === 0 ? 'left' : 'center'
                            }}
                        >
                            {col === 'Ticker' ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                                        <img
                                            src={icons.iconReload}
                                            alt="Ticker Icon"
                                        />
                                    </button>
                                    {col}
                                </div>
                            ) : (
                                col
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td
                                key={col}
                                style={{
                                    padding: '10px 25px',
                                    whiteSpace: 'nowrap',
                                    textAlign: (colIndex === 0 ? 'left' : 'center'),
                                    color: (colIndex === 2 ? '#50AF95' : '#021E2F'),
                                    fontSize: '16px',
                                    lineHeight: '19.2px'
                                }}
                            >
                                {row[col]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    );
};