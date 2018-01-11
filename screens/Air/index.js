import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import Footer_Nav from "../../components/footer_nav";
import Segment_Nav from "../../components/segment_nav";
import styles from "../../styles/styles"; 

import LCL from "../LCL";
import FCL from "../FCL";
import Dom from "../Dom";
import Other from "../Other";

class Air extends Component {
   
    renderSelectedTab () {
        switch (this.state.selectedTab) {
          case 'LCL':
            return (<LCL />);
            break;
            default:
          case 'FCL':
            return (<FCL />);
            break;
          case 'AIR':
            return (<AIR />);
            break;
          case 'Dom':
            return (<Dom />);
            break;  
          case 'Other':
            return (<Other />);
            break;  
        
        }
      }

state = {
  term: '',
  term2: ''
};

  render() {
    // const {goBack} = this.props.navigation;
 
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
            {this.renderSelectedTab()}
          </Content>

          <Footer >
          <FooterTab>

            <Button active={this.state.selectedTab==='LCL'} 
               onPress={() => this.setState({selectedTab: 'LCL'})} >
                <Text>LCL</Text>
              <Icon name="ios-apps-outline" />
            </Button>

            <Button active={this.state.selectedTab==='FCL'} 
               onPress={() => this.setState({selectedTab: 'FCL'})} >
                <Text>FCL</Text>
              <Icon name="ios-apps-outline" />
            </Button>

            <Button active={this.state.selectedTab==='Air'} 
               onPress={() => this.setState({selectedTab: 'Air'})} >
                <Text>AIR</Text>
              <Icon name="ios-apps-outline" />
            </Button>

            <Button active={this.state.selectedTab==='Dom'} 
               onPress={() => this.setState({selectedTab: 'Dom'})} >
                <Text>Dom</Text>
              <Icon name="ios-apps-outline" />
            </Button>
           
          </FooterTab>
        </Footer>


        </Container>
        );
    }
}

export default Air;