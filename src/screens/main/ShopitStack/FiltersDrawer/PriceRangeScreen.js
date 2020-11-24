import * as React from 'react'
import { Animated, StyleSheet, View, Text } from 'react-native'
import { Slider, Icon, Button } from 'react-native-elements'
import { globalStyles } from '../../../../styles/global'
import { setMinimumPriceRange, setMaximumPriceRange } from '../../../../redux'
import { connect } from 'react-redux'

function PriceRange({ navigation, dispatch, priceRange }) {
  const [priceRangeFrom, setPriceRangeFrom] = React.useState(20)
  const [priceRangeTo, setPriceRangeTo] = React.useState(100)
  
  React.useEffect(() => {
    setPriceRangeFrom(priceRange.minimum)
    setPriceRangeTo(priceRange.maximum)
  }, [])

  return (
    <View style={[globalStyles.container,{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }]}>
      <Slider
        value={priceRangeFrom}
        onValueChange={priceRangeFrom => setPriceRangeFrom(priceRangeFrom)}
        minimumValue={20}
        maximumValue={40}
        step={1}
        onSlidingComplete={text => dispatch(setMinimumPriceRange(text))}
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="dollar"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="gold"
            />
          ),
        }}
      />
      <Text style={{alignSelf: 'center', marginBottom: 10}}>From: {priceRangeFrom}</Text>

      <Slider
        value={priceRangeTo}
        onValueChange={priceRangeTo => setPriceRangeTo(priceRangeTo)}
        minimumValue={40}
        maximumValue={100}
        step={1}
        onSlidingComplete={text => dispatch(setMaximumPriceRange(text))}
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="dollar"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="gold"
            />
          ),
        }}
      />
      <Text style={{alignSelf: 'center'}}>To: {priceRangeTo}</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  priceRange: state.products.params.priceRange
})

export default connect(mapStateToProps)(PriceRange)