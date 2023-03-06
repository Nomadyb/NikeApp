import { StyleSheet, Text, View,Image,FlatList} from 'react-native';
import products  from '../src/data/products';


const ProductsScreen = () => {
    return (
          <FlatList
          data={products}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
            <Image source={{ uri: item.image}} style={styles.image}/>
            </View>
            )}
            numColumns={2}
          />

      );

}



const styles = StyleSheet.create({

    

    itemContainer:{
      width:"50%",
      padding:2,
    },
    image: {
      width: "100%",
      aspectRatio:1,
    }
  });
  
  export default ProductsScreen;