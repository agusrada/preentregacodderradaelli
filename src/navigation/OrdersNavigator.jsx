import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";
import OrdersScreen from "../screen/OrdersScreen";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Órdenes"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>,                     
                    })
                }
            >
                <Stack.Screen
                    name="Órdenes"
                    component={OrdersScreen}
                />
            </Stack.Navigator>
    )
}

export default OrdersNavigator