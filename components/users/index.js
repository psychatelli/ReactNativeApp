// COMPONENTS > USERS > INDEX.JS
import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon, Container } from "native-base";
import styles from '../../styles/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../actions';

class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (    
                <View key={user.id}> 
                    <Button onPress={function(){return selectUser(user);}}>
                        <Text>{user.first} {user.last}</Text>
                        <Icon  style={styles.TextLight} name='arrow-forward' android="md-arrow-forward"/>
                    </Button>
                </View>
                );
            });
    }

    render() {
        return ( 
        <View>
            {this.createListItems()}

            <View> 
                <Text style={{fontSize: 20, margin: 10}}>First: {this.props.user.first} </Text>
                <Text style={{fontSize: 15, margin: 10}}>Last: {this.props.user.last} </Text>
                {/* THESE TEXT OBJECTS ARE NOT DISPLAYINT THE PROPS WHEN THE BUTTON ABOVE IS CLICK.  IT ONLY SHOWS 
                IN THE CONSOLE.  */}
            </View>

        </View>
            );
    }
}

    function mapStateToProps(state) {
        return {
            users: state.users,
            user: state.activeUser 
        };
    }
    
    function matchDispatchToProps(dispatch) {
        return bindActionCreators({ selectUser: selectUser }, dispatch)
    }
 
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
