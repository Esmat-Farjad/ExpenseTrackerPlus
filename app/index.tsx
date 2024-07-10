import { Text, View, Image,ScrollView, ImageBackground} from "react-native";
const logImage = require("../assets/images/react-logo.png");
export default function Index() {
  return (
    <View style={{flex: 1,padding:50}}>
      <ScrollView>
      {/* <ImageBackground source={logImage} style={{flex:1}}> */}
      <Image source={logImage}/>
      <Text>Hello Esmatullah</Text>
      <Text>
      In publishing and graphic design, 
      Lorem ipsum is a placeholder text 
      commonly used to demonstrate the visual 
      form of a document or a typeface without relying 
      on meaningful content. Lorem ipsum may be used as a 
      placeholder before the final copy is available.
      </Text>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300,height:300}}/>
      {/* </ImageBackground> */}
      {/* <Image source={{uri:'online image from the web'}} style={{width:300,height:300}}/> */}
        </ScrollView>
    </View>
  );
}
