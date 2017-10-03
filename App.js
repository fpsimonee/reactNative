import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,  
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Style from './Style';


class ReactCalculator extends Component {

    render() {
        return (
            <View style={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.headerText}>- NOTER -</Text>                   
                </View> 
               <ScrollView style={Styles.scrollContainer} />
               <View style={Style.footer}>
                    <TouchableOpacity style={Style.addButton}>
                    <Text style={Style.addButtonText}>+</Text>   
                    </TouchableOpacity>      
                    <TextInput style={Style.textInput}  
                        placeholder='> note'
                        placeholderTextColor='white'
                    />     
                    
                </View> 
            </View>
        )
    }
}



AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator)