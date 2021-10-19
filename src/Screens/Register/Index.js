import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
const data = require('../../../constants/user.json')
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs'
import MateriaIcon from 'react-native-vector-icons/MaterialIcons'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            fname: '',
            lname: '',
            pass: '',
            repass: '',
            email: '',
            phone: '',
            
            data: data.user,
            user: {},

            date: new Date(),
            mode: "date",
            show: false
        }
        this.goBack = this.goBack.bind(this);
        this.onPressRegister = this.onPressRegister.bind(this);
        this.showDatepicker = this.showDatepicker.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    goBack() {
        this.navigation.goBack();
    }
    showDatepicker() {
        this.setState({ show: !this.state.show })
    }
    onChange(event, selectedDate) {
        const currentDate = selectedDate || this.state.date;
        this.setState({ date: currentDate, show: false });
    };
    onPressRegister() {
        if (this.state.pass != this.state.repass) {
            Alert.alert('Mật khẩu không trùng khớp')
            return;
        }
        let data = this.state.data;
        data.map((item) => {
            if (item.email === this.state.email) {
                Alert.alert('Email đẫ tồn tại');
                return;
            }
            else if (item.phone === this.state.phone) {
                Alert.alert('Số điện thoại này đã tồn tại')
                return;
            }
        })
        data.push({
            fname: this.state.fname ,
            lname: this.state.lname ,
            pass: this.state.pass ,
            phone: this.state.phone ,
            email: this.state.email ,
            birthday : this.state.birthday 
        })
        this.setState({data : data})
        console.log(data);
        this.navigation.goBack();
    }
    render() {
        return (
            <ScrollView style={{ width: '100%', height: '100%' }}>

                <ImageBackground
                    source={require('../../Images/asus.png')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Image
                        source={require('../../Images/header--logo.png')}
                        style={{ width: 130, height: 130, alignSelf: 'center', zIndex: 2, marginTop: 50 }}
                    />
                    <View style={{ padding: 20, marginTop: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >First Name</Text>
                                <TextInput onChangeText={(value)=> this.setState({fname : value})} style={{ borderBottomWidth: 1, fontSize:20, width: 150, height: 30, marginTop: 10 }} />

                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Last Name</Text>
                                <TextInput onChangeText={(value)=> this.setState({lname: value})} style={{ borderBottomWidth: 1, fontSize:20, width: 150, height: 30, marginTop: 10 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 15, marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Email</Text>
                            <TextInput onChangeText={(value)=> this.setState({email : value})} style={{ borderBottomWidth: 1, fontSize:20, width: 325, height: 30, marginTop: 10 }} />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 15, marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Phone Number</Text>
                            <TextInput onChangeText={(value)=> this.setState({phone : value})} style={{ borderBottomWidth: 1, fontSize:20, width: 325, height: 30, marginTop: 10 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Password</Text>
                                <TextInput secureTextEntry={true} onChangeText={(value)=> this.setState({pass : value})} style={{ borderBottomWidth: 1, fontSize:20, width: 150, height: 30, marginTop: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Confirm Password</Text>
                                <TextInput secureTextEntry={true} onChangeText={(value)=> this.setState({repass : value})} style={{ borderBottomWidth: 1, fontSize:20, width: 150, height: 30, marginTop: 10 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 15, marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e93434' }} >Bủhday</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <TextInput editable={false} style={{ borderBottomWidth: 1, fontSize:20, width: 50, height: 30, marginRight: 10, color: 'black' }} value={dayjs(this.state.date).format("DD")} />
                                <TextInput editable={false} style={{ borderBottomWidth: 1, fontSize:20, width: 50, height: 30, marginRight: 10, color: 'black' }} value={dayjs(this.state.date).format("MM")} />
                                <TextInput editable={false} style={{ borderBottomWidth: 1, fontSize:20, width: 50, height: 30, marginRight: 10, color: 'black' }} value={dayjs(this.state.date).format("YYYY")} />
                                <MateriaIcon name="date-range" size={26} color='red' onPress={() => this.showDatepicker()} style={{ marginLeft: 10 }} />
                            </View>
                        </View>
                        

                        <View style={{justifyContent: 'center', alignItems:'center'}}>
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity style={{ backgroundColor: '#e93434', padding: 10, width: 100, alignItems:'center' }} onPress={() => this.onPressRegister()}>
                                    <Text style={{ color: '#fff'}}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 10}}>
                                <TouchableOpacity style={{ padding: 10, width: '100%' }} onPress={() => this.goBack()}>
                                    <Text style={{ color: '#e93434', marginLeft: 10, fontWeight: 'bold'}}>You have account? Let's register!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        {this.state.show ? (
                            <View>
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={this.state.date}
                                    mode={this.state.mode}
                                    display="default"
                                    onChange={this.onChange}
                                />
                            </View>
                        ) : (<View></View>)}
                    </View>

                </ImageBackground>
            </ScrollView>
        )
    }
}