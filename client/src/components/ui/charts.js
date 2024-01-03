import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
    const chartsProjetos = {
        series: [
            {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        title: {
            text: 'Projetos',
            align: 'left',
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
    };

    const chartsFuncionarios = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        title: {
            text: 'Funcionários',
            align: 'left',
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };

    const chartsEntrada = {
        series: [{
            name: 'Entrada',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Entrada'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
            },

        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }]
    };
    
    const chartsGastos = {
        series: [{
            name: 'Gastos',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Gastos'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
            },

        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }]
    };

    return (
        <div className='flex mt-10'>
            <div>
                <Chart
                    className="p-8"
                    options={chartsProjetos}
                    series={chartsProjetos.series}
                    type="line"
                    width={400}
                    height={300}
                />

                <Chart
                    className="p-8"
                    options={chartsFuncionarios}
                    series={chartsFuncionarios.series}
                    type="line"
                    width={400}
                    height={300}
                />

            </div>
            <div>
                <Chart
                    className="p-8"
                    options={chartsEntrada}
                    series={chartsEntrada.series}
                    type="line"
                    width={1100}
                    height={300}
                />

                <Chart
                    className="p-8"
                    options={chartsGastos}
                    series={chartsGastos.series}
                    type="line"
                    width={1100}
                    height={300}
                />
            </div>
        </div>
    );
};

export default Charts;