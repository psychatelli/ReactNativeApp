import React, { Component } from "react";
import { connect } from 'react-redux';
import { TouchableHighlight, Text, View } from 'react-native';
import { selectUser } from '../../actions';
import { bindActionCreators } from 'redux';



class UserDetails extends Component {
 
    render() {
        
        return (

        <View> 
            <Text style={{fontSize: 20, margin: 10}}>First: {this.props.user.first} </Text>
            <Text style={{fontSize: 15, margin: 10}}>Last: {this.props.user.last} </Text>
        </View>
        );
    }
}


function mapStateToProps(state) {
    return { 
        user: state.activeUser
        
    };
}


export default connect(mapStateToProps )(UserDetails);
