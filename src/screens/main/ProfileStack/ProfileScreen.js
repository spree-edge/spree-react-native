import * as React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { colors } from '../../../res/palette'
import { LinearGradient } from 'expo-linear-gradient'
import { Pen, User, Home, ShoppingBag, Heart, Gift, ChevronRight } from '../../../library/icons'
import { Divider, Button } from 'react-native-elements'
import { userLogout } from '../../../redux'
import { styles } from './styles'

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

const ProfileScreen = ({ dispatch }) => {

  return (
    <View style={styles.mainContainer}>
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
              <Text style={styles.profileName}>Jane Pinto</Text>
              <Pen size={24} style={{ color: colors.white }} />
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
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.listIcon}><ChevronRight size={24} style={{color: colors.black}} /></View>
              </View>
              <Divider />
            </View>
          )
        )}
      </View>
      <View style={globalStyles.container}>
        <Button
          title="Logout Account"
          buttonStyle={ styles.buttonBlockStyle }
          titleStyle={ globalStyles.latoBold16 }
          onPress={() => dispatch(userLogout())}
        />
      </View>
    </View>
  )
}

export default connect()(ProfileScreen)