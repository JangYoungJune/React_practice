import React, { Component } from 'react';
import MyCompoent from './Component/MyComponent';
import Counter from './Component/Counter';
import Say from './Component/Say';
import EventPractice from './EventHandling/EventPractice';
import ValidationSample from './Ref/ValidationSample';
import ScrollBox from './Ref/ScrollBox';
import IterationSample from './Iterator/IterationSample';
import LifeCycleSample from './LifeCycle/LifeCycleSample';
import ErrorBoundary from './LifeCycle/ErrorBoundary';

class App extends Component {
  state = {
    color: '#000000'
  };

  getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  handleClick = () => {
    this.setState({
      color: this.getRandomColor()
    });
  };

  render() {
    // 컴포넌트
    // return (<MyComponent name="react" favoriteNumber={3}>리액트</MyComponent>)
    /* return <Counter></Counter> */
    // return <Say></Say>;

    // 이벤트 핸들러
    // return <EventPractice />;

    // Ref 설정처리
    // return <ValidationSample />;
    /*return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );*/

    // 반복문
    // return <IterationSample />;

    // 라이프사이클
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
