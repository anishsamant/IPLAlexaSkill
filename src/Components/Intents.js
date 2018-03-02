import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


export default class Home extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff', '#BAF6FB']} style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.card}>
                    <List>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.Welcome(); }}>
                            <Text style={styles.text}>Welcome</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.aboutIPL(); }}>
                            <Text style={styles.text}>About IPL</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.totalMatches(); }}>
                            <Text style={styles.text}>Total Matches</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.SeasonWinner(); }}>
                            <Text style={styles.text}>Season Winner</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.Exit(); }}>
                            <Text style={styles.text}>Exit</Text>
                            <Icon name="ios-arrow-forward-outline" />
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
        fontSize: 18,
        textAlign: 'center'
    },
    text: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 16,

    },
    card: {
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 1
    },
    listItem: {
        justifyContent: 'space-between'
    }
};