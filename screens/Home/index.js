import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import My_Carditem from "../../components/Carditem";

//import LCL_Card_List from '../../actions';

import styles from "../../styles/styles";
const launchscreenBg = require("../../../assets/img/background.jpg");


class Home extends Component {
   
 

state = {
  term: '',
  term2: ''
};


  render() {
    const {goBack} = this.props.navigation;

    return ( 

      <Container>
               {/* <ImageBackground source={launchscreenBg} style={{flex: 1, width: null, height: null,}}>  */}
        <Header style={styles.MainContainer}  hasSegment>  
          <Left> 
          <Button
          transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          <Icon style={styles.title_font} name="menu" />
        </Button>
          </Left>
          <Body>
            <Title style={styles.title_font}>Home</Title>
          </Body>
          <Right />

        </Header>
          <Segment>
            <Button onPress={() => this.props.navigation.navigate("Home")} first active>
              <Text>Active</Text> 
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Home_Completed")}>
              <Text>Completed</Text>
            </Button>
          </Segment>
        <Content padder>
 
       

               <My_Carditem navigation={this.props.navigation}/>

               <My_Carditem navigation={this.props.navigation}/>

               <My_Carditem navigation={this.props.navigation}/>
 

       
         </Content>

       <Footer_Nav navigation={this.props.navigation}/>
       
       
      {/* </ImageBackground> */}
      </Container>
    );
  }
}

export default Home;
