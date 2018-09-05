import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { HttpService } from "../shared/HttpService";
import { SearchResults } from "./SearchResults";
const API_KEY = '9bbc72f7';

class RightPage extends React.Component {

  constructor(props) {
    super(props);
    this.httpService = new HttpService();
    this.state = { searchText: '', searchResults: [], total: 0, searching: false }
  };

  updateSearchText = (text) => {
    this.setState({ searchText: text });
  };

  search = () => {
    this.setState({searching: true});
    this.httpService
      .request({ url: 'http://www.omdbapi.com',  params: { s: this.state.searchText, apikey: '9bbc72f7'} })
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
      <View style={{backgroundColor: 'powderblue', marginTop: 24, height: 80, paddingTop:5, paddingBottom: 5, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput placeholder={'Search'}
                   style={{ width: '80%', height: 40}}
                   onChangeText={this.updateSearchText}
                   value={searchText}
                   onSubmitEditing={this.search}
        />
      </View>
      { searching ? <Text>Buscando</Text> : <SearchResults results={searchResults} total={total} /> }
    </React.Fragment>;
  }
}

export {RightPage}

