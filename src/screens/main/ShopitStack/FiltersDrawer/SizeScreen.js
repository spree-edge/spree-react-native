import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../../res/palette'
import { CheckR } from '../../../../library/icons'


const SizeScreen = () => {

  const [sizeFilterList, setSizeFilterList] = React.useState([
    {
      name: 'XS',
      active: true,
    },
    {
      name: 'S',
      active: true,
    },
    {
      name: 'M',
      active: true,
    },
    {
      name: 'L',
      active: true,
    },
    {
      name: 'XL',
      active: true,
    },
    {
      name: 'XXL',
      active: true,
    },
    {
      name: 'XXXL',
      active: true,
    }
  ])

  return (
    <View>
      {sizeFilterList.map((item, i) => (
        <TouchableOpacity key={i} style={styles.listContainer} onPress={() => setSizeFilterList([...sizeFilterList.slice(0, i), {...sizeFilterList[i], active: !sizeFilterList[i].active}, ...sizeFilterList.slice(i+1, sizeFilterList.length)])}>
          <CheckR size={17} style={{color: item.active ? colors.primary : colors.gray, marginRight: 10}} />
          <Text style={[styles.listItemTitle, { color: item.active ? colors.primary : colors.gray }]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SizeScreen

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    padding: 10
  },
  listItemTitle: {
    color: colors.gray,
    fontFamily: 'lato-regular'
  }
})