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
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
const { format } = require("number-currency-format");
const Oauth = require("../../../constants/Oauth.json");
import sendMail from "../../../api/sendMail";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    let today = new Date();
    let time = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
    this.state = {
      listCart: props.route.params.ListCart,
      TotalCart: props.route.params.TotalCart,
      email: Oauth.status ? Oauth.userLogin.email : "",
      address: Oauth.status ? Oauth.userLogin.address : "",
      phone: Oauth.status ? Oauth.userLogin.phone : "",
      time: time,
      TotalItem: props.route.params.TotalItem,
    };
    this.renderPrd = this.renderPrd.bind(this);
    this.gotoSuccess = this.gotoSuccess.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }
  checkLogin() {
    this.navigation.replace('Login');
  }
  gotoSuccess() {
    Oauth.userLogin.order.push({ "listItem": this.state.listCart, "totalCart": this.state.TotalCart, "time": this.state.time, "TotalItem": this.state.TotalItem })
    console.log(Oauth.userLogin)
    const data = {
      user: Oauth.userLogin,
      listItem: this.state.listCart,
      totalCart: this.state.TotalCart,
      totalItem: this.state.TotalItem
    }
    sendMail.sendMail(data).then(res =>{
      this.navigation.navigate("Success");
    }).catch(err => Alert.alert(`Error: ${err}`))
  }

  renderPrd() {
    console.log(typeof this.state.listCart);
    return this.state.listCart.map((item, index) => {
      return (
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View style={{ marginLeft: 30 }}>
            <View style={{ width: 250, height: 30, overflow: "hidden" }}>
              <Text style={{ fontSize: 12, lineHeight: 14 }}>{item.name}</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 12, lineHeight: 14 }}>{format(item.price, { currency: 'VND', decimalsDigits: 0 })}</Text>
              <Text style={{ fontSize: 12, lineHeight: 14 }}>x{item.qty}</Text>
            </View>
          </View>
        </View>
      );
    });
  }
  render() {
    if (!Oauth.status) {
      return (
        <View onPress={this.checkLogin()}>
        </View>
      )
    }
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <View style={{}}>
          <View
            style={{
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              backgroundColor: "#FFFFFF",
              width: "85%",
              marginTop: 30,
              height: 150,
              alignSelf: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 10,
            }}
          >

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >

              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Phone :</Text>
              <TextInput
                value={this.state.phone}
                placeholder={"phone"}
                onChangeText={(value) => this.setState({ phone: value })}
                style={{ fontSize: 16, fontWeight: "bold" }}
              ></TextInput>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email :</Text>
              <TextInput
                value={this.state.email}
                placeholder={"email"}
                onChangeText={(value) => this.setState({ email: value })}
                style={{ fontSize: 16, fontWeight: "bold" }}
              ></TextInput>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Address :
              </Text>
              <TextInput
                value={this.state.address}
                placeholder={"address"}
                onChangeText={(value) => this.setState({ address: value })}
                style={{ fontSize: 16, fontWeight: "bold" }}
              ></TextInput>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total:</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {format(this.state.TotalCart, {
                  currency: "VND",
                  decimalsDigits: 0,
                })}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            zIndex: 10,
            width: "98%",
            flex: 1,
            borderRadius: 30,
            alignSelf: "center",
            backgroundColor: "#E8E4E4",
            position: "relative",
          }}
        >
          {/* {this.state.listCart.map((item, key) => {
                    
                    )
                })} */}
          <ScrollView>
            {this.renderPrd()}
          </ScrollView>
        </View>

        <View
          style={{
            zIndex: 20,
            padding: 20,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#e0ebeb",
            height: 100,
            flex: 0.5,
          }}
        >
          <TouchableOpacity
            onPress={() => this.gotoSuccess()}
            style={{
              alignItems: "center",
              backgroundColor: "#e93434",
              width: "100%",
              height: 40,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
