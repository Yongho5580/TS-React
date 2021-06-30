import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import NumberBaseBall from "./NumberBaseBall";

const Hot = hot(NumberBaseBall); // HOC

ReactDOM.render(<Hot />, document.getElementById("root"));
