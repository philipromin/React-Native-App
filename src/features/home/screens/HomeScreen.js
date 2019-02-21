import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    render(){
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
           
        );
    }; 
};

const mapStateToProps = ( state ) => {
    
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
