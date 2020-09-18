import * as React from 'react';
import { Button, View, ScrollView, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from '../screens/main/ShopitStack/FiltersScreen'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'
import { SearchBar } from 'react-native-elements'
import { List } from 'react-native-paper'
import { CheckR } from '../library/icons'

function Brand({ navigation }) {
  const [search, setSearch] = React.useState('')

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

  return (
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
      ))
      
      }
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </ScrollView>
  );
}

function Color({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Color</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Size({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Size</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function PriceRange({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PriceRange</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Pattern({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pattern</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function FabricType({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fabric Type</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function WashCare({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wash Care</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function FiltersDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home" 
      drawerType="permanent"
      drawerStyle={{
        width: '30%',
        // borderWidth: 2,
      }}
      drawerContentOptions={{
        activeTintColor: '#000',
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#f5f5f5',
        itemStyle: {
          width: '100%',
          marginLeft: 0,
          marginTop: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.gray,
          marginBottom: 0
        },
        // borderWidth: 2,
        contentContainerStyle: {
          paddingTop: 0
        }
      }}
      sceneContainerStyle={{
        // borderWidth: 2,
        backgroundColor: '#fff'
      }}
    >
      <Drawer.Screen name="Brand" component={Brand} />
      <Drawer.Screen name="Color" component={Color} />
      <Drawer.Screen name="Size" component={Size} />
      <Drawer.Screen name="PriceRange" component={PriceRange} />
      <Drawer.Screen name="Pattern" component={Pattern} />
      <Drawer.Screen name="FabricType" component={FabricType} />
      <Drawer.Screen name="WashCare" component={WashCare} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
}

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