import { StyleSheet, Text, View, FlatList } from 'react-native'
import CategoryItem from '../components/categoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'



const CategoriesScreen = ({navigation}) => {


  
  const {data, isLoading, error} =useGetCategoriesQuery()  

  const renderCategoryItem = ({item}) => (
      <CategoryItem category={item} navigation={navigation} />
  )

  return(
      <>
      
      <FlatList style={styles.categories}
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categories:{
    marginBottom: 100,
  }
    
})