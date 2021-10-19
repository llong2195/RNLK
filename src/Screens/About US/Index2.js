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

export default class Index2 extends Component {

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }
    render() {
        return(
            <View>
                <View style={{backgroundColor:'#e93434',width:'100%',height:460,marginTop:60,padding:20,borderRadius:100}}>
                    <View>
                        <Text style={{fontSize:18,color:'#fff',textAlign: 'center',marginTop:40,lineHeight:38}}>Sự ủng hộ và tin tưởng của quý khách hàng và các đối tác trong suốt chiều dài phát triển của LK GEAR GAMING là nguồn động viên to lớn để chúng tôi ngày càng phát triển hơn. Tập thể LK GEAR GAMING xin cam kết sẽ không ngừng hoàn thiện từ chất lượng sản phẩm cho đến dịch vụ khách hàng một cách tốt nhất để luôn xứng đáng với niềm tin ấy.</Text>
                    </View>
                </View>
                <View style={{marginTop:40}}>
                    <Image
                        source ={require('../../Images/header--logo.png')}
                        style={{width:120,height: 120,alignSelf:'center'}}
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{backgroundColor:'#e93434', padding:10,width:200,borderRadius:20}} onPress={()=>this.navigation.navigate('LoginStack')}>
                            <Text style={{fontSize:18,color:'#fff',marginLeft:16}}>Bắt Đầu Khám Phá</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
