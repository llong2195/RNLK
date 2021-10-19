import React, { Component } from "react";
import Rating from "react-native-easy-rating";
import "intl";
import { AddCart } from "../../Components/Action/Index";
import {
  View,
  ScrollView,
  Text,

  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
const data = require("../../../constants/product.json");
const cart = require("../../../constants/cart.json");
import { connect } from "react-redux";
const { format } = require("number-currency-format");


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      data: props.route.params,
      product: data.product,
      rating: 0,
      cart: cart,
      ca: cart.cart,
    };

    this.toDetail = this.toDetail.bind(this);
    this.onStarPress = this.onStarPress.bind(this);
    this.toComment = this.toComment.bind(this);
  }
  toDetail = (item) => {
    this.navigation.push("ProductDetail", { item });
  };
  toComment = (comment) => {
    this.navigation.navigate("Comment", { comment });
  };

  onStarPress(rating) {
    this.setState({
      rating: rating,
    });
  }
  render() {


    let renderItem = () => {
      let prd = this.state.product
      return(
        prd.map((item)=>{
          if (
            item.type == this.state.data.item.type &&
            item.name !== this.state.data.item.name
          ) {
            return (
              <View>
                <TouchableWithoutFeedback onPress={() => this.toDetail(item)}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 210,
                      height: 340,
                      padding: 10,
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
                          height: 38,
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
                        { format(item.price,{currency:'VND',decimalsDigits:0})}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            );
          }
        })
      )
      
    };

    let renderProduct = () => {
      return (
        <View>
          <View>
            <Image
              source={{ uri: this.state.data.item.thumbnail }}
              style={{ resizeMode: "stretch", width: 420, height: 450 }}
            />
          </View>
          <View style={{ width: 400, marginTop: 20, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", lineHeight: 26 }}>
              {this.state.data.item.name}
            </Text>
          </View>
          <View style={{ width: 400, padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {format(this.state.data.item.price, { currency: "VND", decimalsDigits: 0 })}
            </Text>
          </View>
          <View style={{ width: 400, padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              . Brand:{this.state.data.item.category}
            </Text>
          </View>
          <View style={{ width: 400, padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              . Type:{this.state.data.item.type}
            </Text>
          </View>
          <View style={{ width: 400, padding: 20 }}>
            <Text style={{ fontSize: 16 }}>Description</Text>
            <Text style={{ fontSize: 16 }}>
              {this.state.data.item.description}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 20,
              backgroundColor: "#e93434",
              width: 400,
              height: 60,
              padding: 10,
              borderRadius: 30,
            }}
            onPress={() => this.props.AddCart(this.state.data.item)}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    let renderComment = () => {
      return (
        <TouchableWithoutFeedback
          onPress={() => this.toComment(this.state.data.item.comment)}
        >
          <View style={{ padding: 20, marginTop: -20 }}>
            <Text style={{ fontSize: 18 }}>
              Comment({this.state.data.item.comment.length})
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>
                ____________________________________
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    };
    return (
      <ScrollView>
        {renderProduct()}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>
            ____________________________________
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            marginTop: -20,
          }}
        >
          <View>
            <Text style={{ fontSize: 20 }}>Reviews</Text>
          </View>
          <View>
            <Rating
              rating={this.state.rating}
              max={5}
              iconWidth={24}
              iconHeight={24}
              onRate={(rating) => this.onStarPress(rating)}
            />
          </View>
        </View>
        <View style={{ padding: 20, marginTop: -30 }}>
          <Text style={{ fontSize: 20 }}>
            ____________________________________
          </Text>
        </View>
        {renderComment()}
        <View style={{ marginTop: 40, padding: 20 }}>
          <Text style={{ fontSize: 20 }}>You Might Also Like</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {renderItem()}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getProduct: () => dispatch(getProduct()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
