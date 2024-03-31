import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/components/SearchForm';


export default function App() {
const onSearch = async (data) => {
  console.log(data)
  // const response = await fetch(`https://api.github.com/users/${data}`)
  // const result = await response.json()
  // console.log(result)

}
  return (
<SearchForm onSearch={onSearch} />
  );
}