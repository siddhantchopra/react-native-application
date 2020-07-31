import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { LEADERS } from '../shared/leaders'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leaders: LEADERS
        }
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderLeaderItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/alberto.png') }} //supply image
                />
            )
        }
        return (
            <ScrollView>
                <Card
                    title="Our History"
                >
                    <Text style={styles.myState}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>

                    <Text style={styles.myState}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </Card>

                <Card
                title="Coporate Leadership"
                >
                <FlatList
                data={this.state.leaders} //array of objects
                renderItem={renderLeaderItem} // render function
                keyExtractor={item => item.id.toString()} //key is a string here
            />
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    myState: {
        marginTop: 10,
        fontWeight: 'bold',
    }
})

export default About