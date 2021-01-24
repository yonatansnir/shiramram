import Header from '../components/header/Header'
import CartProvider from '../context/CartProvider'
import ProductsProvider from '../context/ProductsProvider'
import '../styles/globals.css'
// import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header>
          <Component {...pageProps} />
        </Header>
      </CartProvider>
    </ProductsProvider>
  );
}

export default MyApp
