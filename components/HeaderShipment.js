import React, { Component } from "react";
import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput } from "react-native";

class Header_A extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (

          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>{params.headerText}</Title>
              <Subtitle>Subtitle</Subtitle>

            </Body>
            <Right />
          </Header>

        );
      }
    }
  export default Header_A;