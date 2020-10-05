import * as React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'
import { styles } from './styles'
import { Button } from 'react-native-elements'

const OnboardingBScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <Image
        source={require('../../../assets/images/onboarding/onboarding-img-2/onboarding-img-2.png')}
        style={globalStyles.onboardingCover}  
      />
      <View style={styles.onboardingCardContainer}>
        <Text style={styles.title}>Find it</Text>
        <Text style={styles.description}>Easy to find and check similar products in large catalogue.</Text>
        <View style={styles.dotsContainer}>
          <View style={styles.inactive}/>
          <View style={styles.active}/>
          <View style={styles.inactive}/>
        </View>
        <View style={styles.footerActions}>
          <Button 
            title="Go Shopping"
            type="solid"
            buttonStyle={globalStyles.roundedButton}
            titleStyle={styles.footerActionText}
            onPress={() => navigation.navigate('SignIn')}
          />
          <TouchableOpacity style={styles.footerAction}
            onPress={() => navigation.navigate('OnboardingC')}
          >
            <Text style={styles.footerActionText}>Next</Text>
            <ArrowLongRight size={24} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingBScreen
