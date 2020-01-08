import React, { Component } from 'react';

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0
  //     };
  //   }

  // constructor안에서 해줄 수 있지만 밖에서 이렇게 해도 상관없다.
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
        <button
          onClick={() => {
            // 값이 2씩 오르지 않는다. 바로 값이 바뀌지 않는 문제
            {
              /* this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 }); */
            }

            this.setState(
              (prev, props) => {
                return {
                  number: prev.number + 1
                };
              },
              () => {
                console.log('방금 state가 호출되었습니다.');
                console.log(this.state);
              }
            );
            this.setState(prev => ({
              number: prev.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
