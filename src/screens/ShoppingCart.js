import {Text , FlatList, View , StyleSheet ,Pressable} from "react-native";
import CartListItem  from "../components/CartListItem";
import {useSelector} from "react-redux";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";




const ShoppingCartTotals  = () => {

    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subtotal} US$</Text>
            
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee} US$</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{selectTotal}US$</Text>
            
            </View>
        </View>
}



const ShoppingCart = () => {


    const cartItems= useSelector(state=> state.cart.items );


    return ( 
        <>
    <FlatList
     data={cartItems} 
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
