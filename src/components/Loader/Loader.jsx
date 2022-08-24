import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
      height="350"
      width="350"
      color="#3f51b5"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default Loader;
