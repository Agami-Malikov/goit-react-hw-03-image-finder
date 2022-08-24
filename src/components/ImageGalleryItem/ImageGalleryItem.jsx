const ImageGalleryItem = ({ id, src, dataLarge }) => {
  return (
    <li className="imageGalleryItem">
      <img
        className="imageGalleryItem-image"
        src={src}
        alt="imgName"
        data-large={dataLarge}
        id={id}
      />
    </li>
  );
};

export default ImageGalleryItem;
