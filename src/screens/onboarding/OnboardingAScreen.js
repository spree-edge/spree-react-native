import * as React from 'react'
import { View, Text, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'
import { SvgUri } from 'react-native-svg'

const OnboardingAScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <Image
        source={require('../../../assets/images/onboarding-img-1.png')}
        style={globalStyles.onboardingCover}  
      />
      <View style={globalStyles.onboardingCardContainer}>
        <Text style={[globalStyles.title, {color: '#fff'}]}>Search it</Text>
        <Text style={[globalStyles.descriptionText, {textAlign: 'left'}]}>We make it easy to search and find right product for you.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
          <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
          </TouchableHighlight>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={globalStyles.descriptiveItem}
              onPress={() => navigation.navigate('OnboardingB')}  
            >Next</Text>
            <ArrowLongRight style={{color: '#fff', marginLeft: 8}} />
            {/* <SvgUri
              // width="100%"
              // height="100%"
              style={{color: '#fff'}}
              uri="https://css.gg/arrow-long-right.svg"
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingAScreen
