import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from 'login/actions';
import bgImage from 'assets/images/loginBackground.jpg';
import Input from 'login/components/Input';
import Button from 'login/components/Button';
import Spinner from 'login/components/Spinner'
import styles from 'login/styles'

class LoginScreen extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render(){
        return (
            <ImageBackground source={bgImage} style={styles.screenContainer}>
                <View style={styles.sectionStyles}>
                    <Input 
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </View>
                <View style={styles.sectionStyles}>
                    <Input 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        value={this.props.password}
                    />
                </View>
                <Text style={styles.errorText}>
                    {this.props.error}
                </Text>
                <View>
                    {this.renderButton()}
                </View> 
            </ImageBackground>
        );
    }; 
};

const mapStateToProps = ( state ) => {
    const { email, password, error, loading } = state.login;

    return { email, password, error, loading };
};

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
