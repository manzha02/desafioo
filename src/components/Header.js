import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {

    return (
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </View>
    )}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F4D678",
        height:80,
        with:"100%",
        justifyContent:"center",
        alignItems:"center"

    },

    text:{
        fontSize:30
    }
    })