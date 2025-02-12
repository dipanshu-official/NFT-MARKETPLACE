import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../ThemeContext/ThemeContext';

const Chart = () => {
    const { theme } = useTheme();

    const data = [
        { value: 100 },
        { value: 0 },
        { value: 90 },
        { value: 150 },
        { value: 140 },
        { value: 350 },
        { value: 120 },
        { value: 90 },
        { value: 130 }
    ];

    return (
        <div className={`${theme === "dark" ? "navbar" : "bg-white"} rounded-2xl p-2`}>
            <div className="max-w-full mx-auto">
                <div className="w-full sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] h-[250px] sm:h-[288px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <YAxis
                                stroke="transparent" 
                                tick={{ fill: '#6F4FF2' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#8b5cf6"
                                strokeWidth={4}
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
