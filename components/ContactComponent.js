import React, { Component } from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

class Contact extends Component{

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return(
            <View>
                <Card
                title="Contact Information"
                >
                    <Text style={styles.myState}>Our Address</Text>
                <Text style={styles.myState}>121, Clear Water Bay Road</Text>
                <Text style={styles.myState}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.myState}>HONG KONG</Text>
                <Text style={styles.myState}>Tel: +852 1234 5678</Text>
                <Text style={styles.myState}>Fax: +852 8765 4321</Text>
                <Text style={styles.myState}>Email:confusion@food.net</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    myState: {
       marginTop: 10,
       fontWeight: 'bold',      
    }
 })

export default Contact