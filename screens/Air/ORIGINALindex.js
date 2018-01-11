import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import Segment_Nav from "../../components/segment_nav";
import styles from "../../styles/styles"; 


class Air extends Component {
   
 

state = {
  term: '',
  term2: ''
};

  render() {
    const {goBack} = this.props.navigation;
 
    return (
        <Container>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header style={styles.MainContainer} hasTabs>
                <Left/>
                <Body>
                    <Title style={styles.title_font}>Air</Title>
                </Body>

                <Right />
            </Header>
        
        <Segment_Nav  navigation={this.props.navigation}/>
        

        <Content padder>
        <Text>
            This is the Air shipments
        </Text>

        </Content>

            <Footer_Nav navigation={this.props.navigation}/>
        </Container>
        );
    }
}

export default Air;