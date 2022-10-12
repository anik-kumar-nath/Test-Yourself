import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className='mt-3'>
            <h3>Total Number of Topics  Quiz Line Chart</h3>
            <div className="container-fluid d-flex justify-content-center align-items-center pt-3">
                <LineChart
                    width={400}
                    height={300}
                    data={data.data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;