import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - BulleTin`;
  }

  async updateNews() {
    this.props.setProgress(10);

    const url = `/api/news?category=${this.props.category}&page=1`;

    this.setState({ loading: true });

    let data = await fetch(url);
    this.props.setProgress(40);

    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page: 1,
    });

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `/api/news?category=${this.props.category}&page=${nextPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState((prevState) => ({
      page: nextPage,
      articles: prevState.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults || prevState.totalResults,
    }));
  };

  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{
            color: 'black',
            margin: '39px 0px',
            marginTop: '80px',
            textDecoration: 'underline blue 5px',
          }}
        >
          BulleTin - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 150)
                        : ''
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source?.name || 'Unknown'}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
