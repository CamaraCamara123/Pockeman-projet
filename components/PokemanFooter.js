import * as React from 'react';
import { View, Text } from 'react-native';
 
export default function PokemanFooter() {
  return (
    <View
      style={{
        backgroundColor: '#grey',
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'white',
          textAlign: 'center',
        }}>
        All rights reserved by pokeman univers, 2022{' '}
      </Text>
    </View>
  );
}
