import { Component } from 'react';
import { getImages } from './shared/api/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    value: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, value } = this.state;

    if ((value && prevState.value !== value) || page > prevState.page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page, value } = this.state;
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await getImages(page, value);

      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  handleFormSubmit = value => {
    this.setState({ value, items: [] });
  };

  render() {
    const { loadMore, handleFormSubmit } = this;
    const { items, loading, error } = this.state;

    return (
      <div className="app">
        <header className="searchbar">
          <Searchbar onSubmit={handleFormSubmit} />
        </header>
        {loading && <Loader />}
        {error && (
          <p>
            style={{ textAlign: 'Center', fontSize: '25px', fontWeight: '600' }}
            Не удалось загрузить изображения
          </p>
        )}
        <ImageGallery items={items} />
        {items.length && <Button onClick={loadMore} />}
      </div>
    );
  }
}

export default App;
