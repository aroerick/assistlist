import React, { Component } from 'react';
import Listings from './Listings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import LoadingIndicator from '../../components/LoadingIndicator';
import { fonts, colors } from '../../config/styles';
import { Dimensions, Image, Text } from 'react-native';
import AssistListHeader from '../../components/AssistListHeader';

const { height, width } = Dimensions.get('window');

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
