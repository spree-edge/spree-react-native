import * as React from 'react'
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Divider, Input, Button, Overlay } from 'react-native-elements'
import { globalStyles } from '../../../../../styles/global'
import { colors } from '../../../../../res/palette'
import Collapsible from 'react-native-collapsible'
import { CheckR, Close, Dollar, CreditCard, ChevronDown, ChevronUp, CheckO } from '../../../../../library/icons'
import { styles } from './styles'

const PaymentScreen = ({ navigation }) => {
  
  const [expanded, setExpanded] = React.useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const [accordionExpanded2, setAccordionExpanded2] = React.useState(false);
  const toggleAccordionExpanded2 = () => setAccordionExpanded2(!accordionExpanded2);

  const [cardNumberInputBorder, setCardNumberInputBorder] = React.useState(false)
  const [cardNameInputBorder, setCardNameInputBorder] = React.useState(false)
  const [validThruInputBorder, setValidThruInputBorder] = React.useState(false)
  const [cvvInputBorder, setCvvInputBorder] = React.useState(false)

  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View style={ globalStyles.containerFluid }>
      <ScrollView>
        {/* Status Bar Starts */}
        <View style={[globalStyles.containerFluid, globalStyles.bgWhite, {borderBottomWidth: 1, borderColor: '#ccc' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.success}]} />
              <Text style={ globalStyles.latoRegular, {color: colors.success}}>Bag</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: colors.success,
                marginBottom: 10,
                marginHorizontal: 10
              }}
            />
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.success}]} />
              <Text style={ globalStyles.latoRegular, {color: colors.success}}>Address</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: colors.success,
                marginBottom: 10,
                marginHorizontal: 10
              }}
            />
            <View style={[ styles.rowContainer, { alignItems: 'center'} ]}>
              <CheckO size={16} style={[styles.iconStyle, {color: colors.black}]} />
              <Text style={ globalStyles.latoRegular }>Payment</Text>
            </View>
          </View>
        </View>
        {/* Status Bar Ends */}

        <View style={[globalStyles.containerFluid, globalStyles.bgWhite, globalStyles.mt16]}>
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <Text style={globalStyles.subhead}>Payment Type</Text>
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
            <Input
              placeholder="Card Number" 
              keyboardType="default"
              onFocus={() => setCardNumberInputBorder(true)}
              onBlur={() => setCardNumberInputBorder(false)}
              containerStyle={[ styles.containerStyle, {
                borderColor: cardNumberInputBorder ? colors.primary : '#ccc',
                borderWidth: 1
              }]}
              inputStyle={globalStyles.latoRegular}
              inputContainerStyle={{ borderBottomColor: '#fff'}}
              rightIcon={() => <CreditCard size={18} style={{color: colors.black}} />}
            />
            <Input
              placeholder="Name on Card" 
              keyboardType="default"
              onFocus={() => setCardNameInputBorder(true)}
              onBlur={() => setCardNameInputBorder(false)}
              containerStyle={[styles.containerStyle, {
                borderColor: cardNameInputBorder ? colors.primary : '#ccc',
                borderWidth: 1
              }]}
              inputStyle={[globalStyles.latoRegular, { marginTop: 5 }]}
              inputContainerStyle={{ borderBottomColor: '#fff'}}
            />
            <View style={[styles.rowContainer, styles.inlineContainer]}> 
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

        <View style={styles.orderTotalContainer}>
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <Text style={[ styles.titleMedium]}>Order Total</Text>
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={[ globalStyles.container, globalStyles.mt8 ]}>
            <View style={[ styles.orderDetailsRow, globalStyles.mt8 ]}>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>Subtotal</Text>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>$50.00</Text>
            </View>
            <View style={[ styles.orderDetailsRow, globalStyles.mt8 ]}>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>Promo Discount</Text>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>-$3.40</Text>
            </View>
            <View style={[ styles.orderDetailsRow, globalStyles.mt8 ]}>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>Estimated Tax</Text>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>$2.40</Text>
            </View>
            <View style={[ styles.orderDetailsRow, globalStyles.mt8 ]}>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>Shipping Fee</Text>
              <Text style={[ globalStyles.label, styles.productDetailsText]}>$0.00</Text>
            </View>
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={[ globalStyles.container, globalStyles.mt8, styles.rowContainer, {justifyContent: 'space-between'} ]}>
            <Text style={ styles.productDetailsText }>Total Amount</Text>
            <Text style={ styles.productDetailsText }>$49.60</Text>
          </View>
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Payment & Confirm"
          type="solid"
          titleStyle={globalStyles.latoRegular, globalStyles.display3}
          // containerStyle={{flex: 1}}
          buttonStyle={[ globalStyles.btn, globalStyles.primary, styles.btnFixed ]}
          onPress={toggleOverlay}
        />
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
      </View>
    </View>
  )
}

export default PaymentScreen