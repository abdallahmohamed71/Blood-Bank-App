import React from "react";
// import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "./Chart.scss";
import NumberDonors from "../NumbeDonors/NumberDonors";
const data = [
  { value: 10, label: "A+" },
  { value: 20, label: "A-" },
  { value: 30, label: "B+" },
  { value: 40, label: "B-" },
  { value: 50, label: "O+" },
  { value: 60, label: "O-" },
];

const size = {
  width: 400,
  height: 200,
};
export default function Chart() {
  return (
    <>
      <div className="col-12 ">
        <div className="col-12 container">
          <div className="row charts">
            <div className="col-12">
              <NumberDonors />
            </div>
            {/* <div className="col-md-6 col-sm-12">
              <div className="row ">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["A+", "A-", "B+", "B-", "O+", "O-"],
                    },
                  ]}
                  series={[{ data: [4, 3, 5, 4, 6, 3] }]}
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <PieChart
                  series={[
                    {
                      arcLabel: (item) => `${item.label} (${item.value})`,
                      arcLabelMinAngle: 45,
                      data,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                      fontWeight: "bold",
                    },
                  }}
                  {...size}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
