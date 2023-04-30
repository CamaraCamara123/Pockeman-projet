import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function PokemanHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
    Welcome to
        <Text style={headerStyles.innerText}> the pokeman univers</Text>
      </Text>
    </View>
  );
}
 
const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
