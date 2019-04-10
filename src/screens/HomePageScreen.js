import React from 'react';
import { Text, View } from 'react-native';
import CardView from "../components/cards/Card";
import {Container, Header} from "native-base";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <CardView/>
            </View>
        );
    }
}