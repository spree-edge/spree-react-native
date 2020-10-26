import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../res/palette'
import { Text } from 'react-native';
import FiltersDrawerNavigator from './FiltersDrawerNavigator'
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global'
import { setFreshProductList } from '../redux'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator();

function FiltersTabNavigator({ navigation, dispatch }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.black,
        tabStyle: {
          borderWidth: 2,
          borderColor: colors.success,
          // justifyContent: 'space-around',

        },
        style: {
          borderTopWidth: 2,
          borderTopColor: colors.background,
          height: 60,
          justifyContent: 'center'
          // borderWidth: 2,
          // borderColor: colors.success,
          // alignItems: 'stretch'
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
              // flex: 1,
            }]}
            titleStyle={{ color: colors.primary }}
            onPress={() => navigation.navigate('ProductsList')}
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
              // flex: 1,
            }]}
            // titleStyle={{ color: colors.primary }}
            onPress={() => {
              dispatch(setFreshProductList())
              navigation.navigate('ProductsList')
            }}
          />
        }}
      />
    </Tab.Navigator>
  );
}

export default connect()(FiltersTabNavigator)


{/* <TouchableOpacity
{...props}
onPress={() => navigation.navigate('ProductsList')}
>
<Text>Close</Text>
</TouchableOpacity> */}