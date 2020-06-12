import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const Menu = (props) => {
    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: require('./images/uthappizza.png') }} //supply image
                onPress={()=> props.onPress(item.id)}
            />
        )
    }

    return (
        <FlatList
            data={props.dishes} //array of objects
            renderItem={renderMenuItem} // render function
            keyExtractor={item => item.id.toString()} //key is a string here
        />
    )
}

export default Menu