import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {  value: 100 },
        {  value: 0 },
        {  value: 90 },
        {  value: 150 },
        {  value: 140 },
        {  value: 350 },
        {  value: 120 },
        {  value: 90 },
        {  value: 130 }
    ];
    return (
        <div className="navbar rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
                <div className="w-[500px] h-[210px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                           
                            <YAxis
                                stroke="hidden"
                                tick={{ fill: '#9ca3af' }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#2e2b6b',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#8b5cf6"
                                strokeWidth={6}
                                dot={{ fill: '#8b5cf6', r: 6 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Chart;