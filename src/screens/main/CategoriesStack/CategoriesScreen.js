import * as React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { ChevronDown } from '../../../library/icons'
import { colors } from '../../../res/palette'
import { List } from 'react-native-paper'

const CategoryMenu = ({ headline, subheading }) => {
  return (
    <View style={styles.menuContainer}>
      <View>
        <Text>{headline}</Text>
        <ChevronDown size={24} style={{color: colors.black}}/>
      </View>
      <Text>{subheading}</Text>
    </View>
  )
}

const CategoriesScreen = () => {
  // const [expanded, setExpanded] = React.useState(true);

  // const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView>
      <View>
        <List.Section>
          <List.Accordion
            title="MEN"
            description="Spruce Up Your Look"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: '#ececec'}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>

          <List.Accordion
            title="WOMEN"
            description="Spruce Up Your Look"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: '#fab7bf'}]}
          >
            <List.Accordion
              title="Indianwear"
              titleStyle={styles.accordionLevel2TitleStyle}
              style={[styles.accordionLevel2Style, {backgroundColor: '#fff'}]}
            >
              <List.Item title="First Item" 
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Second Item"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
            </List.Accordion>
            <List.Accordion
              title="Westernwear"
              titleStyle={styles.accordionLevel2TitleStyle}
              style={[styles.accordionLevel2Style, {backgroundColor: '#fff'}]}
            >
              <List.Item title="First Item" 
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Second Item"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
            </List.Accordion>
            <List.Accordion
              title="Footwear"
              titleStyle={styles.accordionLevel2TitleStyle}
              style={[styles.accordionLevel2Style, {backgroundColor: '#fff'}]}
            >
              <List.Item title="Flats & Heels" 
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Casual Shoes"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Sports Shoes"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Flip Flops"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
              <List.Item title="Sports Sandals"
                style={styles.listItem}
                titleStyle={styles.listItemTitle}
              />
            </List.Accordion>
          </List.Accordion>

          <List.Accordion
            title="KIDS"
            description="What Every Li’I Wardrobe Needs"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: '#fadabe'}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>

          <List.Accordion
            title="ESSENTIALS"
            description="Masks, Sanitizers & More"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: '#c6e3ec'}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>

          <List.Accordion
            title="HOME"
            description="Your Sofa-To-Fridge Look"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: "rgba(165, 168, 228, 0.58)"}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>

          <List.Accordion
            title="BEAUTY & CARE"
            description="Cos Skin-Vest-Ment Is Important"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: "rgba(215, 171, 98, 0.5)"}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>

          <List.Accordion
            title="JEWELLERY"
            description="Styles Like No Other"
            titleStyle={styles.accordionLevel1Title}
            descriptionStyle={styles.accordionLevel1Description}
            style={[styles.accordionLevel1, {backgroundColor: "rgba(145, 225, 212, 0.54)"}]}
          >
            <List.Item title="First item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
            <List.Item title="Second item"
              style={styles.listItem}
              titleStyle={styles.listItemTitle}
            />
          </List.Accordion>
        </List.Section>
        {/* <CategoryMenu headline="MEN" subheading="Spruce Up Your Look" /> */}
        {/* <Text>CategoriesScreen</Text> */}
      </View>
    </ScrollView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    width: '93.6%',
    alignSelf: 'center'
  },
  accordionLevel1: {
    // borderWidth: 2,
    height: 93,
    marginTop: 2
  },
  accordionLevel2Style: {
    marginBottom: 1
    // borderWidth: 2,
    // height: 93
  },
  accordionLevel1Title: {
    fontFamily: "lato-bold",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    color: "#222222",
    // borderWidth: 2,
    marginTop: 5
  },
  accordionLevel1Description: {
    opacity: 0.7,
    fontFamily: "lato-regular",
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#222222"
  },
  accordionLevel2TitleStyle: {
    fontFamily: "lato-regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: "#9B9B9B"
  },
  listItemTitle: {
    fontFamily: "lato-regular",
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#222222"
  },
  listItem: {
    backgroundColor: '#f5f5f5',
    marginLeft: 10
  }
})