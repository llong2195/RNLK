import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
const data = require('../../../constants/user.json')
const crtUser = require('../../../constants/Oauth.json');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            username: '',
            pass: '',
            isSecure: true,
            data: data.user,
            currentUser: crtUser
        }
        this.onPressShow = this.onPressShow.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.toHome = this.toHome.bind(this);
    }

    onPressShow() {
        this.setState({ isSecure: !this.state.isSecure })
    }
    onPressRegister() {
        this.navigation.navigate('Register')
    }
    toHome(item) {
        this.navigation.replace('ContainerTab', {
            screen: 'Profile',
            params: { item: item },
        })
    }
    onPressLogin() {
        let currentUser = this.state.currentUser;
        let data = this.state.data;
        if (this.state.username == '') {
            return Alert.alert('Please enter your Email or PhoneNumber')
        }
        else if (this.state.pass == '') {
            return Alert.alert('Please enter your Password')
        }
        let check = false;
        data.forEach((item) => {
            if ((this.state.username == item.email ||this.state.username == item.phone) && this.state.pass == item.pass) {
                currentUser.status = true;
                currentUser.userLogin = item;
                this.setState({currentUser : currentUser})
                console.log(this.state.currentUser)
                this.setState({ name: '' })
                this.setState({ pass: '' })
                check = true;
                return this.toHome(item);
            }

        })
        if(!check)
            Alert.alert('Please check your account')
    }

    render() {
        return (
            <View>

                <ImageBackground
                    source={require('../../Images/asus.png')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Image
                        source={require('../../Images/header--logo.png')}
                        style={{ width: 130, height: 130, alignSelf: 'center', zIndex: 2, marginTop: 50 }}
                    />
                    <View style={{ padding: 20, alignItems: 'center', alignSelf: 'center', marginTop: 40 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginRight: 110, fontWeight: 'bold', color: '#e93434' }}>Email or PhoneNumber</Text>
                        </View>
                        <View style={{ marginRight: 14 }}>
                        
                            <TextInput style={{ borderBottomWidth: 1, fontSize:20, width: 280, height: 40, padding: 10, marginTop: 10 }} value={this.state.username} onChangeText={(name) => { this.setState({ username: name }) }}></TextInput>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 18, marginRight: 210, fontWeight: 'bold', color: '#e93434' }}>Password</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <TextInput
                                secureTextEntry={this.state.isSecure}
                                style={{borderBottomWidth: 1, fontSize:20, width: 280, height: 40, padding: 10, marginTop: 10}}
                                value={this.state.pass}
                                onChangeText={(pass) => { this.setState({ pass }) }}>
                            </TextInput>
                            <MaterialCommunityIcons name="eye"  size={26} 
                                style={{marginLeft:10, marginTop: 20}}
                                onPress={() => this.onPressShow()}
                            />
                            
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <TouchableOpacity style={{ backgroundColor: '#e93434', padding: 10, width: 80 }} onPress={() => this.onPressLogin()}>
                                <Text style={{ color: '#fff', marginLeft: 10 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <TouchableOpacity style={{ padding: 10, width: 300 }} onPress={() => this.onPressRegister()}>
                                <Text style={{ color: '#e93434', marginLeft: 10, fontWeight: 'bold' }}>You don't have account? Let's register!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}