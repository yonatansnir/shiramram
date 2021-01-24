import API from '../utils/wooRestApi';

export default (req, res) => {
    const { pid } = req.query;
    API.get('products/' + pid)
        .then(data => res.json(data.data))
        .catch(err => res.json(err));
}