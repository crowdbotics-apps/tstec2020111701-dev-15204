import React from "react";
import { connect } from "react-redux";
import { useraccount_post_registration_create } from "../../../store/actions.js"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
} from "react-native";

class Blank extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    };
  }

  render = () => (
    <View style={styles.container}>
      <Text>Register for an Account</Text>
      <TextInput 
        onChangeText={email => this.setState({ email: email })}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}/>
      <TextInput 
        onChangeText={password => this.setState({ password: password })}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}/>
      <TouchableOpacity 
        onPress={() => this.props.registration(this.state.email, this.state.password)}
        style={styles.button}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

function mapStateToProps(state) {
  return { state: state }
}

const mapDispatchToProps = dispatch => {
  return {
    registration: (email, password) => dispatch(useraccount_post_registration_create({email, password}))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank);