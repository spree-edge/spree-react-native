import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../res/palette'
import FiltersDrawerNavigator from './FiltersDrawerNavigator'
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global'
import { connect } from 'react-redux'
import { resetProductsFilter } from '../redux'

const Tab = createBottomTabNavigator();

function FiltersTabNavigator({ route, navigation, dispatch }) {

  const handleFilterClose = () => {     //Unmount Screen & Reset Filter params
    dispatch(resetProductsFilter())
    navigation.navigate('ProductsList')
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.black,
        tabStyle: {
          borderWidth: 2,
          borderColor: colors.success,
        },
        style: {
          borderTopWidth: 2,
          borderTopColor: colors.background,
          height: 60,
          justifyContent: 'center'
        }
      }}
    >
      <Tab.Screen name="FilterClose" component={FiltersDrawerNavigator}
        options={{
          tabBarButton: props => <Button
            {...props}
            title="Close"
            buttonStyle={[globalStyles.btnOutlined, globalStyles.btn, {
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 55,
              marginHorizontal: 8,
              marginTop: 5
            }]}
            titleStyle={{ color: colors.primary }}
            onPress={handleFilterClose}
          />
        }}
      />
      <Tab.Screen name="FilterApply" component={FiltersDrawerNavigator}
        options={{
          tabBarButton: props => <Button
            {...props}
            title="Apply Filter"
            buttonStyle={[globalStyles.btnSolid, globalStyles.btn, {
              borderWidth: 1,
              paddingVertical: 8,
              paddingHorizontal: 55,
              marginHorizontal: 8,
              marginTop: 5
            }]}
            onPress={() => {
              navigation.navigate('ProductsList', { filterParams: true, title: route.params.title })
            }}
          />
        }}
      />
    </Tab.Navigator>
  );
}

export default connect()(FiltersTabNavigator)