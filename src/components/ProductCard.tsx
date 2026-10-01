import { Button, StyleSheet, Text, View } from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  onAdd: () => void;
};

export default function ProductCard({name, price, category, onAdd}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>Price: {price}€</Text>

      <Text>Category: {category}</Text>

      <Button
        title="Add to cart"
        onPress={onAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    width: 180,
    height: 150,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    gap: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});