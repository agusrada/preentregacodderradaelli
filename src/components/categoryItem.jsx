import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Card from "./card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shopSlice";



const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Productos",{category})
            dispatch(setCategorySelected(category))
            }
            }>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>      

        
    )
}

export default CategoryItem

const styles =StyleSheet.create ({
    cardContainer: {
        margin: 20,
        padding: 15,
        textAlign:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 20

    }
})