import { StyleSheet, Text, View } from 'react-native'
import Header  from '../components/Header'
import categories from '../components/categories.json'
import { FlatList } from 'react-native-web'


const Inicio = () => {
  return (
    <View>
      <Header title="Inicio"/>
      <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({item})=>(<View><Text>{item.title}</Text></View>)}
    />
      <Text>Inicio</Text>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({})