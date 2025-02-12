import React from 'react';
import { PieChart, Pie, Cell , ResponsiveContainer} from 'recharts';
import { useTheme } from '../ThemeContext/ThemeContext';

function CircleChart() {
    const { theme, toggleTheme } = useTheme();

    const data = [
        { name: 'Complete', value: 25 },
        { name: 'Remaining', value: 75 },
    ];

    // Updated colors to match the design
    const COLORS = ['#6366F1', '#1E293B'];

    return (
        <div className={`${theme === "dark" ? "navbar" : "bg-white"} rounded-2xl flex items-center justify-center`}>
            < div className="w-[318px] h-[318px] relative" >
            
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110} 
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                                strokeWidth={0}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </div >
        </div >
    );
}

export default CircleChart;