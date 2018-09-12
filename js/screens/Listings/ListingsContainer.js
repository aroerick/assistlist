import React, { Component } from 'react';
import Listings from './Listings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import LoadingIndicator from '../../components/LoadingIndicator';
import { fonts, colors } from '../../config/styles';
import AssistListHeader from '../../components/AssistListHeader';
import { Dimensions, Text, Image, View } from 'react-native';
import styles from './styles';

const { height } = Dimensions.get('window');

export default class ListingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { priceState: false };
  }

  togglepriceState = filter => {
    if (!this.state.priceState) {
      filter('asc');
    } else {
      filter('desc');
    }
    this.setState(prevState => ({
      priceState: !prevState.priceState,
    }));

  static navigationOptions = {
    headerTitle: <AssistListHeader />,
    title: 'AssistList',
    headerStyle: {
      height: height / 11,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.lightBlue,
    },
    headerTitleStyle: {
      fontFamily: fonts.nunito,
      color: colors.darkBlue,
      fontSize: 25,
      fontWeight: '900',
    },
  };
  constructor(props) {
    super(props);
    this.state = { priceState: false };
  }

  togglepriceState = filter => {
    if (!this.state.priceState) {
      filter('asc');
    } else {
      filter('desc');
    }
    this.setState(prevState => ({
      priceState: !prevState.priceState,
    }));
  };

  static navigationOptions = {
    headerTitle: (
      <View style={styles.header}>
        <Image
          style={styles.Logo}
          source={require('../../assets/images/Logo/Logo.png')}
        />
        <Text style={styles.LogoText}>AssistList</Text>
      </View>
    ),
    title: 'Listings',
  };

  static navigationOptions = { title: 'Listings' };
  render() {
    return (
      <ItemSearchContext.Consumer>
        {({ data, loading, error, filterByTitle, filterByPrice }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :</Text>;
          return (
            <Listings
              data={data}
              searchMethods={{
                filterByTitle,
                filterByPrice,
              }}
              navigation={this.props.navigation}
              toggleSort={filter => this.togglepriceState(filter)}
              sortPriceState={this.state.priceState}
              navigation={this.props.navigation}
            />
          );
        }}
      </ItemSearchContext.Consumer>
    );
  }
}
