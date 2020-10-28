import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../../res/palette'
import { CheckR } from '../../../../library/icons'
import { connect } from 'react-redux'
import { toggleProductsSizeFilter } from '../../../../redux'

const SizeScreen = ({ dispatch, sizeFilterList }) => {

  return (
    <View>
      {sizeFilterList.map((item, i) => (
        <TouchableOpacity key={i} style={styles.listContainer} onPress={() => dispatch(toggleProductsSizeFilter(item))}>
          <CheckR size={17} style={{color: item.active ? colors.primary : colors.gray, marginRight: 10}} />
          <Text style={[styles.listItemTitle, { color: item.active ? colors.primary : colors.gray }]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const mapStateToProps = state => ({
  sizeFilterList: state.products.params.sizeFilterList
})

export default connect(mapStateToProps)(SizeScreen)

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