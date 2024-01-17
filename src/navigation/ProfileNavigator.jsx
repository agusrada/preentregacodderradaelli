import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Header  from "../components/header";
import ProfileScreen from "../screen/ProfileScreen";
import ImageSelectorScreen from "../screen/ImageSelectorScreen";

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    return(
        <Stack.Navigator
                initialRouteName="Perfil"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }  
            >
                <Stack.Screen 
                    name="Perfil"
                    component={ProfileScreen}
                />  
                <Stack.Screen 
                    name="Seleccion de imagen"
                    component={ImageSelectorScreen}
                />  
            </Stack.Navigator>
    )
}


export default ProfileNavigator