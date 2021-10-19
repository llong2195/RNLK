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
const data = require("../../../constants/type.json");
const Item = require("../../../constants/product.json");
const { format } = require("number-currency-format");
import { SliderBox } from "react-native-image-slider-box";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      data: data.type,
      keyword: "ALL",
      product: Item.product,
      search: {},
      images:[
            "https://www.wallpapertip.com/wmimgs/169-1692242_msi-gaming-laptop-game-videogame-computer-wallpaper-4k.jpg",
            "https://dlcdnrog.asus.com/rog/media/1534859005892.png",
            "https://wallpaperaccess.com/full/4669321.jpg",
            "https://www.teahub.io/photos/full/212-2124121_dell-alienware.jpg"
      ]
    };
    
    this.onPressSearch = this.onPressSearch.bind(this);
    this.renderType = this.renderType.bind(this);
    this.toDetail = this.toDetail.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.renderALL = this.renderALL.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
  }

  toDetail(item) {
    console.log(item);
    this.navigation.navigate("ProductDetail", { item });
  }
  onPressSearch(keyword, name) {
    this.setState({ keyword: name });
    console.log(this.state.keyword);
  }
  renderSlide()
  {        
    if(this.state.keyword=='ALL')
    {
      return(
        <SliderBox 
          images={this.state.images}
          sliderBoxHeight={300}
          autoplay
          circleLoop
        />
      )
    }
  }

  renderType({ item, index }) {
    return (
      <TouchableOpacity onPress={() => this.onPressSearch("", item.name)}>
        <View
          style={{
            width: 100,
            height: 30,
            overflow: "hidden",
            backgroundColor: "#fffff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{ color: "#e93434", fontSize: 18, fontWeight: "bold" }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
    renderALL() {
      const prd = this.state.product;
      const type = this.state.data;
      if(this.state.keyword=='ALL')
      {
        return(
            type.map((types, index) => {
              if(index < 6)
              return(
                  <View style={{padding:20,marginTop:40}}>
                    <TouchableOpacity onPress={() => this.onPressSearch("", types.name)}>
                      <Text style={{color:'black',fontSize:18}}>{types.name}</Text>
                    </TouchableOpacity>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                    {prd.map((item) => {
                      if(item.type == types.name)
                      {
                      return (
                        <TouchableWithoutFeedback onPress={() => this.toDetail(item)}>
                          <View
                            style={{
                              backgroundColor: "#fff",
                              width: 140,
                              height: 240,
                              marginRight: 4,
                              marginTop: 8,
                              padding:10
                            }}
                          >
                            <View>
                              <Image
                                source={{ uri: item.thumbnail }}
                                style={{ width: 120, height: 120 }}
                              />
                            </View>
                            <View
                              style={{
                                backgroundColor: "#fff",
                                width: 120,
                                padding: 10,
                                height: 100,
                              }}
                            >
                              <View
                                style={{
                                  width: 120,
                                  overflow: "hidden",
                                  height: 32,
                                  marginTop: 10,
                                }}
                              >
                                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                                  {item.name}
                                </Text>
                              </View>
                              <View
                                style={{
                                  width: 120,
                                  overflow: "hidden",
                                  height: 20,
                                  marginTop: 0,
                                }}
                              >
                                <Text style={{ fontSize: 12 }}>{item.type}</Text>
                              </View>
                              <View
                                style={{
                                  width: 120,
                                  overflow: "hidden",
                                  height: 20,
                                  marginTop: 10,
                                }}
                              >
                                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                                  {format(item.price, { currency: "VND", decimalsDigits: 0 })}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableWithoutFeedback>
                      );}
                    })}
                    </ScrollView>
                  </View>
              )
            })

        )
      }
    }
    
  renderProduct() {
    const prd = this.state.product;
    return prd.map((item) => {
      if (this.state.keyword === item.name || this.state.keyword === item.type)
      {
        return (
          <TouchableWithoutFeedback onPress={() => this.toDetail(item)}>
            <View
              style={{
                backgroundColor: "#fff",
                width: "48%",
                height: 340,
                marginRight: 4,
                marginTop: 8,
              }}
            >
              <View>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ width: 180, height: 180 }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 174,
                  padding: 10,
                  height: 100,
                }}
              >
                <View
                  style={{
                    width: 160,
                    overflow: "hidden",
                    height: 50,
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    width: 180,
                    overflow: "hidden",
                    height: 40,
                    marginTop: 0,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>{item.type}</Text>
                </View>
                <View
                  style={{
                    width: 180,
                    overflow: "hidden",
                    height: 40,
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {format(item.price, { currency: "VND", decimalsDigits: 0 })}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      }
    });
  }
  render() {
    return (
      <ScrollView style={{ marginTop: 40 }}>
          {this.renderSlide()}
        <View style={{ padding: 20, flexDirection: "row", marginTop: 0 }}>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 280,
              height: 40,
              padding: 10,
              borderColor: "#e93434",
              borderWidth: 1,
            }}
            value={this.state.keyword}
            onChangeText={(keyword) => {
              this.setState({ keyword });
            }}
          ></TextInput>
          <TouchableOpacity
            style={{ backgroundColor: "white", padding: 10, width: 80 }}
            onPress={() => this.onPressSearch(this.state.keyword, "")}
          >
            <MaterialIcons name="search" color={"red"} size={16} />
            {/* <Text style={{ color: "#fff", marginLeft: 10 }}>Search</Text> */}
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
        >
        <TouchableOpacity onPress={() => this.onPressSearch("", 'ALL')}>
        <View
          style={{
            width: 100,
            height: 30,
            overflow: "hidden",
            backgroundColor: "#fffff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{ color: "#e93434", fontSize: 18, fontWeight: "bold" }}
            >
              ALL
            </Text>
          </View>
        </View>
      </TouchableOpacity>
          <FlatList
            data={this.state.data}
            numColumns={10000}
            renderItem={this.renderType}
            keyExtractor={(item) => item.key}
          />
        </ScrollView>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {this.renderProduct()}
          </View>
        </ScrollView>
        <View style={{marginTop:40}}>

          {this.renderALL()}
        </View>


      </ScrollView>
    );
  }
}
