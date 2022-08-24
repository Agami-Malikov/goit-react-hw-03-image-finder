import axios from 'axios';

const instancse = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    per_page: 12,
    key: '26392840-9a4d0a86895218ec661d7b4ff',
    safesearch: true,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (page = 1, value) => {
  const { data } = await instancse.get('', {
    params: {
      page,
      q: value,
    },
  });

  return data;
};
