import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native-elements'
import BrandScreen from '../screens/main/ShopitStack/FiltersDrawer/BrandScreen'
import PriceRange from '../screens/main/ShopitStack/FiltersDrawer/PriceRangeScreen'
import SizeScreen from '../screens/main/ShopitStack/FiltersDrawer/SizeScreen'

function Color({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Color</Text>
      <Button
        onPress={navigation.goBack}
        title="Go Back"
      />
    </View>
  );
}

function Pattern({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pattern</Text>
      <Button
        onPress={navigation.goBack}
        title="Go Back"
      />
    </View>
  );
}

function FabricType({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fabric Type</Text>
      <Button
        onPress={navigation.goBack}
        title="Go Back"
      />
    </View>
  );
}

function WashCare({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wash Care</Text>
      <Button
        onPress={navigation.goBack}
        title="Go Back"
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
        flex: .45,
        backgroundColor: colors.background
      }}
      drawerContentOptions={{
        activeTintColor: colors.black,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.background,
        itemStyle: {
          flex: 1,
          paddingLeft: 5,
          marginHorizontal: 0,
          marginVertical: 0,
          borderRadius: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.gray,
        },
        labelStyle: {
          width: '100%',
          color: colors.gray,
          ...globalStyles.latoRegular14,
          ...globalStyles.mv8
        },
        contentContainerStyle: {
          paddingTop: 0,
        }
      }}
      sceneContainerStyle={{
        backgroundColor: colors.white
      }}
    >
      <Drawer.Screen name="Brand" component={BrandScreen} />
      <Drawer.Screen name="Color" component={Color} />
      <Drawer.Screen name="Size" component={SizeScreen} />
      <Drawer.Screen name="PriceRange" component={PriceRange} />
      <Drawer.Screen name="Pattern" component={Pattern} />
      <Drawer.Screen name="FabricType" component={FabricType} />
      <Drawer.Screen name="WashCare" component={WashCare} />
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