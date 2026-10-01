import CartInfo from '@/components/CartInfo';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount(cartCount+1);
  }
  const emptyCart = () => {
    setCartCount(0);
  }

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
    },
    {
      id: '5',
      name: 'Face cream',
      price: 12.99,
      category: 'Cosmetics',
    },
    {
      id: '6',
      name: 'Hair spray',
      price: 5.99,
      category: 'Cosmetics',
    },
    {
      id: '7',
      name: 'Lamp',
      price: 20.99,
      category: 'Electronics',
    },
    {
      id: '8',
      name: 'Gaming chair',
      price: 299.99,
      category: 'Furniture',
    },
    {
      id: '9',
      name: '3D Constructor',
      price: 19.99,
      category: 'Toys',
    },
    {
      id: '10',
      name: 'Plush toy',
      price: 9.99,
      category: 'Toys',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Marketplace</Text>
      <View style={styles.cartBlock}>
        <CartInfo count={cartCount} />
        <Button
          title="Empty the cart"
          onPress={emptyCart}
        />
      </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              price={item.price}
              category={item.category}
              onAdd={addToCart}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productsBlock}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cartBlock: {
    alignItems: 'flex-end',
    width: '100%',
  },
  productsBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 10,
  }
});