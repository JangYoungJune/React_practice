import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    // 이걸 설정하면 페이지에 변화가 생길고 할때마다 나갈지 확인
    this.unblock = this.props.history.block('정말 떠나실건가요?');
  }
  componentWillUnmount() {
    //컴포넌트가 언마운트되면 끔
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
