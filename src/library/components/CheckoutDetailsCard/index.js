import * as React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { styles } from './styles'
import { Divider } from 'react-native-elements'

const CheckoutDetailsCard = ({ title, display_total }) => {
  return (
    <View style={styles.orderTotalContainer}>
      <View style={[ globalStyles.container, globalStyles.mt8 ]}>
        <Text style={ globalStyles.latoBold14 }>{title}</Text>
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
        <Text style={ globalStyles.latoBold14 }>Total Amount</Text>
        <Text style={ globalStyles.latoBold14 }>{display_total || '$51.4'}</Text>
      </View>
    </View>
  )
}

export default CheckoutDetailsCard