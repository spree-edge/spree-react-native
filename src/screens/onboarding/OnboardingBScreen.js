import * as React from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

const OnboardingBScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../../assets/images/onboarding-img-2.png')}
        style={globalStyles.cover}  
      />
      <View style={globalStyles.onboardingCardContainer}>
        <Text style={globalStyles.onboardingCardTitle}>Find it</Text>
        <Text style={globalStyles.descriptionText}>Easy to find and check similar products in large catalogue.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
          <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}>
            <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
          </TouchableHighlight>
          <TouchableOpacity>
            <Text
              style={globalStyles.descriptiveItem}
              onPress={() => navigation.navigate('OnboardingC')}
            >Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingBScreen
