import * as React from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'

const OnboardingBScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <Image
        source={require('../../../assets/images/onboarding/onboarding-img-2/onboarding-img-2.png')}
        style={globalStyles.onboardingCover}  
      />
      <View style={globalStyles.onboardingCardContainer}>
        <Text style={[globalStyles.title, {color: '#fff'}]}>Find it</Text>
        <Text style={globalStyles.descriptionText}>Easy to find and check similar products in large catalogue.</Text>
        <View style={[styles.dotsContainer, globalStyles.mt32]}>
          <View style={styles.inactive}/>
          <View style={styles.active}/>
          <View style={styles.inactive}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
          <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
          </TouchableHighlight>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={globalStyles.descriptiveItem}
              onPress={() => navigation.navigate('OnboardingC')}
            >Next</Text>
            <ArrowLongRight style={{color: '#fff', marginLeft: 8}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingBScreen

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