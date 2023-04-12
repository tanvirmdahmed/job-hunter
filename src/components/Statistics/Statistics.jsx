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
            assignmentName: "Build your new year new mission website",
            assignment: "A 1",
            mark: 60,
            fullMark: 60
        },
        {
            id: "02",
            assignmentName: "Create a responsive G3-Architects website",
            assignment: "A 2",
            mark: 58,
            fullMark: 60
        },
        {
            id: "03",
            assignmentName: "CSS Framework Ed Tech landing page assignment",
            assignment: "A 3",
            mark: 57,
            fullMark: 60
        },
        {
            id: "04",
            assignmentName: "Basic Javascript Problem Solving assignment",
            assignment: "A 4",
            mark: 60,
            fullMark: 60
        },
        {
            id: "05",
            assignmentName: "Geometry Genius Assignment",
            assignment: "A 5",
            mark: 48,
            fullMark: 60
        },
        {
            id: "06",
            assignmentName: "AI Universe API and ES6 related Assignment",
            assignment: "A 6",
            mark: 59,
            fullMark: 60
        },
        {
            id: "07",
            assignmentName: "Make Quiz Hero a great quiz website Simple",
            assignment: "A 7",
            mark: 60,
            fullMark: 60
        },
        {
            id: "08",
            assignmentName: "React Assignment Knowledge cafe",
            assignment: "A 8",
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
            <PolarAngleAxis dataKey="assignment" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar
                name="=>"
                dataKey="assignmentName"
            />
            <Radar
                name="My Mark"
                dataKey="mark"
                stroke="#F7CD2E"
                fill="#EDBF69"
                fillOpacity={0.5}
            />
            <Radar
                name="Full Mark"
                dataKey="fullMark"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
            />
        </RadarChart>
    );
};

export default Statistics;