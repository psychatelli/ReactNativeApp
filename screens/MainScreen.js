

import React, { Component } from 'react';
import { View, Platform, StyleSheet, Image, StatusBar } from 'react-native';
import { Container, Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { STATUS_BAR_HEIGHT } from '../constants';
import icon from '../assets/icons/icon.png';
import Expo from 'expo';


const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });


class MainScreen extends Component {
  


  state = {
    appIsReady: false
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }
 
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {

    var {navigate} = this.props.navigation;


    return (

      <Container style={styles.MainWrapper}>
      <Header style={styles.Header}>
      <Left>
      <Button transparent onPress={ () => navigate("DrawerOpen", {}) }>
              <Icon name="menu" />
      </Button>
    </Left>
        <Body>
          <Title style={styles.TextHeader}>TransPort Explorer</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        
      <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text>Goto Profiles</Text>
          </Button>

        <Button primary onPress={ () => navigate("Login", {}) }>
           <Text>LOGIN </Text>
          </Button>      
           {/* <Image source={require('../assets/img/background.jpg')} style={styles.backgroundImage}></Image> */}

      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>

      <StatusBar barStyle="light-content" />

    </Container>




    );
  }
}


const styles = StyleSheet.create ({
    MainWrapper: {
      backgroundColor: '#00aeef', 
    },
    TextHeader: {
      color: 'white',
    },
    Header: {
        backgroundColor: '#2c3d43',
    },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        width: 20,
        height: 15,
        padding: 15,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        backgroundColor: 'rgba(0,0,0,0)',
    },
   
});
export default MainScreen;
