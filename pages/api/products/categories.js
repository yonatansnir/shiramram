import API from '../utils/wooRestApi';

export default (req, res) => {
    API.get('products/categories')
        .then(resp => res.json(resp.data))
        .catch(err => res.json(err));
}