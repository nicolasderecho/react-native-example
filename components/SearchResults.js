import React from 'react';
import {Text, View } from "react-native";

class SearchResults extends React.Component {

  render() {
    const { results, total } = this.props;

    const movies = results.map( (searchResult) => { return <View key={searchResult.imdbID}>
      <Text>{searchResult.Title}</Text>
    </View>});

    return <View>
      <Text>{results.length} de {total}</Text>
      {movies}
    </View>
  }

}

export { SearchResults }