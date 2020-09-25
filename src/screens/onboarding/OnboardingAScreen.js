import * as React from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ArrowLongRight } from '../../library/icons'
import { styles } from './styles'
import { colors } from '../../res/palette'
import { Button } from 'react-native-elements'

const OnboardingAScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.containerFluid}>
      <Image
        source={require('../../../assets/images/onboarding/onboarding-img-1/onboarding-img-1.png')}
        style={styles.onboardingCover}
      />
      <View style={styles.onboardingCardContainer}>
        <Text style={styles.title}>Search it</Text>
        <Text style={styles.description}>We make it easy to search and find right product for you.</Text>
        <View style={styles.dotsContainer}>
          <View style={styles.active} />
          <View style={styles.inactive} />
          <View style={styles.inactive} />
        </View>
        <View style={styles.footerActions}>
          <Button 
            title="Go Shopping"
            type="solid"
            buttonStyle={globalStyles.roundedButton}
            titleStyle={styles.descriptive}
            onPress={() => navigation.navigate('SignIn')}
          />
          <TouchableOpacity style={styles.footerAction}
            onPress={() => navigation.navigate('OnboardingB')}
          >
            <Text style={styles.descriptive}> Next </Text>
            <ArrowLongRight size={24} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingAScreen

// const styles = StyleSheet.create({
//   inactive: {
//     width: 6,
//     height: 6,
//     borderRadius: 10,
//     backgroundColor: "#fff"
//   },
//   active: {
//     width: 16,
//     height: 6,
//     borderRadius: 10,
//     backgroundColor: "#ee3168"
//   },
//   dotsContainer: {
//     ...globalStyles.mt32,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: 70,
//   },
//   footerActions: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'baseline', 
//     marginTop: 24
//   },
//   title: {
//     ...globalStyles.title,
//     color: colors.white
//   },
//   description: {
//     ...globalStyles.descriptionText,
//     color: colors.white
//   },
//   descriptive: {
//     ...globalStyles.descriptiveItem,
//     color: colors.white
//   },
//   footerIcon: {
//     color: '#fff',
//     marginLeft: 8
//   },
//   footerAction: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// })