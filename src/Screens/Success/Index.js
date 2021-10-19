import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    Picker,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
const { format } = require('number-currency-format');
const Oauth = require('../../../constants/Oauth.json');

export default class Success extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            status: "succses"
        }
        this.gotoHome = this.gotoHome.bind(this);
    }

    gotoHome() {
        this.navigation.navigate('ContainerTab', {
            screen: 'HomeNavigation',
        });
    }


    render() {
        return (
            <ImageBackground
                source={{ uri: "https://i.pinimg.com/originals/4c/7a/b1/4c7ab1da89e96e9051005526164af8ed.jpg" }}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={{ width: '100%', flex: 1, justifyContent: "center" }}>

                    <View style={{}}>
                        <View style={{ borderRadius: 50, backgroundColor: "#FFFFFF", width: '85%', height: 300, alignSelf: "center", padding: 10, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require('../../Images/header--logo.png')}
                                style={{ width: 120, height: 120, alignSelf: 'center', zIndex: 2 }}
                            />
                            <Text style={{ fontSize: 26 }}>
                                Order Successful
                            </Text>
                            <Text style={{ fontSize: 20, marginTop: 30 }}>
                                Thank you!
                            </Text>
                            <Text style={{ fontSize: 16, marginTop: 20 }}>
                                On my way to your home
                            </Text>
                        </View>
                    </View>


                    <View style={{ padding: 20, position: 'absolute', bottom: 150, left: 0, right: 0 }}>
                        <TouchableOpacity onPress={() => this.gotoHome()} style={{ alignSelf: 'center', alignItems: "center", backgroundColor: "#e93434", width: 150, height: 40, marginTop: 10, padding: 10, borderRadius: 5 }} >
                            <Text style={{ color: '#fff', fontSize: 18 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}