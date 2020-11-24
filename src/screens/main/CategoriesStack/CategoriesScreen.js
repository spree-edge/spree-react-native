import * as React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ChevronDown, ChevronUp } from '../../../library/icons'
import { colors } from '../../../res/palette'
import { List } from 'react-native-paper'
import { styles } from './styles'
import { getTaxonsList } from '../../../redux'
import { connect } from 'react-redux'
import ActivityIndicatorCard from '../../../library/components/ActivityIndicatorCard'

const CategoriesScreen = ({ navigation, dispatch, taxonomy, saving }) => {

  const [colorsList] = React.useState([
    '#ececec',
    '#fab7bf',
    '#fadabe',
    '#c6e3ec',
    "rgba(165, 168, 228, 0.58)",
    '#c6e3ec',
    "rgba(215, 171, 98, 0.5)",
    "rgba(145, 225, 212, 0.54)"
  ])

  const handleDisplayTaxon = ({ title, id }) => {
    navigation.navigate('ProductsList', {title: title, id: id})
  }

  React.useEffect(() => {
    dispatch(getTaxonsList())
  }, [])

  if(saving) {
    return (
      <ActivityIndicatorCard />
    )
  } else
  return (
    <ScrollView>
      <View style={styles.rowContainer}>
        <View style={[styles.accordionItem, {backgroundColor: '#d7e5cc'}]}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.accordionLevel1Title}>NEW IN</Text>
            <ChevronDown size={24} style={{color: colors.black}}/>
          </View>
          <Text style={styles.accordionLevel1Description}>Upgrade Your Closet</Text>
        </View>
        <View style={[styles.accordionItem, {backgroundColor: '#d7e5cc'}]}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.accordionLevel1Title}>ON SALE</Text>
            <ChevronDown size={24} style={{color: colors.black}}/>
          </View>
          <Text style={styles.accordionLevel1Description}>We Can’t Get Enough</Text>
        </View>
      </View>
      {
        taxonomy.children.map((taxonLevel1, index) => {
          return (
            <List.Accordion
              key={taxonLevel1.id}
              title={taxonLevel1.name}
              description="Spruce Up Your Look"
              titleStyle={styles.accordionLevel1Title}
              descriptionStyle={styles.accordionLevel1Description}
              style={[styles.accordionLevel1, {backgroundColor: colorsList[index]}]}
            >
              {
                taxonLevel1.children.map(taxonLevel2 => {
                  return (
                    <List.Item
                      key={taxonLevel2.id}
                      title={taxonLevel2.name}
                      titleStyle={styles.listItemTitle}
                      style={styles.listItem}
                      onPress={() => handleDisplayTaxon({ title: taxonLevel2.name, id: taxonLevel2.id})}
                    />
                  )
                })
              }
            </List.Accordion>
          )
        }
      )}
    </ScrollView>
  )
}

const mapStateToProps = state => ({
  taxonomy: state.taxons.taxonsList[0],
  saving: state.taxons.saving,
})

export default connect(mapStateToProps)(CategoriesScreen)