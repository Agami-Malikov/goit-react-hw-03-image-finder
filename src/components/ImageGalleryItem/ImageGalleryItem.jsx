import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, largeImageURL, onClick }) => {
  return (
    <li className="imageGalleryItem" onClick={() => onClick(largeImageURL)}>
      <img className="imageGalleryItem-image" src={src} alt="imgName" id={id} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
