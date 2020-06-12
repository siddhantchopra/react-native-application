import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import {DISHES} from '../shared/dishes'

class Menu extends Component {

    constructor(props){
        super(props)
        this.state={
            dishes: DISHES
        }
    }

    static navigationOptions = {
        title: 'Menu'
    }

    render() {

     const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/uthappizza.png') }} //supply image
                    onPress={()=> navigate('DishDetail',{dishId: item.id})}
                />
            )
        }

        const {navigate} = this.props.navigation

        return (
            <FlatList
                data={this.state.dishes} //array of objects
                renderItem={renderMenuItem} // render function
                keyExtractor={item => item.id.toString()} //key is a string here
            />
        )
    }
}

export default Menu