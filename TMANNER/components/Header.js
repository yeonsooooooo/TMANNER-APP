import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, navigation } from 'react-native';

function Header({ navigation, title, targetScreen }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(targetScreen || 'Main')}> 
                <Image source={require('../assets/source/BackBtn.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 16
    }
});

export default Header;
