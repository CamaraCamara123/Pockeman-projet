import * as React from 'react';
import { View, Text } from 'react-native';

import PokemanHeader from './components/PokemanHeader';
import PokemanFooter from './components/PokemanFooter';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'grey',
        }}>
        <PokemanHeader/>
       <MenuItems/>
       <PokemanFooter/>
      </View>
    </>
  );
}
