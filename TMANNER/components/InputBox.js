import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, navigation } from 'react-native';

function InputBox({ navigation, title, targetScreen }) {
    const [inputValue, setInputValue] = useState('');
    const isInputEmpty = inputValue === '';
    return (
        <View style={styles.Container}>
            <View style={styles.TextContainer}>
                <Text style={styles.GuidText}>로그인에 사용할 {'\n'}아이디를 입력해주세요</Text>
                <View style={styles.StepContainer}>
                    <Text style={styles.Step1}>1</Text>
                    <Text style={styles.Step4}>/4</Text>
                </View>
            </View>
            <TextInput 
                style={styles.InputField} 
                placeholder="아이디"
                onChangeText={text => setInputValue(text)} // Update state when text changes
            />
            <TouchableOpacity 
                style={[
                    styles.CompleteButton,  
                    isInputEmpty ? styles.DisabledButton : styles.EnabledButton
                ]}
                onPress={() => navigation.navigate('Main')}
                >
                <Text style={styles.ButtonText}>입력 완료</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 16
    }
});

export default InputBox;
