import * as React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../../../../../styles/global'
import { Divider, Input, Button, } from 'react-native-elements'
import { colors } from '../../../../../res/palette'
import { CheckR, CheckO } from '../../../../../library/icons'
import TextField from '../../../../../library/components/TextField'
import { Picker } from '@react-native-community/picker'
import { defaultCountry } from '../../../../../redux/actions/checkoutActions'
import { connect } from 'react-redux'
import { styles } from './styles'

const ShippingAddressScreen = ({ navigation, dispatch, defaultCountryStateList }) => {
  const [statePickerSelectedValue, setStatePickerSelectedValue] = React.useState('Set API Default State')
  const [pickerCountrySelectedValue, setPickerCountrySelectedValue] = React.useState('Set API Default Country')
  const [defaultStates, setDefaultStates] = React.useState([])
  // console.log(defaultCountryStateList)
  // setStatePickerSelectedValue(defaultCountryStateList.states[0].id)

  React.useEffect(() => {
    dispatch(defaultCountry())
    setDefaultStates(getDefaultStates())
    // console.log(defaultStates)
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <View style={ globalStyles.containerFluid }>
      <ScrollView>
        {/* Status Bar Starts */}
        <View style={styles.statusBarWrapper}>
          <View style={styles.statusBarContainer}>
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.success}]} />
              <Text style={ globalStyles.latoRegular, {color: colors.success}}>Bag</Text>
            </View>
            <View
              style={[styles.shippingIndicatorLine, {
                borderBottomColor: colors.success,
              }]}
            />
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.black}]} />
              <Text style={ globalStyles.latoRegular }>Address</Text>
            </View>
            <View
              style={[styles.shippingIndicatorLine, {
                borderBottomColor: colors.black,
              }]}
            />
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.black}]} />
              <Text style={ globalStyles.latoRegular }>Payment</Text>
            </View>
          </View>
        </View>
        {/* Status Bar Ends */}
        <View style={globalStyles.container}>
          {/* <TextField
            placeholder=" Enter PIN Code"
            containerStyle={styles.inputWrapperStyle}
            rightElement={<Text style={styles.inputRight}>Check</Text>}
            onChangeText={setPincode}
            value={pincode}
          /> */}
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
          <View style={[styles.rowContainer, styles.inlineContainer]}>
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
              }>
              {
                defaultCountryStateList.states.map(state => 
                  <Picker.Item key={state.id} label={state.id} value={state.type} />  
                )
              }
              {/* {
                defaultStates.map(state => 
                  <Picker.Item key={state.id} label={state.name} value={state.state_code} />  
                )
              } */}
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
            selectedValue={statePickerSelectedValue}
            style={styles.containerStyle}
            itemStyle={styles.inputStyle}
            onValueChange={(itemValue, itemIndex) =>
              setPickerCountrySelectedValue(itemValue)
            }>
            <Picker.Item label={pickerCountrySelectedValue} value={pickerCountrySelectedValue} />
            {
              defaultCountryStateList.states.map(state => 
                <Picker.Item key={state.id} label={state.id} value={state.type} />  
              )
            }
            {/* {
              defaultStates.map(state => 
                <Picker.Item key={state.id} label={state.name} value={state.state_code} />  
              )
            } */}
          </Picker>
          {/* <TextField
            placeholder="Country"
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
          /> */}
          <View style={[styles.rowContainer, globalStyles.mt24]}>
            <CheckR size={16} style={styles.iconStyle} />
            <Text style={globalStyles.latoRegular14}>Default Address</Text>
          </View>
        </View>
        {/* Order Total Container Starts */}
        <View style={styles.orderTotalContainer}>
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <Text style={ globalStyles.latoBold14 }>Order Total</Text>
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <View style={styles.orderDetailsRow}>
              <Text style={styles.orderTotalDetailsText}>Subtotal</Text>
              <Text style={styles.orderTotalDetailsText}>$50.00</Text>
            </View>
            <View style={styles.orderDetailsRow}>
              <Text style={styles.orderTotalDetailsText}>Promo Discount</Text>
              <Text style={styles.orderTotalDetailsText}>-$3.40</Text>
            </View>
            <View style={styles.orderDetailsRow}>
              <Text style={styles.orderTotalDetailsText}>Estimated Tax</Text>
              <Text style={styles.orderTotalDetailsText}>$2.40</Text>
            </View>
            <View style={styles.orderDetailsRow}>
              <Text style={styles.orderTotalDetailsText}>Shipping Fee</Text>
              <Text style={styles.orderTotalDetailsText}>$0.00</Text>
            </View>
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={ styles.orderTotalAmountContainer }>
            <Text style={ styles.productDetailsText }>Total Amount</Text>
            <Text style={ styles.productDetailsText }>$49.60</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Save Address & Continue"
          type="solid"
          // containerStyle={{flex: 1}}
          buttonStyle={ styles.footerAction }
          titleStyle={ globalStyles.latoBold16 }
          onPress={() => navigation.navigate('CheckoutPayment')}
        />
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  defaultCountryStateList: state.checkout.country
})

export default connect(mapStateToProps)(ShippingAddressScreen)

