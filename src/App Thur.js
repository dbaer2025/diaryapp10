import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut,user }) {
  return (
    <View className="App">
      <Card>
        <Heading level={3}>My name is Dylan</Heading>
        <h3>{user.username}</h3>
        <Image src={logo} width={240} className="App-logo" alt="logo" /><br/>
        <Image src={"https://clipart-library.com/img1/762464.gif"} width={240} className="App-logo" alt="logo" /><br/>
        <img src="https://gif-free.com/uploads/posts/2017-02/1486640716_clapping-bear.gif" />
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
