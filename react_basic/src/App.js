import React, { Component } from 'react';
import MyCompoent from './Component/MyComponent';
import Counter from './Component/Counter';
import Say from './Component/Say';
import EventPractice from './EventHandling/EventPractice';
import ValidationSample from './Ref/ValidationSample';
import ScrollBox from './Ref/ScrollBox';
import IterationSample from './Iterator/IterationSample';
class App extends Component {
  render() {
    // {<MyComponent name="react" favoriteNumber={3}>
    //   리액트
    // </MyComponent> }
    /* <Counter></Counter> */
    // return <Say></Say>;
    // return <EventPractice />;
    // return <ValidationSample />;

    /*return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );*/
    return <IterationSample />;
  }
}

export default App;
