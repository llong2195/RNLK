import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'

const Oauth = require('../../../constants/Oauth.json')
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,
            Oauth: Oauth,
        }
        this.onPressLogin = this.onPressLogin.bind(this)
        this.renderData = this.renderData.bind(this)
        let item = this.state.data
        console.log("profile : " + this.state.Oauth.status);
        console.log(this.state.Oauth.userLogin);
    }
    onPressLogin() {
        this.navigation.replace('Login');
    }

    renderData() {
        if (this.state.Oauth.status) {
            return (
                <Text style={{ fontSize: 28, marginTop: 30, }}>
                    {this.state.Oauth.userLogin.fname + "  " + this.state.Oauth.userLogin.lname}
                </Text>
            )
        }
    }
    render() {
        if (!Oauth.status) {
            return (
                <View onPress={this.onPressLogin()}>
                </View>
            )
        }
        return (
            <View>
                <View style={{ width: 100, height: 100, borderRadius: 80, borderWidth: 1, alignSelf: 'center', marginTop: 120, borderColor: '#ccc' }}>
                    <Image
                        source={require('../../Images/header--logo.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    {this.renderData()}
                </View>
                {/* <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'red' }} onPress={() => this.onPressLogin()}>
                    <Text>aádsadsa</Text>
                    <Text style={{ fontSize: 28 }}>
                    </Text>
                </TouchableOpacity> */}
                <View style={{ marginTop: 120, padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() =>this.navigation.navigate('Purchase')}>
                    <View style={{}}>
                        <Image
                            source={require('../../Images/order.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ marginTop: 20, textAlign: 'center' }}>Orders</Text>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <Image
                            source={require('../../Images/line.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </View>
                    <View style={{}}>
                        <Image
                            source={require('../../Images/pass.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Pass</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../Images/line.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </View>
                    <View style={{}}>
                        <Image
                            source={require('../../Images/setting.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text style={{ marginTop: 20, textAlign: 'center' }}>Setting</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>this.onPressLogin()} style={{backgroundColor:'#e93434',width:150,height:40,alignSelf: 'center',padding:10,marginTop:80}}>
                    <Text style={{color:'#fff', marginLeft:30}}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>
        )
    }
}