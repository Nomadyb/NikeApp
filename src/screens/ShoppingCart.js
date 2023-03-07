import {Text , FlatList, View , StyleSheet ,Pressable} from "react-native";
import cart from "../data/cart";
import CartListItem  from "../components/CartListItem";



const ShoppingCartTotals  = () => (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>410,00 US$</Text>
            
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10,00 US$</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420,00 US$</Text>
            
            </View>
        </View>
     )



const ShoppingCart = () => {
    return ( 
        <>
    <FlatList
     data={cart} 
     renderItem={({item}) => <CartListItem cartItem={item} />}
     ListFooterComponent={ShoppingCartTotals}
    
    />


<Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>

</>

     )
}

const styles = StyleSheet.create({
    totalsContainer:{
        padding:20,
        borderColor:"gainsboro",
        paddingTop:10,
        borderTopWidth:1,


    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:2,

    },
    text:{
        fontsize:16,
        color:"gray",
    },
    textBold:{
        fontsize:16,
        color:"gray",
        fontWeight:"700"
    }   ,
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
        fontsize:16,
    
    },

})

export default ShoppingCart;
