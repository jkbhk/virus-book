import React from "react";
import { FlatList, View, Text } from "react-native";

// Import getNews from news.js
import { getNews } from "../src/news";
import Article from "../src/components/Article";

export default class NewsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then((articles) => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={(item) => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
          ListHeaderComponent={
            <View
              style={{
                flex: 1,
                marginTop: 60,
                marginLeft: 20,
              }}
            >
              <Text
                style={{ fontSize: 25, color: "limegreen", fontWeight: "bold" }}
              >
                Top articles on 'covid'
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}
