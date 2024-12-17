import axios from 'axios';

export const fetchProducts = async (search) => {
  const response = await axios.get(`http://localhost:5000/api/products?search=${search}`);
  return response.data;
};
