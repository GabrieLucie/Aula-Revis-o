import { View, StyleSheet } from 'react-native';

import Brasil from './olimpiada1'
import Israel from './olimpiada2'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Brasil nome="Brasil" ouro="0" bronze="2" prata="1" total="3"/>
      <Israel nome="Israel" ouro="0" bronze="0" prata="0" total="0"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
