import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import products_data from '../data/products_data.json';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetailScreen = ({route}) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)

  const { height, width } = useWindowDimensions()

  const productId = route.params

  useEffect(() => {
      height < width ? setIsPortrait(false) : setIsPortrait(true)
    }, [height])
  

  useEffect(()=>{
      const productFound = products_data.find(product=>product.id===productId)
      setProductSelected(productFound)
      setIsLoading(false)
  }
  ,[productId])

  const dispatch = useDispatch()

  const onAddToCart= () =>{
    dispatch(addItem({...productSelected, quantity: 1}))
  }

  return(
      <>
      {
      isLoading
      ?
      <ActivityIndicator />
      :
      <>
      
          <ScrollView >
            <Image
              source={{ uri: productSelected.thumbnail }}
              resizeMode='cover'
              style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>{productSelected.description}</Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                <Text style={styles.buyText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
                    </>
            }
        </>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 32,
  },
  price: {
    fontSize: 32,

  },
  buyButton: {
    marginTop: 70,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buyText: {
    color: 'white',
    fontSize: 20
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  }
});