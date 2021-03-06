import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import UserList from '../../components/users';
import UserDetails from '../../components/users/ActiveUser';
import styles from "../../styles/styles";


class LCL extends Component {
   
state = {
  term: '',
  term2: ''
};

  render() {
    //const {goBack} = this.props.navigation;
 
    return (
        <Container>

              {/* <ImageBackground source={launchscreenBg} style={styles.imageContainer}>  */}
            <Header style={styles.MainContainer} hasTabs>
                <Left/>

                <Body>
                    <Title style={styles.title_font}>LCL</Title>
                </Body>

                <Right />
            </Header>
        
            <Segment>
                <Button first active>
                    <Text>Active</Text>
                </Button>
                
                <Button>
                    <Text>completed</Text>
                </Button>
            </Segment>

        <Content padder>
        <Text>
            This is the LCL shipments
        </Text>

        <Button transparent
                onPress={() => this.props.navigation.navigate("Home")}>
                <Icon name="md-home" />
                </Button>


            <UserList />

            <UserDetails selectedItem={this.props.selectedItem}/> 
        </Content>

            <Footer_Nav navigation={this.props.navigation}/>
        </Container>
        );
    }
}

export default LCL