import PropTypes from 'prop-types';
import { Component } from 'react';
import fields from './fields';
import TextField from 'components/shared/TextField/TextField';

class Searchbar extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value === '') {
      alert('Введите новый запрос');
    }
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset() {
    this.setState({ value: '' });
  }

  render() {
    const { search } = this.state;

    const { handleChange, handleSubmit } = this;

    return (
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>
        <TextField value={search} onChange={handleChange} {...fields.search} />
      </form>
    );
  }
}

export default Searchbar;
