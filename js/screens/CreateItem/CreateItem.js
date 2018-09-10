import React, { Fragment, Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Modal,
  Picker,
  TouchableOpacity,
  Dimensions,
  Switch,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import { colors, fonts } from '../../config/styles';
import SelectInput from '../../components/SelectInput';
import styles from './styles';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicker: false,
      SwitchValue: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
          onSubmit={values => {
            console.log(values);
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <Fragment>
              <Field
                name="category"
                render={({ input, meta }) => (
                  <View>
                    <Text style={styles.title}>Category *</Text>
                    <SelectInput data={this.props.categoryList} />
                  </View>
                )}
              />
              <Field
                name="title"
                render={({ input, meta }) => (
                  <View>
                    <Text style={styles.title}>Title *</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Title"
                      {...input}
                    />
                  </View>
                )}
              />
              <View style={styles.priceContainer}>
                <Field
                  name="price"
                  render={({ input, meta }) => (
                    <View>
                      <Text style={styles.title}>Price *</Text>
                      <View style={styles.inputPrice}>
                        <Text style={styles.dollarSign}>$</Text>
                        <TextInput placeholder="Price" {...input}  style={styles.dollarText} />
                      </View>
                    </View>
                  )}
                />
                <View style={styles.freeContainer}>
                  <Text style={styles.TextFree}>Free</Text>
                  <Switch
                    onValueChange={value =>
                      this.setState({ SwitchValue: value })
                    }
                    value={this.state.SwitchValue}
                  />
                </View>
              </View>

              <Field
                name="location"
                render={({ input, meta }) => (
                  <View>
                    <Text style={styles.title}>Location</Text>
                    <SelectInput data={this.props.locationList} />
                  </View>
                )}
              />
              <Field
                name="description"
                render={({ input, meta }) => (
                  <View>
                    <Text style={styles.title}>Description</Text>
                    <TextInput
                      style={styles.textArea}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Description"
                      {...input}
                    />
                  </View>
                )}
              />
              <Field
                name="notification"
                render={({ input, meta }) => (
                  <View>
                    <Text style={styles.title}>Notification *</Text>
                    <SelectInput data={this.props.notificationList} />
                  </View>
                )}
              />
              <Text style={styles.message}>
                Want to be notified when your listing is bumped to the next
                page? We can send you notifications to REFRESH in MY LISTING, to
                bump it back up to the top!{' '}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </Fragment>
          )}
        />
      </ScrollView>
    );
  }
}

export default CreateItem;
