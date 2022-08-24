const Button = ({ onClick }) => {
  return (
    <button className="loadMore" type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default Button;