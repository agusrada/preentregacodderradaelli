import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { setProfilePicture } from '../features/authSlice';
import { usePostProfilePictureMutation } from '../services/shopService';

const ImageSelectorScreen = ({navigation}) => {

    const localId = useSelector(state=>state.authReducer.localId)

    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    const [triggerSaveProfilePicture, result] = usePostProfilePictureMutation()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted){
            return false
        }
        console.log("Permisos otorgados")
        return true
    }

    const pickImage = async () => { 
        const isCameraOk = await verifyCameraPermissions()
        if(isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1,1],
                base64: true,
                quality: 0.2
            })
            if(!result.canceled){
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        }else{
            console.log("No se han otorgado permisos para usar la cámara")
        }
    }
    
    const confirmImage = () => { 
        dispatch(setProfilePicture(image))
        triggerSaveProfilePicture({image,localId})
        navigation.goBack()
    }

    useEffect(()=>{
       


    },[result,image,localId])

    return (
        <View style={styles.container}>
            {
                image
                    ?
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={pickImage}>
                                <Text style={styles.textBtn}>Tomar otra</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
                                <Text style={styles.textBtn}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.noImageContainer}>
                        <MaterialIcons name="no-photography" size={200} color="#ccc" />
                        <TouchableOpacity style={styles.btn} onPress={pickImage}>
                            <Text style={styles.textBtn}>Abrir cámara</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({
    noImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,

    },
    btn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 50,
    },
    textBtn: {
        color: '#fff'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 250,
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    btnConfirm: {
        backgroundColor: 'black',
        paddingHorizontal: 50
    },
    container: {
        backgroundColor:'#467599'
    }
})