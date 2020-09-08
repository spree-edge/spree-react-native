import * as React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { SearchBar, Image } from 'react-native-elements'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <ScrollView style={globalStyles.containerFluid}>
      <View style={globalStyles.container}>
        <SearchBar
          placeholder="Search shopit catalogue"
          platform="android"
          value={searchQuery}
          searchIcon={{
            color: colors.black
          }}
          // inputContainerStyle={{
          //   borderWidth: 2,
          // }}
          onChangeText={text => setSearchQuery(text)}
          lightTheme={true}
          round={true}
        />
      </View>
      <Image
        source={require('../../../../assets/images/banner-first-order-discount.png')}
        style={{ width: '100%', height: 329 }}
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})