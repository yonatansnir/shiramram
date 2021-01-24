import { config } from 'dotenv';
config();
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const API = new WooCommerceRestApi({
    url: "https://shiramram-66360a.ingress-alpha.easywp.com/",
    consumerKey: process.env.consumerKey,
    consumerSecret: process.env.consumerSecret,
    version: "wc/v3"
});

export default API;