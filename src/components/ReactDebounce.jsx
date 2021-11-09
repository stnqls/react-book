import { debounce } from "lodash";
import React from "react";

class ReactDebounce extends React.Component {
  debounceFunc = debounce((e) => {
    console.log("Debounce API Call");
    console.log(e.target.value);
  }, 1000);

  render() {
    return (
      <React.Fragment>
        <h2>검색어 입력</h2>
        <input type="text" onChange={(e) => this.debounceFunc(e)} />
      </React.Fragment>
    );
  }
}

export default ReactDebounce;

//debounce는 연속된 이벤트 호출이 일어나는 상황에 사용한다.
//마지막 이벤트가 실행되고 일정시간동안, 추가 이벤트가 발생하지 않을때 실행되는 함수이다.
