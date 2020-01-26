import React, { useContext } from 'react';
import ColorContext from '../contexts/color';
import styled from 'styled-components';

const ColorBox_hook = () => {
  const { state } = useContext(ColorContext);
  const ColorDiv = styled.div`
    width: 64px;
    height: 64px;
    background: {state.color}
`;
  const SubColorDiv = styled.div`
    width: 64px;
    height: 64px;
    background: {state.subcolor}
`;
  return (
    <>
      <div style={{ width: '64px', height: '64px', background: state.color }} />
      <div
        style={{ width: '64px', height: '64px', background: state.subcolor }}
      />
    </>
  );
};

export default ColorBox_hook;
