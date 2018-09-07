import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { SearchResults } from "./SearchResults";
import { HttpService } from "./HttpService";
import { AppHeader } from "./AppHeader";

const styles = StyleSheet.create({
  textInput: { width: '80%', height: 40}
});

class Omdb extends React.Component {

  constructor(props) {
    super(props);
    this.httpService = new HttpService();
    this.state = { searchText: '', searchResults: [], total: 0, searching: false };
  };

  updateSearchText = (text) => {
    this.setState({ searchText: text });
  };

  search = () => {
    this.setState({searching: true});
    this.httpService.findInServer(this.state.searchText)
      .then((response) => {
        this.setState({searchResults: response.data.Search || [], total: Number(response.data.totalResults), searching: false});
      })
      .catch(() => {
        this.setState({searching: false, errorFetching: true});
      });
  };

  render() {
    const { searchText, searchResults, total, searching } = this.state;
    return <React.Fragment>
      <AppHeader>
        <TextInput placeholder={'Search'}
                   style={styles.textInput}
                   onChangeText={this.updateSearchText}
                   value={searchText}
                   onSubmitEditing={this.search} />
      </AppHeader>
      { searching ? <Text>Buscando</Text> : <SearchResults results={searchResults} total={total} /> }
    </React.Fragment>;
  }
}

export {Omdb}

