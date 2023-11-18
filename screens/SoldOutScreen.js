import React , {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView,} from 'react-native';
import categories from '../assets/data/data';
import Header from "../components/Header";

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Encountered two children with the same key']);

const SoldOutScreen = () => {
    const navigation = useNavigation();

    const [categoryInfo, setCategoryInfo] = useState([]);

    //카테고리 불러와서 배열에 넣어두기. 
    useEffect(() => {
        // API에서 메뉴 카테고리 정보를 불러오는 함수
        const fetchCategoryInfo = async () => {
          try {
            const response = await axios.get('http://223.130.137.39:3030');
            // API에서 받아온 데이터를 state에 저장
            setCategoryInfo(response.data);
          } catch (error) {
            console.error('Error fetching category info :', error);
          }
        };

        fetchCategoryInfo();
    }, []);




    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="메뉴 품절"
                targetScreen={'Main'} />
            <ScrollView 
                style={styles.ScrollViewcontainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>

                    
            </ScrollView>

            {categoryInfo.map(category => (
                    <View key={category.id}>
                        <Text>{category.name}</Text>
                    </View>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
    ScrollViewcontainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
    },
});

export default SoldOutScreen;
