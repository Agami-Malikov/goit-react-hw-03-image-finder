import { nanoid } from 'nanoid';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      key={nanoid()}
      id={id}
      src={webformatURL}
      dataLarge={largeImageURL}
    />
  ));

  return (
    <>
      <ul className="imageGallery">{elements}</ul>
    </>
  );
};

export default ImageGallery;
