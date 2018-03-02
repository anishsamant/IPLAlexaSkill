import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class Exit extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff', '#BAF6FB']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>
                    Alexa will greet you with a welcome message.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.title}>Sample invocation :- </Text>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Hi</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Hello</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Say hello</Text>
                        </ListItem>
                    </List>

                </View>

            </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = {
    title: {
        color: 'black',
        margin: 10,
        fontSize: 20,
    },
    text: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 18,

    },
    card: {
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 1
    },
};
