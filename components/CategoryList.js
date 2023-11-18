// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// const CategoryList = () => {
//   const [categoryInfo, setCategoryInfo] = useState([]);

//   useEffect(() => {
//     const fetchCategoryInfo = async () => {
//       try {
//         const response = await axios.get('https://your-api-url/category');
//         setCategoryInfo(response.data);
//       } catch (error) {
//         console.error('Error fetching category info:', error);
//       }
//     };

//     fetchCategoryInfo();
//   }, []);

//   return (
//     <View>
//       <Text>Menu Categories:</Text>
//       {categoryInfo.map(category => (
//         <View key={category.id}>
//           <Text>{category.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default CategoryList;
