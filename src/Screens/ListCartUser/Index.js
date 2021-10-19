import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
const { format } = require('number-currency-format');


const user = require('../../../constants/Oauth.json')

export default class Purchase extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state={
            user:user.userLogin
        }
        this.renderPurchase = this.renderPurchase.bind(this)
    }
    renderPurchase(){
            return this.state.user.order.map((item, index) =>(
                    <View style={{flexDirection: 'row',justifyContent:'space-between',padding:20,borderBottomWidth:1,borderBottomColor:'#ccc',backgroundColor:'#fff'}}>
                        <View style>
                            <Image
                                source={{uri:item.listItem[0].thumbnail}}
                                style={{width:80,height: 80}}
                            />
                        </View>
                        <View>
                            <Text>Ngày Mua : {item.time}</Text>
                            <Text style={{marginTop:10}}>Số Lượng Sản Phẩm : {item.TotalItem}</Text>
                            <Text style={{marginTop:10}}>Giá Trị Đơn Hàng: { format(item.totalCart,{currency:'VND',decimalsDigits:0})}</Text>
                        </View>
                    </View>
            ))
    }
    render() {
        console.log(this.state.user)
        return(
            <ScrollView>
                {this.renderPurchase()}
            </ScrollView>
        )
    }
}
