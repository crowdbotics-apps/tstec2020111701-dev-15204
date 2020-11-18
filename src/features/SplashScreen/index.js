import React, {Component} from "react";
import {StyleSheet, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {Text, Button} from "react-native-ui-kitten";
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoIcon from "../../assets/images/backgroundLoginV1.png";
import {installed_blueprints} from "../../config/installed_blueprints";
import {store} from "../../redux/store";
import {styles} from './styles'
import logo from "../../assets/icons/logo.png"
import {connect} from 'react-redux';

class App extends Component {

    static navigationOptions = {
        title: 'Installed blueprints'
    };

    componentDidMount() {
        store.dispatch({type: 'TEST/ALO'});
        const {navigation: {
                navigate
            }} = this.props;
        if(this.props.accessToken){
          navigate("BlankScreen014599")
  //        navigate("MainApp")
          //navigate("EmailAuth");
        }

            
        setTimeout(() => {
          if(!this.props.accessToken){
            navigate("EmailAuth")
          }
        }, 3330)
    }

    renderItems() {
        const {navigation: {
                navigate
            }} = this.props;

        return installed_blueprints.map(item => {
            if (item.hasOwnProperty('access_route')) {
                return (
                    <TouchableOpacity
                        onPress={_ => navigate(item.access_route)}
                        style={styles.item}
                        key={`${item.name}--blueprint-button`}>
                        <Icon
                            style={styles.itemLogo}
                            name={item.icon_name
                            ? item.icon_name
                            : 'pencil-square-o'}
                            size={40}
                            color="#F88087"/>
                        <Text style={styles.itemFont}>{item.human_name}</Text>
                    </TouchableOpacity>
                );
            }
        });
    }

    render() {
        return (
            <View style={styles.itemsContainer}>
                <Image
                    style={{
                    width: 365,
                    height: 161,
                }}
                    resizeMode="contain"
                    source={logo}/>
                <Text style={styles.heading}>{"IwantSMART.com Rebate\nManagement Program"}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({accessToken: state.EmailAuth.accessToken});

const mapDispatchToProps = dispatch => ({actions: {}});

export default connect(mapStateToProps, mapDispatchToProps)(App);
