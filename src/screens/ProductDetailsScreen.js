import { StyleSheet, View , Image , FlatList , useWindowDimensions , Text, ScrollView, Pressable} from "react-native";
import products from "../data/products";
import {useSelector} from "react-redux";


const ProductDetailsScreen = () => {
    const product = useSelector(state => state.products.selectedProduct);




  const {width} = useWindowDimensions();

  const addToCart = () => {
    console.warn("add to cart");

  }

  return (
    <View>

  
      {/* Image Carousel */}
      <ScrollView >

        <FlatList
            data={product.images}
            renderItem={({item}) => (
            <Image 
                  source= {{uri: item}}
                  style={{width , aspectRatio:1}}
            />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        />


    
    <View style={{padding:25 }}>
      {/* Title */}

      <Text style={styles.title} >{product.name}</Text>

      {/* Price */}
      <Text style={styles.price} >${product.price}</Text>


      {/* Description */}
      <Text style={styles.description} >{product.description}</Text>
      </View>

      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>


      {/* Navigation icon */}
      



    </View>
    
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:34,
        fontWeight: "500",
        marginVertical:10,
        color:"purple"
    },
    price:{
        fontWeight:"500",
        fontSize:22,
        color:"green",
        letterSpacing:1.6,
        
    },
    description:{
        marginVertical:10,
        fontSize:15,
        lineHeight:25,
        fontWeight:"340",

    },

    button:{
            position: "absolute",
            backgroundColor:"purple",
            bottom:30,
            width:"90%",
            alignSelf:"center",
            padding:20,
            borderRadius:100,
            justifyContent:"center",
            alignItems:"center"

        },
        buttonText:{
            color:"white",
            fontWeight:"400",
            fontSize:16,
        
        },

});

export default ProductDetailsScreen;