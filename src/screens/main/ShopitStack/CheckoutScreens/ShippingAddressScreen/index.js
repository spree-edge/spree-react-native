import * as React from 'react'
import { ScrollView, View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { Divider, Input, Button, } from 'react-native-elements'
import { colors } from '../../../../../res/palette'
import { CheckR, CheckO } from '../../../../../library/icons'
import TextField from '../../../../../library/components/TextField'
import { Picker } from '@react-native-community/picker'
import { getDefaultCountry, getCountriesList, getCountry } from '../../../../../redux/actions/checkoutActions'
import { connect } from 'react-redux'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'

const ShippingAddressScreen = ({ navigation, dispatch, defaultCountry, countriesList, saving }) => {
  const [statePickerSelectedValue, setStatePickerSelectedValue] = React.useState('Set API Default State')
  const [countryPickerSelectedValue, setCountryPickerSelectedValue] = React.useState('Set API Default Country')

  React.useEffect(() => {
    dispatch(getCountriesList())
    dispatch(getDefaultCountry())
    setCountryPickerSelectedValue(defaultCountry.iso)
  }, [])

  if(saving) {
    return (
      <View style={[globalStyles.containerFluid, globalStyles.centeredContent]}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else {
    return (
      <View style={ globalStyles.containerFluid }>
        <ScrollView>
          {/* Status Bar Starts */}
          <View style={checkoutStyles.statusBarWrapper}>
            <View style={checkoutStyles.statusBarContainer}>
              <View style={[ checkoutStyles.rowContainer, { alignItems: 'center'} ]}>
                <CheckO size={16} style={[checkoutStyles.iconStyle, {color: colors.success}]} />
                <Text style={ globalStyles.latoRegular, {color: colors.success}}>Bag</Text>
              </View>
              <View
                style={[checkoutStyles.shippingIndicatorLine, {
                  borderBottomColor: colors.success,
                }]}
              />
              <View style={[ checkoutStyles.rowContainer, { alignItems: 'center'} ]}>
                <CheckO size={16} style={[checkoutStyles.iconStyle, {color: colors.black}]} />
                <Text style={ globalStyles.latoRegular }>Address</Text>
              </View>
              <View
                style={[checkoutStyles.shippingIndicatorLine, {
                  borderBottomColor: colors.black,
                }]}
              />
              <View style={[ checkoutStyles.rowContainer, { alignItems: 'center'} ]}>
                <CheckO size={16} style={[checkoutStyles.iconStyle, {color: colors.black}]} />
                <Text style={ globalStyles.latoRegular }>Payment</Text>
              </View>
            </View>
          </View>
          {/* Status Bar Ends */}

          <View style={globalStyles.container}>
            <TextField
              placeholder="Name"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <TextField
              placeholder="Email"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <TextField
              placeholder="Phone No."
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <TextField
              placeholder="Pin Code"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <TextField
              placeholder="Address ( House No, Street, Area )"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <View style={[checkoutStyles.rowContainer, styles.inlineContainer]}>
              {/* <TextField
                placeholder="City"
                inputStyle={styles.inputStyle}
                containerStyle={[styles.containerStyle, styles.w48]}
                inputContainerStyle={styles.inputContainerStyle}
              /> */}
              <Input
                placeholder="City" 
                keyboardType="default"
                containerStyle={[styles.containerStyle, styles.w48, {paddingTop: 5}]}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
              />
              <Picker
                mode="dialog"
                selectedValue={statePickerSelectedValue}
                style={[styles.containerStyle, styles.inputStyle, styles.w48, {paddingTop: 5}]}
                itemStyle={styles.inputStyle}
                onValueChange={(itemValue, itemIndex) =>
                  setStatePickerSelectedValue(itemValue)
                }
              >
                {
                  defaultCountry.states.map(state => 
                    <Picker.Item key={state.id} label={state.id} value={state.id} />  
                  )
                }
              </Picker>
              {/* <Input
                placeholder="State" 
                keyboardType="default"
                containerStyle={[styles.containerStyle, styles.w48, {paddingTop: 5}]}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
              /> */}
            </View>
            <Picker
              mode="dialog"
              selectedValue={countryPickerSelectedValue}
              style={styles.containerStyle}
              itemStyle={styles.inputStyle}
              onValueChange={(itemValue, itemIndex) => {
                setCountryPickerSelectedValue(itemValue)
                dispatch(getCountry(itemValue))
              }}
            >
              {
                countriesList.map(country => 
                  <Picker.Item key={country.id} label={country.name} value={country.iso} />  
                )
              }
            </Picker>
            {/* <TextField
              placeholder="Country"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            /> */}
            <View style={[checkoutStyles.rowContainer, globalStyles.mt24]}>
              <CheckR size={16} style={styles.iconStyle} />
              <Text style={globalStyles.latoRegular14}>Default Address</Text>
            </View>
          </View>
          
          <CheckoutDetailsCard title="Order Total" />

        </ScrollView>
        
        <ActionButtonFooter
          title="Save Address & Continue"
          onPress={() => navigation.navigate('CheckoutPayment')}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  defaultCountry: state.checkout.defaultCountry,
  countriesList: state.checkout.countriesList,
  saving: state.checkout.saving
})

export default connect(mapStateToProps)(ShippingAddressScreen)