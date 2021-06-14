import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider, Image } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card>

        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: urlToImage || defaultImg }}
          />

          <Text style={styles.titleStyle}>
            {title || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  image: {
      height : 200,
      width: 400
  },
  titleStyle:{
      marginBottom: 10,
      fontSize: 14

  }
};