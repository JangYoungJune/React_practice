import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 클래스 컴포넌트의 componentDidMount + componentDidUpdate의 역할
  useEffect(() => {
    console.log('랜더링이 완료되었습니다.');
    console.log({ name, nickname });
  });

  // useEffect를 마운트때만
  useEffect(() => {
    console.log('마운트때만 돌아갑니다.');
  }, []);

  // useEffect를 업데이트때만
  useEffect(() => {
    console.log('업데이트때만 돌아갑니다.', { name });
  }, [name]);

  // useEffect 언마운트 전 실행되는 cleanup함수
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