const getDefaultStates = () => ([
  {
    "id": 3339,
    "name": "Alabama",
    "state_code": "AL"
  },
  {
      "id": 3340,
      "name": "Alaska",
      "state_code": "AK"
  },
  {
      "id": 3341,
      "name": "American Samoa",
      "state_code": "AS"
  },
  {
      "id": 3341,
      "name": "Arizona",
      "state_code": "AZ"
  },
  {
      "id": 3342,
      "name": "Arkansas",
      "state_code": "AR"
  },
  {
      "id": 3343,
      "name": "Baker Island",
      "state_code": "UM-81"
  },
  {
      "id": 3344,
      "name": "California",
      "state_code": "CA"
  },
  {
      "id": 3345,
      "name": "Colorado",
      "state_code": "CO"
  },
  {
      "id": 3346,
      "name": "Connecticut",
      "state_code": "CT"
  },
  {
      "id": 3347,
      "name": "Delaware",
      "state_code": "DE"
  },
  {
      "id": 3348,
      "name": "District of Columbia",
      "state_code": "DC"
  },
  {
      "id": 3349,
      "name": "Florida",
      "state_code": "FL"
  },
  {
      "id": 3350,
      "name": "Georgia",
      "state_code": "GA"
  },
  {
      "id": 3351,
      "name": "Guam",
      "state_code": "GU"
  },
  {
      "id": 3352,
      "name": "Hawaii",
      "state_code": "HI"
  },
  {
      "id": 3353,
      "name": "Howland Island",
      "state_code": "UM-84"
  },
  {
      "id": 3354,
      "name": "Idaho",
      "state_code": "ID"
  },
  {
      "id": 3355,
      "name": "Illinois",
      "state_code": "IL"
  },
  {
      "id": 3356,
      "name": "Indiana",
      "state_code": "IN"
  },
  {
      "id": 3357,
      "name": "Iowa",
      "state_code": "IA"
  },
  {
      "id": 3358,
      "name": "Jarvis Island",
      "state_code": "UM-86"
  },
  {
      "id": 3359,
      "name": "Johnston Atoll",
      "state_code": "UM-67"
  },
  {
      "id": 3360,
      "name": "Kansas",
      "state_code": "KS"
  },
  {
      "id": 3361,
      "name": "Kentucky",
      "state_code": "KY"
  },
  {
      "id": 3362,
      "name": "Kingman Reef",
      "state_code": "UM-89"
  },
  {
      "id": 3363,
      "name": "Louisiana",
      "state_code": "LA"
  },
  {
      "id": 3364,
      "name": "Maine",
      "state_code": "ME"
  },
  {
      "id": 3365,
      "name": "Maryland",
      "state_code": "MD"
  },
  {
      "id": 3366,
      "name": "Massachusetts",
      "state_code": "MA"
  },
  {
      "id": 3367,
      "name": "Michigan",
      "state_code": "MI"
  },
  {
      "id": 3368,
      "name": "Midway Atoll",
      "state_code": "UM-71"
  },
  {
      "id": 3369,
      "name": "Minnesota",
      "state_code": "MN"
  },
  {
      "id": 3370,
      "name": "Mississippi",
      "state_code": "MS"
  },
  {
      "id": 3371,
      "name": "Missouri",
      "state_code": "MO"
  },
  {
      "id": 3372,
      "name": "Montana",
      "state_code": "MT"
  },
  {
      "id": 3373,
      "name": "Navassa Island",
      "state_code": "UM-76"
  },
  {
      "id": 3374,
      "name": "Nebraska",
      "state_code": "NE"
  },
  {
      "id": 3375,
      "name": "Nevada",
      "state_code": "NV"
  },
  {
      "id": 3376,
      "name": "New Hampshire",
      "state_code": "NH"
  },
  {
      "id": 3377,
      "name": "New Jersey",
      "state_code": "NJ"
  },
  {
      "id": 3378,
      "name": "New Mexico",
      "state_code": "NM"
  },
  {
      "id": 3379,
      "name": "New York",
      "state_code": "NY"
  },
  {
      "id": 3380,
      "name": "North Carolina",
      "state_code": "NC"
  },
  {
      "id": 3381,
      "name": "North Dakota",
      "state_code": "ND"
  },
  {
      "id": 3382,
      "name": "Northern Mariana Islands",
      "state_code": "MP"
  },
  {
      "id": 3383,
      "name": "Ohio",
      "state_code": "OH"
  },
  {
      "id": 3384,
      "name": "Oklahoma",
      "state_code": "OK"
  },
  {
      "id": 3385,
      "name": "Oregon",
      "state_code": "OR"
  },
  {
      "id": 3386,
      "name": "Palmyra Atoll",
      "state_code": "UM-95"
  },
  {
      "id": 3387,
      "name": "Pennsylvania",
      "state_code": "PA"
  },
  {
      "id": 3388,
      "name": "Puerto Rico",
      "state_code": "PR"
  },
  {
      "id": 3389,
      "name": "Rhode Island",
      "state_code": "RI"
  },
  {
      "id": 3390,
      "name": "South Carolina",
      "state_code": "SC"
  },
  {
      "id": 3391,
      "name": "South Dakota",
      "state_code": "SD"
  },
  {
      "id": 3392,
      "name": "Tennessee",
      "state_code": "TN"
  },
  {
      "id": 3393,
      "name": "Texas",
      "state_code": "TX"
  },
  {
      "id": 3394,
      "name": "United States Minor Outlying Islands",
      "state_code": "UM"
  },
  {
      "id": 3395,
      "name": "United States Virgin Islands",
      "state_code": "VI"
  },
  {
      "id": 3396,
      "name": "Utah",
      "state_code": "UT"
  },
  {
      "id": 3397,
      "name": "Vermont",
      "state_code": "VT"
  },
  {
      "id": 3398,
      "name": "Virginia",
      "state_code": "VA"
  },
  {
      "id": 3399,
      "name": "Wake Island",
      "state_code": "UM-79"
  },
  {
      "id": 3400,
      "name": "Washington",
      "state_code": "WA"
  },
  {
      "id": 3401,
      "name": "West Virginia",
      "state_code": "WV"
  },
  {
      "id": 3402,
      "name": "Wisconsin",
      "state_code": "WI"
  },
  {
      "id": 3403,
      "name": "Wyoming",
      "state_code": "WY"
  }
])