import { Component, useState } from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

const { NavigationContainer } = require("@react-navigation/native");
const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const { Button } = require("react-native");
const { Text } = require("react-native");
const { View } = require("react-native");


const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login ?" component={Login}></stack.Screen>
        <stack.Screen name="home" component={Home}></stack.Screen>
        <stack.Screen name="Deals" component={Deal}></stack.Screen>
        <stack.Screen name="Chizza" component={Chizza}></stack.Screen>
        <stack.Screen name="Chicken Buckets" component={Chicken}></stack.Screen>
        <stack.Screen name="Biriyani Buckets" component={Biriyani}></stack.Screen>
        <stack.Screen name="Box Meals" component={BoxMeals}></stack.Screen>
        <stack.Screen name="Burgers" component={Burgers}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}
const Home = (props) => {
  return (
    <ScrollView>
      <View style={Styles.overall2}>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Deals")}>Exclusive Deal</Text>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Chizza")}>chizza</Text>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Chicken Buckets")}>chicken Buckets</Text>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Biriyani Buckets")}>biriyani Buckets</Text>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Box Meals")}>box Meals</Text>
        <Text style={Styles.ctn} onPress={() => props.navigation.navigate("Burgers")}>Burgers</Text>
      </View>
    </ScrollView>
  )
}
const Login = (props) => {
  return (
    <View style={Styles.overall}>
      <ImageBackground style={Styles.bg} source={require('./assets/images/kfc.jpg')}></ImageBackground>
      <Text style={Styles.intro}>kfc</Text>
      <Text style={Styles.slo}>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
      <View style={Styles.log}>
        <TextInput style={Styles.logctn} placeholder="xyx12@gmail.com" ></TextInput>
        <TextInput style={Styles.logctn1} placeholder="*************" ></TextInput>
      </View>
      <View style={Styles.bt}>
        <Button color="red" title="Login" onPress={() => props.navigation.navigate("home")}></Button>
      </View>
    </View>
  )
}

