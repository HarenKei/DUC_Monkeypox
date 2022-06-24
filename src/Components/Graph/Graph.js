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
<<<<<<< HEAD



  const Graph = () => {
      return(
          <div>
              <BarChart
                    width={900}
                    height={400}
                    data={ testData }
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 25
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar
                  type="monotone"

                  dataKey="count"
                  fill="#8884d8"
                  barSize={30}
                />
                </BarChart>
          </div>
      )
    };
=======
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
>>>>>>> 44337212791c91f4616cb71b7f45063b5d766ad8

export default Graph;