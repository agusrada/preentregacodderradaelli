import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import CartItem from '../components/cartItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'


const CartScreen = () => {

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = ()=>{
    triggerPost({total,cartItems,user:"LoggedUser"})
  }

  const renderCartItem =({item}) =>{
    return <CartItem item={item}/>

  }

  return (
    <View style={styles.cartContainer}>
      <FlatList
      data={cartItems}
      renderItem={renderCartItem}
      keyExtractor={item=>item.id}
      >
       
      </FlatList>
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>total:${total} </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.textConfirm}>Confirmar Pedido</Text>
          
         </TouchableOpacity>

      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    
  },
  confirmButton:{
    backgroundColor: '#219ebc',
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    
    fontSize:16,
    color: '#fff'
  }  
})