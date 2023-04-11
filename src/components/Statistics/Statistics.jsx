import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Tooltip,
    PolarRadiusAxis
} from "recharts";

const Statistics = () => {
    const data = [
        {
            id: "01",
            assignmentName: "A 1",
            mark: 60,
            fullMark: 60
        },
        {
            id: "02",
            assignmentName: "A 2",
            mark: 58,
            fullMark: 60
        },
        {
            id: "03",
            assignmentName: "A 3",
            mark: 57,
            fullMark: 60
        },
        {
            id: "04",
            assignmentName: "A 4",
            mark: 60,
            fullMark: 60
        },
        {
            id: "05",
            assignmentName: "A 5",
            mark: 48,
            fullMark: 60
        },
        {
            id: "06",
            assignmentName: "A 6",
            mark: 59,
            fullMark: 60
        },
        {
            id: "07",
            assignmentName: "A 7",
            mark: 60,
            fullMark: 60
        },
        {
            id: "08",
            assignmentName: "A 8",
            mark: 60,
            fullMark: 60
        }
    ];

    return (
        <RadarChart
            className='mx-auto'
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="assignmentName" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar
                name="Tanvir"
                dataKey="mark"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.8}
            />
        </RadarChart>
    );
};

export default Statistics;