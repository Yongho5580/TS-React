import * as React from "react";
import { useState, useMemo, useCallback, FunctionComponent } from "react";

interface Balls {
  number: number;
}

const Ball = ({ number }: Balls) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }

  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
};

export default Ball;
