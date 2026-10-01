import ProductCard from '@/components/ProductCard';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  const products = [
    {
      id: '1',
      name: 'Headphones',
      price: 49.99,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Keyboard',
      price: 15.99,
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Desk',
      price: 129.99,
      category: 'Furniture',
    },
    {
      id: '4',
      name: 'Mirror',
      price: 39.99,
      category: 'Furniture',
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <Text>Items in cart: 0</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            category={item.category}
            onAdd={() => console.log('Pridėta į krepšelį')}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});