import {View, StyleSheet} from 'react-native'

const card=({children, style}) => {
    return(
        <View style={{...styles.container,...style}}>
            {children}

        </View>

    )
}

export default card

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#e3d5ca',
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 3,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})