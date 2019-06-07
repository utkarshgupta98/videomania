import React, { Component } from "react";
import { Text } from "react-native";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Input from "./Input";
import firebase from "firebase";
import Spinner from "./Spinner";
import Header from "./header";

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
};

class LoginForm extends Component {
    state = { email: "", password: "", error: "", loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: "", loading: true });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ error: "Authentication Failed", loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: "",
            password: "",
            loading: false,
            error: ""
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)} btnText="Login" />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Header headerText="Authentication" />
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyles}>{this.state.error}</Text>

                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

export default LoginForm;
