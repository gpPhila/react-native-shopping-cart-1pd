import { StyleSheet, Text, View } from 'react-native';

type CartInfoProps = {
  count: number;
};

export default function CartInfo({count}: CartInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Items in cart: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});