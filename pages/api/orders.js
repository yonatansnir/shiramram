import API from './utils/wooRestApi';

export default (req, res) => {
    let data = req.body;
    data.set_paid = true;

    API.post('orders', data)
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err));
}