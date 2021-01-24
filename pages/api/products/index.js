import API from '../utils/wooRestApi';

export default (req, res) => {
    API.get('products')
        .then(data => res.json(data.data))
        .catch(err => res.json(err));
}