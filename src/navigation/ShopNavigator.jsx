import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";

//Importamos las vistas
import CategoriesScreen from '../screen/CategoriesScreen'
import ProductsByCategoryScreen from '../screen/ProductsByCategorieScreen'
import ProductDetailScreen from '../screen/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return(
            <Stack.Navigator
                initialRouteName="Categorias"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }
            
            >
                <Stack.Screen 
                    name="Categorías"
                    component={CategoriesScreen}
                />
                <Stack.Screen 
                    name="Productos"
                    component={ProductsByCategoryScreen}
                    options={{ title: 'Productos'}}
                />
                <Stack.Screen 
                    name="Detalle"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
    )
}


export default ShopNavigator