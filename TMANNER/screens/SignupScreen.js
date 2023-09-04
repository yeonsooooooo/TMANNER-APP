import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Header from "../components/Header";

function SignupScreen({navigation}) {
    const [inputValue, setInputValue] = useState('');
    const isInputEmpty = inputValue === '';

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="회원가입"
                targetScreen={'Login'} />
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    Container: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 16,
        marginBottom: 12,
    },
    GuidText: {
        fontSize: 16,
    },
    InputField: {
        width: '100%',
        height: 50,
        fontSize: 14,
        fontWeight: '500',
        padding: 18,
        paddingLeft: 16,
        marginTop: 10, // Added some margin for visual spacing
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
    },
    CompleteButton: {
        width: '100%',
        height: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24, // Added some margin for visual spacing
    },
    ButtonText: {
        color: '#fff', // White text color
    },
    DisabledButton: {
        backgroundColor: '#D1D1D1',
      },
      EnabledButton: {
        backgroundColor: '#000',
      },
      StepContainer: {
        flexDirection: 'row',
      },
      Step1: {
        color: '#000', // Black
      },
      Step4: {
        color: '#949494', // Gray
      },
});

export default SignupScreen;
