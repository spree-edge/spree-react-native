import * as React from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { colors } from '../../../../../res/palette'
import { CheckR, CheckO } from '../../../../../library/icons'
import TextField from '../../../../../library/components/TextField'
import { Picker } from '@react-native-community/picker'
import { getDefaultCountry, getCountriesList, getCountry, updateCheckout, checkoutNext } from '../../../../../redux/actions/checkoutActions'
import { connect } from 'react-redux'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'
import ActivityIndicatorCard from '../../../../../library/components/ActivityIndicatorCard'

const ShippingAddressScreen = ({ navigation, dispatch, country, countriesList, saving }) => {
  const [statePickerSelectedValue, setStatePickerSelectedValue] = React.useState('Set API Default State')
  const [countryPickerSelectedValue, setCountryPickerSelectedValue] = React.useState(country.iso)

  const [name, setName] = React.useState('John Snow')
  const [email, setEmail] = React.useState('john@snow.org')
  const [address, setAddress] = React.useState('7735 Old Georgetown Road')
  const [pinCode, setPinCode] = React.useState('20814')
  const [city, setCity] = React.useState('Bethesda')
  const [phone, setPhone] = React.useState('3014445002')

  const [windowWidth] = React.useState(Dimensions.get('window').width)

  const handleUpdateCheckout = () => {
    dispatch(
      updateCheckout(
        {
          order: {
            email: email,
            special_instructions: 'Please leave at door',
            bill_address_attributes: {
              firstname: name,
              lastname: name,
              address1: address,
              city: city,
              phone: phone,
              zipcode: pinCode,
              state_name: statePickerSelectedValue,
              country_iso: countryPickerSelectedValue
            },
            ship_address_attributes: {
              firstname: name,
              lastname: name,
              address1: address,
              city: city,
              phone: phone,
              zipcode: pinCode,
              state_name: statePickerSelectedValue,
              country_iso: countryPickerSelectedValue
            }
          }
        }
      )
    )
    dispatch(checkoutNext())
    dispatch(checkoutNext())
    navigation.navigate('CheckoutPayment')
  }


  React.useEffect(() => {
    dispatch(getDefaultCountry())
    dispatch(getCountriesList())
    setCountryPickerSelectedValue(country.iso)
  }, [])

  if(saving) {
    return (
      <ActivityIndicatorCard />
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
              value={name}
              onValueChange={setName}
            />
            <TextField
              placeholder="Email"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              value={email}
              onValueChange={setEmail}
            />
            <TextField
              placeholder="Phone No."
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              value={phone}
              onValueChange={setPhone}
            />
            <TextField
              placeholder="Pin Code"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              value={pinCode}
              onValueChange={setPinCode}
            />
            <TextField
              placeholder="Address ( House No, Street, Area )"
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              value={address}
              onValueChange={setAddress}
            />
            <View style={[checkoutStyles.rowContainer, styles.inlineContainer]}>
              <TextField
                placeholder="City"
                keyboardType="default"
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                value={city}
                onValueChange={setCity}
                containerStyle={[styles.containerStyle, {
                  paddingTop: 5,
                  width: windowWidth / 2.3
                }]}
              />
              <Picker
                mode="dialog"
                selectedValue={statePickerSelectedValue}
                style={[styles.containerStyle, styles.inputStyle, {
                  paddingTop: 5,
                  width: windowWidth / 2.3
                }]}
                itemStyle={styles.inputStyle}
                onValueChange={(itemValue, itemIndex) =>
                  setStatePickerSelectedValue(itemValue)
                }
              >
                {
                  country.states.map(state => 
                    <Picker.Item key={state.id} label={state.name} value={state.id} />  
                  )
                }
              </Picker>
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
            <View style={[checkoutStyles.rowContainer, globalStyles.mt24]}>
              <CheckR size={16} style={styles.iconStyle} />
              <Text style={globalStyles.latoRegular14}>Default Address</Text>
            </View>
          </View>
          
          <CheckoutDetailsCard title="Order Total" />

        </ScrollView>
        
        <ActionButtonFooter
          title="Save Address & Continue"
          onPress={handleUpdateCheckout}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  country: state.checkout.country,
  countriesList: state.checkout.countriesList,
  saving: state.checkout.saving
})

export default connect(mapStateToProps)(ShippingAddressScreen)