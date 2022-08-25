import { nanoid } from 'nanoid';
import PropTypes, { arrayOf } from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, onClick }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      onClick={onClick}
      key={nanoid()}
      id={id}
      src={webformatURL}
      largeImageURL={largeImageURL}
    />
  ));

  return (
    <>
      <ul className="imageGallery">{elements}</ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
