import * as React from "react";
import { Route } from "react-router";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        <Link to="/game/lotto=generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <GameMatcher {...props} />}
          />
          <Route
            path="/gmae/:name"
            render={(props) => <GameMatcher {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
