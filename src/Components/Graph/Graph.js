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

export default Graph;