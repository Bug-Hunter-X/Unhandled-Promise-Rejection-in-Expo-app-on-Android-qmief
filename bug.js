import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Image
              style={styles.tinyLogo}
              source={{uri: "https://reactnative.dev/img/tiny_logo.png",}}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});