import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { styled } from "@mui/material/styles";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, area } from "d3-shape";
import { scalePoint } from "d3-scale";

const data = [
  { percentage: "27%", temperature: 0 },
  { percentage: "28%", temperature: 23 },
  { percentage: "29%", temperature: 29 },
  { percentage: "30%", temperature: 58 },
  { percentage: "31%", temperature: 75 },
  { percentage: "32%", temperature: 33 },
  { percentage: "33%", temperature: 20 },
  { percentage: "34%", temperature: 73 },
  { percentage: "40%", temperature: 49 },
];

const PREFIX = "Chart";

const classes = {
  chart: `${PREFIX}-chart`,
};

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: "20px",
    height: "10rem",
  },
}));

const Area = (props) => (
  <AreaSeries.Path
    {...props}
    path={area()
      .x(({ arg }) => arg)
      .y1(({ val }) => val)
      .y0(({ startVal }) => startVal)
      .curve(curveCatmullRom)}
  />
);

export default class WeatherChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <StyledChart data={chartData} className={classes.chart}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis
            labelComponent={(props) => (
              <ValueAxis.Label {...props} text={`${props.text}°`} />
            )}
          />

          <AreaSeries
            name="Weather"
            valueField="temperature"
            argumentField="percentage"
            seriesComponent={Area}
          />

          <Animation />
        </StyledChart>
      </Paper>
    );
  }
}
