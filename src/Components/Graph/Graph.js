import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import testData from '../../testData.json';
import "./Graph.css";

const Graph = () => {
    return(
        <div id="graph">
            <BarChart
                width={970}
                height={500}
                data={ testData }
                margin={{
                    top: 5,
                    bottom: 25,
                    right: 35
                }
            }>
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar
                name="확진자 수"
                dataKey="count"
                fill="#8884d8"
                barSize={50}
            />
            </BarChart>
        </div>
    )
};

export default Graph;