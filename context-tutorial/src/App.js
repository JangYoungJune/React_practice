import React from 'react';
import ColorBox from './components/ColorBox';
import ColorBoxHook from './components/ColorBox_hook';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import SelectColorsStatic from './components/SelectColor_static';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColorsStatic />
        <ColorBoxHook />
      </div>
    </ColorProvider>
  );
}

export default App;
