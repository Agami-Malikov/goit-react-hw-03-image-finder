import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static defaultProps = {
    closeModal: () => {},
  };

  static propTypes = {
    closeModal: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { closeModal } = this;
    const { children } = this.props;

    return createPortal(
      <div className="overlay" onClick={closeModal}>
        <div className="modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
