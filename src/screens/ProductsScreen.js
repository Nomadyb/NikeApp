import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image,FlatList , Pressable} from 'react-native';
import products  from '../data/products.js';
import {useSelector,useDispatch} from "react-redux";
import { productsSlice } from '../store/productsSlice.js';


const ProductsScreen = ({navigation}) => {

  {/*const navigation = useNavigation();*/}

  const dispatch = useDispatch();


  const products = useSelector((state) => state.products.products);


  
    return (
          <FlatList
          data={products}
          renderItem={({item}) => (
            <Pressable  onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              //update selected product
              navigation.navigate("Product Details")}} style={styles.itemContainer}>
              <Image source={{ uri: item.image}} style={styles.image}/>
            </Pressable>
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
    },

  

  });
  
  export default ProductsScreen;