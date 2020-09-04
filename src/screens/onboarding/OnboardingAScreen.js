import * as React from 'react'
import { View, Text, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'

const OnboardingAScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../../assets/images/onboarding-img-1.png')}
        style={globalStyles.cover}  
      />
      <View style={globalStyles.onboardingCardContainer}>
        <Text style={globalStyles.onboardingCardTitle}>Search it</Text>
        <Text style={globalStyles.descriptionText}>We make it easy to search and find right product for you.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
          <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}>
            <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
          </TouchableHighlight>
          <TouchableOpacity>
            <Text
              style={globalStyles.descriptiveItem}
              onPress={() => navigation.navigate('OnboardingB')}  
            >Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingAScreen
