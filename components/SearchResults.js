import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from "react-native";
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: { flex: 1},
  resultsContainer: { flex: 1, paddingLeft: 10, paddingRight: 10 },
  header: { alignItems: 'center', marginTop: 20 },
  image: { width: 75, height: 100 },
  item: { flexDirection: 'row', flex: 1, marginBottom: 20 },
  itemDescription: { paddingLeft: 10 }
});

class SearchResults extends React.Component {

  keyExtractor = (item) => item.imdbID;

  renderItem = ({ item }) => {
    return <Link to={`/item/${item.imdbID}`}>
        <View style={styles.item}>
          <Image style={styles.image} source={{uri: item.Poster }} />
          <View style={styles.itemDescription}>
            <Text>{item.Title}</Text>
            <Text>{item.Type}</Text><Text>{item.Year}</Text>
          </View>
        </View>
      </Link>
  };

  render() {
    const { results, total } = this.props;

    return <View style={styles.container}>
      <View style={styles.header}><Text>{results.length} de {total}</Text></View>
      <View style={styles.resultsContainer}>
        <FlatList
          style={{flex: 1}}
          data={results}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}/>
      </View>
    </View>
  }

}

export { SearchResults }