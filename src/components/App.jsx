import React, { Component } from 'react';
import { ImageGallery } from './image-gallery/ImageGallery';
import { fetchImg } from 'service/api';
import { SearchForm } from './SerchForm/SerchForm';

export class App extends Component {
  state = {
    loading: false,
    error: '',
    images: [],
    page: 1,
    per_page: 6,
    total_result: null,
    query: 'tree',
  };

  async componentDidMount() {
    const { per_page } = this.state;
    try {
      const { photos, total_result } = await fetchImg({
        per_page,
      });

      this.setState({ images: photos, total_result });
    } catch (error) {}
  }

  handleSetSearch = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <SearchForm onSetSearch={this.handleSetSearch} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
