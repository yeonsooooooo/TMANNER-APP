import { StyleSheet, View, Text, SafeAreaView, Image, navigation, TouchableOpacity} from 'react-native';

import categories from '../assets/data/data';
import Header from "../components/Header";

function DetailMenuEditScreen({ route, navigation  }) {
    const { productId } = route.params;

    const menuItem = categories.flatMap(category => category.content).find(item => item.productId === productId);

    if (!menuItem) return <Text>메뉴를 찾을 수 없습니다.</Text>;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header navigation={navigation} title="메뉴 수정" targetScreen="MenuEdit"/>
                <TouchableOpacity style={styles.deleteBtn} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.deleteText}>메뉴 삭제</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.Topcontainer}>
                    <Text style={styles.title}>{menuItem.menuName}</Text>
                    <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.editText}>사진변경</Text>
                    </TouchableOpacity>
                </View>
            </View>



            <View style={{ flex: 1, padding: 20 }}>
                <Image source={menuItem.image} style={{ width: 150, height: 150 }} />
                <Text >{menuItem.menuName}</Text>
                <Text >{menuItem.price}</Text>
                <Text >{menuItem.status}</Text>
            </View>
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
        fontWeight:  600,
        fontSize:13,
        textDecorationLine: 'underline',

    }
});
export default DetailMenuEditScreen;