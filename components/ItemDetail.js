import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HttpService} from "./HttpService";
import { withRouter } from 'react-router-native';
import {AppHeader} from "./AppHeader";

const styles = StyleSheet.create({
  image: { width: 300, height: 300 },
  itemContainer: { padding: 10 }
});

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.httpService = new HttpService();
    this.state = { item: {}, fetching: false };
  }

  componentDidMount() {
    this.setState({ fetching: true });
    this.httpService.fetchDetails(this.props.match.params.id)
      .then((response) => { this.setState({item: response.data, fetching: false}) })
      .catch(() => this.setState({fetching: false}));
  }

  renderDetails = () => {
    const { item } = this.state;
    return <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.Poster}} />
      <Text>Titulo: {item.Title}</Text>
      <Text>Género: {item.Genre}</Text>
      <Text>Fecha: {item.Released}</Text>
      <Text>Idioma: {item.Language}</Text>
      <Text>Actores: {item.Actors}</Text>
    </View>;
  };

  render() {
    return <React.Fragment>
      <AppHeader />
      <View>
        { this.state.fetching
          ? <Text>Cargando</Text>
          : this.renderDetails()
        }
      </View>
    </React.Fragment>
  }
}

const ItemDetail = withRouter(Item);

export { ItemDetail }