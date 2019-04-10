import React, {Component} from 'react';
import {Image, StyleSheet, FlatList} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';
import {firebase} from 'react-native-firebase';

export default class CardView extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('fire');
        this.unsubscribe = null;

        this.state = {
            fires: []
        }
    }

    componentDidMount(): void {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)

    }

    componentWillUnmount(): void {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const fires = [];
        querySnapshot.forEach((doc) => {
            const {title, complete} = doc.data();

            fires.push({
                key: doc.id,
                doc, // DocumentSnapshot
                id,
                title,
                video
            });
        });
        console.log(fires);
        this.setState({
            fires,
            loading: false,
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <FlatList
                        data={this.state.fires}
                        renderItem={({item}) =>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail
                                            source={{uri: 'https://nativebase.io/assets/img/front-page-icon.png'}}/>
                                        <Body>
                                            <Text>NativeBase</Text>
                                            <Text note>GeekyAnts</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image
                                        source={{uri: 'https://raw.githubusercontent.com/nitin42/native-base-theme-plugin/master/Group.png'}}
                                        style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="thumbs-up"/>
                                            <Text>12 Likes</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="chatbubbles"/>
                                            <Text>4 Comments</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Text>11h ago</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                        }
                    />

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    activeTitle: {
        color: 'red',
    },
});