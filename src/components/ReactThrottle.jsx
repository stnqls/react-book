import React from "react";
import { throttle } from "lodash";

class ReactThrottle extends React.Component {
  throttleFunc = throttle((e) => {
    // console.log("Throllte API Call");
    console.log(e.target.value);
  }, 1000);

  render() {
    return (
      <React.Fragment>
        <h2>검색어 입력</h2>
        <input type="text" onChange={(e) => this.throttleFunc(e)} />
      </React.Fragment>
    );
  }
}

export default ReactThrottle;

// throttle함수는 글자가 입력될때마다 호출되지만, throttle함수는 1초마다 0개 또는 1개의 로그를 출력한다.
// react라는 글자를 각각 0초, 0.3초, 0.5초 1.1초, 2초에 입력했다면, throttle은 0초에 r 1초에 rea 2초에 react로 실행한다.
