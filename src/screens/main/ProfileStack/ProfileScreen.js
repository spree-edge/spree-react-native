import * as React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { LinearGradient } from 'expo-linear-gradient'
import { Pen, User, Home, ShoppingBag, Heart, Gift, ChevronRight } from '../../../library/icons'
import { Divider } from 'react-native-elements'

const list = [
  {
    title: 'Account',
    icon: <User size={24} style={{color: colors.black}} />
  },
  {
    title: 'Saved Address',
    icon: <Home size={24} style={{color: colors.black}} />
  },
  {
    title: 'My Orders',
    icon: <ShoppingBag size={24} style={{color: colors.black}} />
  },
  {
    title: 'Favourites',
    icon: <Heart size={24} style={{color: colors.black}} />
  },
  {
    title: 'Offers',
    icon: <Gift size={24} style={{color: colors.black}} />
  },
]

const ProfileScreen = () => {
  return (
    <View style={[globalStyles.containerFluid, {backgroundColor: colors.white}]}>
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
              source={require('../../../../assets/images/user-profile-photo/user-profile-photo.png')}
              style={styles.avatar}
            />
            <View style={styles.profileDetails}>
              <Text style={[globalStyles.subhead, styles.profileName]}>Jane Pinto</Text>
              <Pen size={24} style={{color: colors.white}} />
            </View>
          </View>
        </LinearGradient>
      </View>
      <View>
        {
          list.map((item, i) => (
            <View key={i}>
              <View style={styles.listContainer}>
                <View style={styles.listIcon}>{item.icon}</View>
                <Text style={[styles.title]}>{item.title}</Text>
                <View style={styles.listIcon}><ChevronRight size={24} style={{color: colors.black}} /></View>
              </View>
              <Divider />
            </View>
          )
        )}
      </View>
      <TouchableHighlight style={[globalStyles.centeredContent, styles.btnBlock]}>
        <Text style={[globalStyles.descriptiveItem]}>Logout Account</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2
  },
  avatar: {
    width: 80,
    height: 80
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  profileName: {
    color: colors.white,
    marginRight: 4
  },
  jumbotron: {
    height: 168,
    backgroundColor: '#f5f5f5',
    // borderWidth: 2
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: colors.black,
    fontFamily: 'lato-regular',
    fontSize: 16
  },
  listIcon: {
    padding: 12
  },
  btnBlock: { 
    // borderWidth: 2,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 24
  },
})