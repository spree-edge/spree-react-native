import * as React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { CheckR } from '../../../../library/icons'
import { SearchBar, Button } from 'react-native-elements'
import { globalStyles } from '../../../../styles/global'
import { colors } from '../../../../res/palette'

const BrandScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState('')

  // React.useEffect(() => {
    

    // return () => {
    //   cleanup
    // }
  // }, [])

  return (
    <>
      <ScrollView style={globalStyles.containerFluid}>
        <SearchBar
          platform="ios"
          value={search}
          placeholder="Search shopit catalogue"
          onChangeText={setSearch}
          inputContainerStyle={{
            // borderWidth: 2,
            backgroundColor: colors.background
          }}
          inputStyle={{
            fontFamily: 'lato-regular',
            fontSize: 15
          }}
          searchIcon={{
            color: colors.black
          }}
        />
        {brandFilterList.map((item, i) => (
          <View key={i} style={styles.listContainer}>
            <View style={styles.listLeftContainer}>
              <CheckR size={17} style={{color: item.active ? colors.primary : colors.gray, marginRight: 10}} />
              <Text style={[styles.listItemTitle, { color: item.active ? colors.primary : colors.gray }]}>{item.name}</Text>
            </View>
            <Text style={{color: item.active ? colors.primary : colors.gray}}>{item.count}</Text>
          </View>
          // <List.Item
          //   key={i}
          //   title={item.name}
          //   left={props => <CheckR size={17} style={{color: colors.black}} />}
          //   right={props => <Text>{item.count}</Text>}
          //   style={{borderWidth: 2, alignItems: 'center'}}
          // />
        ))}
      </ScrollView>
      {/* <View
        style={[{
          flexDirection: 'row',
          paddingVertical: 8,
          justifyContent: 'space-evenly',
          borderTopWidth: 1,
          borderTopColor: colors.background
        }]}
      >
        <Button
          title='Close'
          buttonStyle={[globalStyles.btnOutlined, globalStyles.btn, {
            borderWidth: 1,
            paddingVertical: 8,
            paddingHorizontal: 30,
            marginHorizontal: 3,
            // flex: 1,
          }]}
          titleStyle={{ color: colors.primary }}
        />
        <Button
          title='Apply Filter'
          buttonStyle={[globalStyles.btnSolid, globalStyles.btn, {
            paddingVertical: 8,
            paddingHorizontal: 30,
            marginHorizontal: 3,
          }]}
        />
      </View> */}
    </>
  );
}

export default BrandScreen

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  listLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemTitle: {
    color: colors.gray,
    fontFamily: 'lato-regular'
  }
})


const brandFilterList = [
  {
    name: 'DressBerry',
    active: false,
    count: 147
  },
  {
    name: 'SABASA',
    active: false,
    count: 51
  },
  {
    name: 'Libas',
    active: true,
    count: 117
  },
  {
    name: 'W',
    active: false,
    count: 38
  },
  {
    name: 'Woo Fashion',
    active: false,
    count: 59
  },
  {
    name: 'Persian',
    active: false,
    count: 32
  },
  {
    name: 'Pinto Noka',
    active: true,
    count: 38
  },
  {
    name: 'Zebara',
    active: false,
    count: 76
  },
  {
    name: 'Yuksuko',
    active: false,
    count: 64
  },
  {
    name: 'U & On',
    active: false,
    count: 7
  },
  {
    name: 'ONLY',
    active: false,
    count: 23
  },
  {
    name: 'Ze Zara',
    active: false,
    count: 22
  },
  {
    name: 'YuTuSu',
    active: false,
    count: 9
  },
]