import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronRight, Support, ShoppingBag } from '../icons'
import { Divider, Button } from 'react-native-elements'
import { globalStyles } from '../../styles/global'
import { colors } from '../../res/palette'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import { AuthContext } from '../utils/context'

function CustomDrawerContent(props) {

  const { signOut } = React.useContext(AuthContext)

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.jumbotron}>
        <LinearGradient
          // Background Linear Gradient
          start={[1, 0]}
          end={[1, 1]}
          colors={['#EE3168', '#C1236F']}
          style={styles.centeredContent}
        >
          <View style={styles.centeredContent}>
            <Image
              source={require('../../../assets/images/user-profile-photo/user-profile-photo.png')}
              style={styles.avatar}
            />
            <View style={styles.profileDetails}>
              <Text style={[globalStyles.subhead, styles.profileName]}>Jane Pinto</Text>
              <ChevronRight size={20} style={{color: colors.white}} />
            </View>
          </View>
        </LinearGradient>
      </View>
      <DrawerItemList {...props} />
      <Divider />
      <DrawerItem
        label="Orders"
        labelStyle={[globalStyles.label, {fontSize: 14}]}
        icon={({ focused, color, size }) => <ShoppingBag size={size} style={{color, ...globalStyles.label}} />}
        onPress={() => props.navigation.navigate('Bag')}
      />
      <Divider />
      <DrawerItem
        label="Support & More"
        labelStyle={[globalStyles.label, {fontSize: 14}]}
        icon={({ color, size }) => <Support size={size} style={{color, ...globalStyles.label}} />}
        onPress={() => props.navigation.navigate('Support')}
      />
      <DrawerItem
        label="FAQs"
        labelStyle={[globalStyles.label, {marginLeft: 60}]}
        onPress={() => props.navigation.navigate('Support')}
      />
      <DrawerItem
        label="Contact Us"
        labelStyle={[globalStyles.label, {marginLeft: 60}]}
        onPress={() => props.navigation.navigate('Support')}
      />
      <DrawerItem
        label="Privacy Policy"
        labelStyle={[globalStyles.label, {marginLeft: 60}]}
        onPress={() => props.navigation.navigate('Support')}
      />
      <Button
        title="Logout Account"
        type="outline"
        containerStyle={{flex: 1, marginRight: 16}}
        buttonStyle={[globalStyles.btn, styles.btnOutline ]}
        titleStyle={styles.titleStyle}
        onPress={() => {signOut()}}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent

const styles = StyleSheet.create({
  centeredContent: {
    ...globalStyles.containerFluid,
    ...globalStyles.centeredContent
    // borderWidth: 2
  },
  jumbotron: {
    width: '100%',
    height: 168,
    backgroundColor: '#f5f5f5',
    // borderWidth: 2
  },
  avatar: {
    width: 80,
    height: 80
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  profileName: {
    color: colors.white,
    marginRight: 4
  },
  titleStyle: {
    fontFamily: 'lato-bold',
    color: colors.primary
  },
  btnOutline: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 40
  }
})