import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles"; 


class Footer_Nav extends Component {

   


    render() {
     console.log("THIS IS MY FIRST APP!!");
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.navigation.navigate('LCL')}>
                    <Icon name="md-boat"/>
                    <Text>LCL</Text>
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate('FCL')}>
                    <Icon name="md-boat"/>
                    <Text>FCL</Text>
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate('Air')}>
                    <Icon name="md-plane"/>
                    <Text>Air</Text>
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate('Dom')}>
                    <Icon name="md-car"/>
                    <Text>Dom</Text>
                    </Button>

                    <Button onPress={() => this.props.navigation.navigate('Other')}>
                    <Icon name="md-code-working"/>
                    <Text>Other</Text>
                    </Button>
                </FooterTab> 
            </Footer>
        );
    }
}



export default Footer_Nav;