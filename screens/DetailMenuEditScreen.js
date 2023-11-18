import { StyleSheet, View, Text, SafeAreaView, Image, 
    Dimensions , TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

import categories from '../assets/data/data';
import Header from "../components/Header";

import { SelectList } from 'react-native-dropdown-select-list';

function DetailMenuEditScreen({ route, navigation  }) {
    const { productId } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const menuItem = categories.flatMap(category => category.content).find(item => item.productId === productId);

    // 선택된 상품이 속한 카테고리를 찾습니다.
    const selectedCategory = categories.find(category => category.content.some(item => item.productId === productId));
    const selectedCategoryName = selectedCategory ? selectedCategory.name : ""; 


    if (!menuItem) return <Text>메뉴를 찾을 수 없습니다.</Text>;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header navigation={navigation} title="메뉴 수정" targetScreen="MenuEdit"/>
                <TouchableOpacity style={styles.deleteBtn} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.deleteText}>메뉴 삭제</Text>
                </TouchableOpacity>
            </View>

            <ScrollView keyboardShouldPersistTaps ='always' style={{flex: 1}}>
                
                <View style={styles.mainContainer}>
                    <View style={styles.Topcontainer}>
                        <Text style={styles.title}>{menuItem.menuName}</Text>
                        <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('Main')}>
                            <Text style={styles.editText}>사진변경</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middleContainer}>
                        <Image source={menuItem.image} style={{ width: windowWidth - 40, height: (windowWidth - 40) * (350 / 350) }} />
                    </View>
                    <Text style={styles.subText}>(*정방향 비율을 권장합니다.)</Text>

                    <View style={styles.bottomContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>메뉴 이름</Text>
                            <TextInput style={styles.input} placeholder={menuItem.menuName}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>메뉴 가격</Text>
                            <TextInput style={styles.input} placeholder={menuItem.price}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.inputTitle}>메뉴 소개</Text>
                                <Text style={styles.subinputTitle}>(*40자 이내)</Text>
                            </View>
                            <TextInput style={styles.inputLarge}
                            placeholder={menuItem.menuIntro}
                            maxLength={40}
                            multiline={true}  />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>카테고리 선택</Text>
                            <SelectList 
                                setSelected={val => console.log(val)} // 선택된 값을 처리하는 로직으로 수정하세요.
                                data={categories.map(category => ({ key: category.id, value: category.name }))}
                                save="value"
                                placeholder={selectedCategoryName} // 플레이스 홀더를 선택된 카테고리 이름으로 설정합니다.
                                boxStyles={{borderRadius:0}}
                                dropdownStyles={{borderRadius:0}}
                                search={false}  
                            />
                        </View>

                        <View style={styles.categorySeparator} />

                        <View style={styles.inputContainer}>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.inputTitle}>옵션</Text>
                                <Text style={styles.subinputTitle}>(*선택사항입니다.)</Text>
                            </View>
                            <Text style={styles.subTitle}>맵기 단계</Text>
                            <View style={styles.spicyStepContainer}>

                            </View>
                             
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    deleteBtn: {
        marginRight: 22,
        marginTop: 50,
        width: 70,
        height: 35,
        fontWeight: 'bold',
        fontSize: 15,
        borderStyle: 'solid',  // 테두리 설정
        borderWidth: 1,  // 테두리 두께
        borderColor: '#757575',  // 테두리 색상
        padding: 5,  // 안쪽 패딩
        borderRadius: 5,  // 사각형 모서리 둥글게
        alignItems: 'center',  // 내부 텍스트를 가운데 정렬 (수평)
        justifyContent: 'center',  // 내부 텍스트를 가운데 정렬 (수직)
    },

    deleteText: {
        color: '#757575',  // 텍스트 색상
    },
    
    mainContainer: {
        flex: 1,
        padding: 20,
        marginTop: 15,
    },
    
    Topcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: '600',
    },

    editText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize:16,
        marginRight: 5,
        textDecorationLine: 'underline',
    },

    middleContainer: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subText: {
        fontSize:12,
        color: '#757575',
        fontWeight: '500',
        marginTop: 8,
    },
    input: {
        height: 47,
        marginBottom: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        backgroundColor:'#E7E7E7',
        borderRadius: 5,
        color: '#757575',
    },
    
    inputTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
    },
    
    inputContainer:{
        marginTop:26,
    },
    inputLarge: {
        height: 80,
        marginBottom: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        backgroundColor:'#E7E7E7',
        borderRadius: 5,
        color: '#757575',
        paddingTop: 10,  // 이 부분을 추가
    },inputTitleContainer:{
        flexDirection: 'row',
    },
    subinputTitle: {
        fontSize: 12,
        color: '#757575',
        marginLeft: 5,
    }, categorySeparator: {
        height: 1,
        backgroundColor: '#D9D9D9',
        marginBottom: 16,
        marginTop: 34,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        marginTop: 26,
    },spicyStepContainer:{
        flexDirection: 'row',
        paddingRight:8,
    },
});
export default DetailMenuEditScreen;