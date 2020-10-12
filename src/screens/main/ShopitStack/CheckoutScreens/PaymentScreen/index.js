import * as React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { Divider, Input, Button, Overlay } from 'react-native-elements'
import { globalStyles } from '../../../../../styles/global'
import { colors } from '../../../../../res/palette'
import Collapsible from 'react-native-collapsible'
import { CheckR, Close, Dollar, CreditCard, ChevronDown, ChevronUp, CheckO } from '../../../../../library/icons'
import TextField from '../../../../../library/components/TextField'
import { styles } from './styles'
import { checkoutStyles } from '../styles'
import CheckoutDetailsCard from '../../../../../library/components/CheckoutDetailsCard'
import ActionButtonFooter from '../../../../../library/components/ActionButtonFooter'
import { getPaymentMethods } from '../../../../../redux'
import ActivityIndicatorCard from '../../../../../library/components/ActivityIndicatorCard'
import { connect } from 'react-redux'

const PaymentScreen = ({ navigation, dispatch, saving, paymentMethods }) => {
  const [cardNumber, setCardNumber] = React.useState('')
  const [nameOnCard, setNameOnCard] = React.useState('')

  const [expanded, setExpanded] = React.useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const [accordionExpanded2, setAccordionExpanded2] = React.useState(false);
  const toggleAccordionExpanded2 = () => setAccordionExpanded2(!accordionExpanded2);

  const [validThruInputBorder, setValidThruInputBorder] = React.useState(false)
  const [cvvInputBorder, setCvvInputBorder] = React.useState(false)

  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  // console.log(saving, paymentMethods)
  
  React.useEffect(() => {
    dispatch(getPaymentMethods())
  }, [])

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <View style={ globalStyles.containerFluid }>
      <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay} fullScreen={true}>
        <View style={[globalStyles.container, styles.modalContainer]}>
          <View style={styles.modalCloseIcon}>
            <Close size={24}  style={{color: colors.black}} onPress={toggleOverlay} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../../../../assets/images/order-icon-confirm/order-icon-confirm.png')} />
            <Text style={globalStyles.title}>Order Success!</Text>
            <Text style={[globalStyles.label, { fontSize: 15, textAlign: 'center'}]}>Your order has been placed successfully! for more details check your account. </Text>
          </View>
          <View>
            <Button
              title="Continue Shopping"
              type="outline"
              buttonStyle={[ globalStyles.btn, styles.btnOutlined]}
              titleStyle={styles.titleStyle}
              onPress={() => navigation.navigate('Shopit')}
            />
          </View>
        </View>
      </Overlay>
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

        <View style={[globalStyles.containerFluid, globalStyles.bgWhite, globalStyles.mt16]}>
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <Text style={globalStyles.latoBold14}>Payment Type</Text>
          </View>
          <Divider style={styles.dividerStyle} />

          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity style={globalStyles.container} onPress={toggleExpanded}>
            <View style={styles.accordionSelectorContainer} onPress={toggleExpanded}>
              <Dollar size={16} style={{color: colors.black}} />
              <Text style={styles.accordionSelectorTitle}>Pay on Delivery</Text>
              {
                expanded
                ? <ChevronDown size={16} style={{color: colors.black}} />
                : <ChevronUp size={16} style={{color: colors.black}} />
              }
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={expanded} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                This is a dummy text of Single Collapsible View
              </Text>
            </View>
          </Collapsible>
          {/*Code for Single Collapsible Ends*/}

          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity style={globalStyles.container} onPress={toggleAccordionExpanded2}>
            <View style={styles.accordionSelectorContainer}>
              <CreditCard size={16} style={{color: colors.black}} />
              <Text style={styles.accordionSelectorTitle}>Credit/Debit Card</Text>
              {
                accordionExpanded2
                ? <ChevronDown size={16} style={{color: colors.black}} />
                : <ChevronUp size={16} style={{color: colors.black}} />
              }
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={accordionExpanded2} align="center" style={globalStyles.container}>
            <TextField
              placeholder="Card Number"
              containerStyle={checkoutStyles.inputWrapperStyle}
              rightElement={<CreditCard size={18} style={{color: colors.black}} />}
              onChangeText={setCardNumber}
              value={cardNumber}
            />
            <TextField
              placeholder="Name on Card"
              containerStyle={checkoutStyles.inputWrapperStyle}
              onChangeText={setNameOnCard}
              value={nameOnCard}
            />
            <View style={[styles.rowContainer, styles.inlineContainer]}> 
              {/* <TextField
                placeholder="Valid Thru (MM/YY)"
                containerStyle={{
                  backgroundColor: '#fff', 
                  height: 52, 
                  borderRadius: 4,
                  borderWidth: 1,
                  flex: 1
                }}
                onChangeText={setNameOnCard}
                value={nameOnCard}
              />
              <TextField
                placeholder="Valid Thru (MM/YY)"
                containerStyle={{
                  backgroundColor: '#fff', 
                  height: 52, 
                  borderRadius: 4,
                  borderWidth: 5,
                  flex: 1
                }}
              /> */}
              <Input
                placeholder="Valid Thru (MM/YY)" 
                keyboardType="default"
                onFocus={() => setValidThruInputBorder(true)}
                onBlur={() => setValidThruInputBorder(false)}
                containerStyle={[styles.containerStyle, styles.w48, {
                  borderWidth: 1,
                  borderColor: validThruInputBorder ? colors.primary : '#ccc',
                }]}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
              />
              <Input
                placeholder="CVV" 
                keyboardType="default"
                onFocus={() => setCvvInputBorder(true)}
                onBlur={() => setCvvInputBorder(false)}
                containerStyle={[styles.containerStyle, styles.w48, {
                  borderWidth: 1,
                  borderColor: cvvInputBorder ? colors.primary : '#ccc',
                }]}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
              />
            </View>
            <View style={[styles.rowContainer, globalStyles.mt16, globalStyles.mb16]}>
              <CheckR size={16} style={styles.iconStyle} />
              <Text style={[styles.label]}>Save Card</Text>
            </View>
          </Collapsible>
          {/*Code for Single Collapsible Ends*/}
        </View>
        
        <CheckoutDetailsCard title="Order Total" />

      </ScrollView>

      <ActionButtonFooter
        title="Payment & Confirm"
        onPress={toggleOverlay}
      />
      
    </View>
  )
}

const mapStateToProps = state => ({
  saving: state.checkout.saving,
  paymentMethods: state.checkout.paymentMethods
})

export default connect(mapStateToProps)(PaymentScreen)