const Deal = () => {
  const [add, updateadd] = useState(0);
  return (
    <View style={Styles.over}>
      <View style={Styles.overall3}>
        <ImageBackground style={Styles.img} source={require("./assets/images/1.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt}>The Allu Arjun Combo</Text>
        <Text style={Styles.txtchild}>try Allus fav-1 Hot & Crispy chicken, 1 Smoky Red, Reg Popcorn, Spicy Fries & 1 Dip 20gm</Text>
        <Text style={Styles.price}>₹448.57</Text>
        <View style={Styles.btn}>
          <View style={Styles.cartbtn}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd(add - 1)} disabled={add == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd(add + 1)}></Button>
        </View>
      </View>
    </View>
  )
}
const Chizza = () => {
  const [add2, updateadd2] = useState(0);
  const [add3, updateadd3] = useState(0);
  const [add4, updateadd4] = useState(0);
  const [add5, updateadd5] = useState(0);
  return (
    <ScrollView>
      <View style={Styles.overall4}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/2.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Chizza</Text>
        <Text style={Styles.txtchild1}>Crunchy chicken topped with cheese, spicy sauce, veggies & herbs. All-chicken-no-crust pizza!</Text>
        <Text style={Styles.price1}>₹299.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd2(add2 - 1)} disabled={add2 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add2}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd2(add2 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/3.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Chizza & Choco Lava Combo</Text>
        <Text style={Styles.txtchild1}>Favorite combo of Chizza, Choco Lava & Pepsi PET</Text>
        <Text style={Styles.price1}>₹495.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd3(add3 - 1)} disabled={add3 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add3}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd3(add3 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/4.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Chizza & Pepsi Combo</Text>
        <Text style={Styles.txtchild4}>Best-selling combo of your favorite Chizza & a refreshing Pepsi PET 475m</Text>
        <Text style={Styles.price1}>₹356.19</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd4(add4 - 1)} disabled={add4 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add4}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd4(add4 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/5.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Chizza & Fries Combo</Text>
        <Text style={Styles.txtchild5}>Delicious combo of Chizza, Medium Fries & Pepsi PET</Text>
        <Text style={Styles.price1}>₹448.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd5(add5 - 1)} disabled={add5 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add5}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd5(add5 + 1)}></Button>
        </View>
      </View>
    </ScrollView>
  )
}
const Chicken = () => {
  const [add, updateadd] = useState(0);
  const [add1, updateadd1] = useState(0);
  const [add2, updateadd2] = useState(0);
  const [add3, updateadd3] = useState(0);
  const [add4, updateadd4] = useState(0);
  const [add5, updateadd5] = useState(0);
  const [add6, updateadd6] = useState(0);
  const [add7, updateadd7] = useState(0);
  const [add8, updateadd8] = useState(0);
  const [add9, updateadd9] = useState(0);
  return (
    <ScrollView>
      <View style={Styles.overall4}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/6.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Peri Peri 10 Strips with Dynamite</Text>
        <Text style={Styles.txtchild1}>10 Peri Peri chicken strips & 1 Dynamite Spicy Mayo Sauce Bottle (200gm)</Text>
        <Text style={Styles.price1}>₹639.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd(add - 1)} disabled={add == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd(add + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/7.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Bucket for Two</Text>
        <Text style={Styles.txtchild1}>Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn</Text>
        <Text style={Styles.price2}>₹599.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd1(add1 - 1)} disabled={add1 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add1}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd1(add1 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/8.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Peri Peri 10 Strips with Nashville</Text>
        <Text style={Styles.txtchild1}>10 Peri Peri chicken strips & 1 Nashville Hot Sauce Bottle (225gm)</Text>
        <Text style={Styles.price1}>₹639.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd2(add2 - 1)} disabled={add2 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add2}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd2(add2 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/9.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Stay Home Bucket</Text>
        <Text style={Styles.txtchild4}>Save 21% on 4 Hot & Crispy, 4 Wings, 6 Peri Strips & 2 dips (20gm each)</Text>
        <Text style={Styles.price2}>₹788.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd3(add3 - 1)} disabled={add3 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add3}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd3(add3 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/10.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Peri Peri 10 Leg pc & 4 Dips</Text>
        <Text style={Styles.txtchild1}>Leg before any wicket! Save 27% on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)</Text>
        <Text style={Styles.price2}>₹924.76</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd4(add4 - 1)} disabled={add4 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add4}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd4(add4 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/11.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Peri Peri 5 Leg Pc Meal</Text>
        <Text style={Styles.txtchild1}>5 Spicy Peri Peri Leg Pieces, 2 Dips (20gm each), 1 Med Fries & 1 Pepsi 500m</Text>
        <Text style={Styles.price2}>₹628.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd5(add5 - 1)} disabled={add5 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add5}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd5(add5 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/10.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Peri Peri 10 Leg pc & 4 Dips</Text>
        <Text style={Styles.txtchild1}>Leg before any wicket! Save 27% on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)</Text>
        <Text style={Styles.price2}>₹924.76</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd6(add6 - 1)} disabled={add6 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add6}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd6(add6 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/12.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Ultimate Savings Bucket</Text>
        <Text style={Styles.txtchild1}>Save 33% on 4pc Hot & Crispy, 6 Wings, 4 Strips, 2 Dips (20gm each) & 1 Pepsi 500ml</Text>
        <Text style={Styles.price2}>₹699.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd7(add7 - 1)} disabled={add7 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add7}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd7(add7 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/13.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Mingles Bucket Meal</Text>
        <Text style={Styles.txtchild1}>Save Rs. 71 on 4 Wings,2 Peri Strips, Reg Popcorn, Med Fries & 1 Pepsi 500ml</Text>
        <Text style={Styles.price3}>₹479.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd8(add8 - 1)} disabled={add8 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add8}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd8(add8 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/14.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Big 8</Text>
        <Text style={Styles.txtchild1}>Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken</Text>
        <Text style={Styles.price2}>₹684.76</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd9(add9 - 1)} disabled={add9 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value}>{add9}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd9(add9 + 1)}></Button>
        </View>
      </View>
    </ScrollView>
  )
}
const Biriyani = () => {
  const [add, updateadd] = useState(0);
  const [add1, updateadd1] = useState(0);
  const [add2, updateadd2] = useState(0);
  const [add3, updateadd3] = useState(0);
  const [add4, updateadd4] = useState(0);
  const [add5, updateadd5] = useState(0);
  const [add6, updateadd6] = useState(0);
  return (
    <ScrollView>
      <View style={Styles.overall4}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/15.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Classic Biryani Combo</Text>
        <Text style={Styles.txtchild4}>Large Biryani rice with 2 Hot & Crispy, 2 Gravies, 4 Strips & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹740.00</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd(add - 1)} disabled={add == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd(add + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/16.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Smoky Grilled Biryani</Text>
        <Text style={Styles.txtchild1}>Large Biryani rice with 2 Smoky Red,2Gravies,Med Popcorn & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹740.00</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd1(add1 - 1)} disabled={add1 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add1}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd1(add1 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/17.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Popcorn Biryani Combo</Text>
        <Text style={Styles.txtchild1}>Large Biryani & Chicken Popcorn, 2 Spicy Gravies, 4 Wings & 1 Pepsi 500ml</Text>
        <Text style={Styles.price3}>₹690.48</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd2(add2 - 1)} disabled={add2 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add2}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd2(add2 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/18.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Classic Chicken Biryani Bucket</Text>
        <Text style={Styles.txtchild1}>Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy</Text>
        <Text style={Styles.price1}>₹229.52</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd3(add3 - 1)} disabled={add3 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add3}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd3(add3 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/19.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Popcorn Chicken Biryani Bucket</Text>
        <Text style={Styles.txtchild1}>Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy</Text>
        <Text style={Styles.price1}>₹229.52</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd4(add4 - 1)} disabled={add4 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add4}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd4(add4 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/20.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Smoky Grilled Biryani Bucket</Text>
        <Text style={Styles.txtchild1}>Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy</Text>
        <Text style={Styles.price1}>₹229.52</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd5(add5 - 1)} disabled={add5 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add5}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd5(add5 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/21.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Veg Biryani Bucket</Text>
        <Text style={Styles.txtchild4}>Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy</Text>
        <Text style={Styles.price1}>₹188.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd6(add6 - 1)} disabled={add6 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add6}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd6(add6 + 1)}></Button>
        </View>
      </View>
    </ScrollView>
  )
}
const BoxMeals = () => {
  const [add, updateadd] = useState(0);
  const [add1, updateadd1] = useState(0);
  const [add2, updateadd2] = useState(0);
  const [add3, updateadd3] = useState(0);
  const [add4, updateadd4] = useState(0);
  return (
    <ScrollView>
      <View style={Styles.overall4}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/22.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>All Chicken Box</Text>
        <Text style={Styles.txtchild1}>A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price</Text>
        <Text style={Styles.price1}>₹182.52</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd(add - 1)} disabled={add == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd(add + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/23.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Zinger Tandoori Box</Text>
        <Text style={Styles.txtchild1}>A deal for Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹313.33</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd1(add1 - 1)} disabled={add1 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add1}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd1(add1 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/24.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Popcorn Biryani Box</Text>
        <Text style={Styles.txtchild1}>Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹328.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd2(add2 - 1)} disabled={add2 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add2}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd2(add2 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/25.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Veg Zinger Box</Text>
        <Text style={Styles.txtchild1}>A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹313.33</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd3(add3 - 1)} disabled={add3 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add3}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd3(add3 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/26.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Veg Biryani Box</Text>
        <Text style={Styles.txtchild1}>Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹279.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd4(add4 - 1)} disabled={add4 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add4}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd4(add4 + 1)}></Button>
        </View>
      </View>
    </ScrollView>
  )
}
const Burgers = () => {
  const [add, updateadd] = useState(0);
  const [add1, updateadd1] = useState(0);
  const [add2, updateadd2] = useState(0);
  const [add3, updateadd3] = useState(0);
  const [add4, updateadd4] = useState(0);
  const [add5, updateadd5] = useState(0);
  const [add6, updateadd6] = useState(0);
  const [add7, updateadd7] = useState(0);
  return (
    <ScrollView>
      <View style={Styles.overall4}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/27.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Family Feast</Text>
        <Text style={Styles.txtchild4}>Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹828.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd(add - 1)} disabled={add == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd(add + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/28.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>2 Chicken Krisper Burgers</Text>
        <Text style={Styles.txtchild4}>2 delicious chicken value burgers - at a deal price</Text>
        <Text style={Styles.price1}>₹228.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd1(add1 - 1)} disabled={add1 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add1}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd1(add1 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/29.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>2 Veg Krisper Burgers</Text>
        <Text style={Styles.txtchild4}>2 delicious veg value burgers - at a deal price</Text>
        <Text style={Styles.price1}>₹158.10</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd2(add2 - 1)} disabled={add2 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add2}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd2(add2 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/30.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Chicken & Krispers Combo</Text>
        <Text style={Styles.txtchild1}>Deal of 2 chicken value burgers, 2 Hot & Crispy, 2 dips (20gm each) & 1 Pepsi 500ml</Text>
        <Text style={Styles.price1}>₹519.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd3(add3 - 1)} disabled={add3 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add3}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd3(add3 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/31.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Tandoori Zinger Burger</Text>
        <Text style={Styles.txtchild4}>Chicken zinger with a delicious tandoori sauce</Text>
        <Text style={Styles.price1}>₹199.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd4(add4 - 1)} disabled={add4 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add4}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd4(add4 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/32.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Mixed Zinger Doubles</Text>
        <Text style={Styles.txtchild4}>Best-seller combo of classic chicken zinger & tandoori zinger</Text>
        <Text style={Styles.price1}>₹348.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd5(add5 - 1)} disabled={add5 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add5}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd5(add5 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/33.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>Buddy Meal</Text>
        <Text style={Styles.txtchild1}>Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2</Text>
        <Text style={Styles.price1}>₹499.05</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd6(add6 - 1)} disabled={add6 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add6}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd6(add6 + 1)}></Button>
        </View>
      </View>
      <View style={Styles.overallmar}>
        <ImageBackground style={Styles.img1} source={require("./assets/images/34.jpg")}>
        </ImageBackground>
        <Text style={Styles.txt1}>2 Veg Krispers Meal</Text>
        <Text style={Styles.txtchild1}>2 veg value burgers, crispy medium fries & 2 delicious dips (20 gm each) at a deal price</Text>
        <Text style={Styles.price1}>₹268.57</Text>
        <View style={Styles.btn1}>
          <View style={Styles.cartbtn1}>
            <Button color='green' title='add to cart' onPress={() => alert("sucessfully added to cart")}></Button>
          </View>
          <Button color="blue" title="-" onPress={() => updateadd7(add7 - 1)} disabled={add7 == 0 ? true : false}></Button>
          <View>
            <Text style={Styles.value1}>{add7}</Text>
          </View>
          <Button color="red" title='+' onPress={() => updateadd7(add7 + 1)}></Button>
        </View>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  overall: {
    flex: 1,
    backgroundColor: "black"
  },
  bg: {
    height: 270,
  },
  intro: {
    fontSize: 90,
    textAlign: "left",
    textTransform: "uppercase",
    color: "red",
    fontWeight: "bold",
  },
  slo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 16
  },
  log: {
    //  borderWidth:2,
    //  borderColor:"red",
    width: "80%",
    backgroundColor: "#d9d9d9",
    margin: 40,
    height: 150,
    borderRadius: 7,
    elevation: 3
  },
  logctn: {
    backgroundColor: "white",
    width: "90%",
    margin: 15,
    height: 45,
    padding: 10,
    fontSize: 17,
    borderRadius: 5,
  },
  logctn1: {
    backgroundColor: "white",
    width: "90%",
    margin: 15,
    height: 45,
    padding: 10,
    fontSize: 17,
    borderRadius: 5,
  },
  bt: {
    width: 150,
    // height: 150,
    marginLeft: 150,
    justifyContent: "center"
  },
  // 2nd Page...........
  overall2: {
    flex: 1,
    backgroundColor: "#1a1a1a"
  },
  ctn: {
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 50,
    padding: 30,
    width: "75%",
    textAlign: "center",
    height: 100,
    elevation: 3,
    backgroundColor: "#ff3333",
    color: "white",
    borderRadius: 10
  },

  // 3rd page.......deals

  overall3: {
    //  borderWidth:1,
    //  borderColor:"red",
    height: 460,
    width: 350,
    marginLeft: 30,
    marginTop: 100,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    elevation: 3
  },
  img: {
    height: 250,
    width: "100%",
    marginTop: 8,
    // marginLeft: 25
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",

  },
  txtchild: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: 5,
    textAlign: "center"

  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    color: "red",
    textAlign: "center"
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1,
    width: "100%",
    padding: 5,
    justifyContent: "space-between",
  },
  cartbtn: {
    width: "70%",
  },
  value: {
    fontSize: 22,
  },

  // chizza ..........

  overall4: {
    // borderWidth: 1,
    // borderColor: "red",
    height: 300,
    width: "70%",
    marginLeft: 60,
    marginTop: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    elevation: 3
  },
  img1: {
    height: 125,
    width: "99%",
    marginTop: 4,
    marginLeft: 3
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",

  },
  txtchild1: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center"
  },
  price1: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 3,
    color: "red",
    textAlign: "center"
  },
  btn1: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1,
    width: "100%",
    padding: 5,
    justifyContent: "space-between",
  },
  cartbtn1: {
    width: "70%",
  },
  value1: {
    fontSize: 22,
  },

  // margin content for chizza...

  overallmar: {
    height: 300,
    width: "70%",
    marginLeft: 60,
    marginTop: 30,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    elevation: 3
  },

  // textchild4......

  txtchild4: {
    color: "black",
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center"
  },

  // textchild5......

  txtchild5: {
    color: "black",
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center"
  },

  // chicken 2nd cart.........

  price2: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 4,
    color: "red",
    textAlign: "center"
  },

  // chicken 9th cart.........

  price3: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 12,
    color: "red",
    textAlign: "center"
  },
}
)
export default App

