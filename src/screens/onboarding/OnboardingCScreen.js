import * as React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'
import { styles } from './styles'
import { Button } from 'react-native-elements'

const OnboardingCScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <ImageBackground
        source={require('../../../assets/images/onboarding/onboarding-img-3/onboarding-img-3.png')}
        style={{flex: 1, justifyContent: 'flex-end', paddingVertical: 48, paddingHorizontal: '10%',}}
      >
        <View>
          <Text style={styles.title}>You got it</Text>
          <Text style={styles.description}> Save product for later or buy in three easy steps.</Text>
          <View style={styles.dotsContainer}>
            <View style={styles.inactive}/>
            <View style={styles.inactive}/>
            <View style={styles.active}/>
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
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={styles.footerActionText}> Login </Text>
              <ArrowLongRight size={24} style={styles.footerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnboardingCScreen