import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const DashboardChart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 300,
            pv: 4567,
            amt: 2400,
        },
        {
            name: 'Page C',
            uv: 300,
            pv: 1398,
            amt: 2400,
        },
        {
            name: 'Page D',
            uv: 200,
            pv: 9800,
            amt: 2400,
        },
        {
            name: 'Page E',
            uv: 278,
            pv: 3908,
            amt: 2400,
        },
        {
            name: 'Page F',
            uv: 189,
            pv: 4800,
            amt: 2400,
        },
    ];

    const margin = {
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
    };
    return (
        <BarChart width={1100} height={600} data={data} margin={margin}>
            <XAxis dataKey="name" stroke="red" />
            <YAxis stroke="red" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="green" barSize={30} />
        </BarChart>
    )
}

export default DashboardChart
