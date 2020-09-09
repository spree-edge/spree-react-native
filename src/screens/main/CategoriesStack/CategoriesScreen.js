import * as React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global'

const CategoryMenu = ({ headline, subheading }) => {
  return (
    <View style={styles.menuContainer}>
      <Text>{headline}</Text>
      <Text>{subheading}</Text>
    </View>
  )
}

const CategoriesScreen = () => {
  return (
    <ScrollView>
      <View>
        <CategoryMenu headline="MEN" subheading="Spruce Up Your Look" />
        <Text>CategoriesScreen</Text>
      </View>
    </ScrollView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    width: '93.6%',
    alignSelf: 'center'
  }
})