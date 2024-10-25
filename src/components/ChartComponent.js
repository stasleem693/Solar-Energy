// src/components/ChartComponent.js
import { Chart, registerables } from 'chart.js';
import React, { useEffect, useRef } from 'react';

// Register all necessary components
Chart.register(...registerables);

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Reference for the chart instance

    useEffect(() => {
        // Destroy existing chart if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar', // Change to your desired chart type
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Solar Energy Production vs Consumption'
                    }
                },
            },
        });

        return () => {
            // Cleanup on component unmount
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default ChartComponent;
