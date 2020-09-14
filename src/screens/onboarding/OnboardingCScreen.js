import * as React from 'react'
import { View, ImageBackground, Text, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'

const OnboardingCScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <ImageBackground
        source={require('../../../assets/images/onboarding/onboarding-img-3/onboarding-img-3.png')}
        style={{flex: 1, justifyContent: 'flex-end', paddingVertical: 48, paddingHorizontal: '10%',}}
      >
        <View>
          <Text style={[globalStyles.title, {color: '#fff'}]}>You got it</Text>
          <Text style={globalStyles.descriptionText}> Save product for later or buy in three easy steps.</Text>
          <View style={[styles.dotsContainer, globalStyles.mt32]}>
            <View style={styles.inactive}/>
            <View style={styles.inactive}/>
            <View style={styles.active}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
            <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
            </TouchableHighlight>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={globalStyles.descriptiveItem}
              >Login</Text>
              <ArrowLongRight size={24} style={{color: '#fff', marginLeft: 8}} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnboardingCScreen

const styles = StyleSheet.create({
  inactive: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  active: {
    width: 16,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#ee3168"
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 70,
    // borderWidth: 2,
  }
})