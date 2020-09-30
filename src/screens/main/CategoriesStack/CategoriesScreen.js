import * as React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { ChevronDown, ChevronUp } from '../../../library/icons'
import { colors } from '../../../res/palette'
import { List } from 'react-native-paper'
import { styles } from './styles'
import { globalStyles } from '../../../styles/global'
import Collapsible from 'react-native-collapsible'

const CategoriesScreen = () => {
  const [accordionMenExpanded, setAccordionMenExpanded] = React.useState(false);
  const toggleAccordionMenExpanded = () => setAccordionMenExpanded(!accordionMenExpanded);

  return (
    <ScrollView>
      <View>
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

        {/* Code for Single Collapsible Start */}
        {/* <TouchableOpacity style={[globalStyles.containerFluid, styles.accordionLevel1, {backgroundColor: '#ececec'}]} onPress={toggleAccordionMenExpanded}>
          <View style={styles.accordionSelectorContainer}>
            <View style={styles.accordionLevel1TitleNew}>
              <Text style={styles.accordionLevel1Title}>MEN  </Text>
              {
                accordionMenExpanded
                ? <ChevronDown size={16} style={{color: colors.black}} />
                : <ChevronUp size={16} style={{color: colors.black}} />
              }
            </View>
            <Text style={styles.accordionLevel1Description}>Spruce Up Your Look</Text>
          </View>
        </TouchableOpacity> */}
        {/* Content of Single Collapsible */}
        {/* <Collapsible collapsed={accordionMenExpanded} align="center">
          <View style={[styles.accordionLevel2Style, {backgroundColor: '#fff'}]}>
            <View style={styles.accordionLevel1TitleNew}>
              <Text style={styles.accordionLevel1Title}>MEN  </Text>
              {
                accordionMenExpanded
                ? <ChevronDown size={16} style={{color: colors.black}} />
                : <ChevronUp size={16} style={{color: colors.black}} />
              }
            </View>
          </View>
        </Collapsible> */}
        {/* Code for Single Collapsible Ends */}

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