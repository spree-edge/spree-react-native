import * as React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { Divider, Input, Button } from 'react-native-elements'
import { colors } from '../../../res/palette'
import { CheckR } from '../../../library/icons'

const ShoppingAddressScreen = ({ navigation }) => {

  return (
    <View style={ globalStyles.containerFluid }>
      <ScrollView>
        <View style={globalStyles.container}>
          <Input
            placeholder="Name" 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            placeholder="Email" 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            placeholder="Phone No." 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            placeholder="Pin Code" 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <Input
            placeholder="Address ( House No, Street, Area )" 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <View style={[styles.rowContainer, styles.inlineContainer]}>
            <Input
              placeholder="City" 
              keyboardType="default"
              containerStyle={[styles.containerStyle, styles.w48]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <Input
              placeholder="State" 
              keyboardType="default"
              containerStyle={[styles.containerStyle, styles.w48]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
          </View>
          <Input
            placeholder="Country" 
            keyboardType="default"
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <View style={[styles.rowContainer, globalStyles.mt16]}>
            <CheckR size={16} style={styles.iconStyle} />
            <Text style={[styles.label]}>Default Address</Text>
          </View>
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
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Proceed to Checkout"
          type="solid"
          // containerStyle={{flex: 1}}
          buttonStyle={[ globalStyles.btn, globalStyles.primary, styles.btnFixed ]}
          onPress={() => navigation.navigate('CheckoutPayment')}
        />
      </View>
    </View>
  )
}

export default ShoppingAddressScreen

const styles = StyleSheet.create({
  inputStyle: { 
    ...globalStyles.latoRegular,
    fontSize: 14, color: colors.gray
  },
  inputContainerStyle: {
    paddingTop: 5,
    paddingLeft: 5,
    borderBottomColor: '#fff'
  },
  containerStyle: {
    ...globalStyles.mt16,
    backgroundColor: '#fff', 
    height: 52, 
    borderRadius: 4,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  w48: {
    width: '48%',
  },
  inlineContainer: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    // borderWidth: 2
  },
  iconStyle: {
    color: colors.primary,
    marginRight: 8
  },
  label: {
    ...globalStyles.descriptionText,
    color: colors.black
  },
  titleMedium: {
    ...globalStyles.descriptiveItem,
    ...globalStyles.textDark,
  },
  btnFixed: {
    margin: '2%',
    height: 48,
  },
  footer: {
    backgroundColor: colors.white,
    // borderWidth: 1
  },
  orderTotalContainer: {
    ...globalStyles.containerFluid,
    ...globalStyles.bgWhite,
    ...globalStyles.mt16,
    paddingBottom: 32
  },
  orderDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1
  },
  dividerStyle: {
    ...globalStyles.mt8,
    backgroundColor: '#f5f5f5'
  },
})