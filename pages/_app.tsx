import { Provider } from "react-redux";
import store from "../store/store";
import '../styles/globals.css'
import '../styles/reset.css'
import type { AppProps } from 'next/app'
import DefaultLayout from "../features/layout";


function MyApp({ Component, pageProps }: AppProps) {
  
  const Layout = Component.Layout || DefaultLayout;

  return (

        <Provider store={store}>
           <Layout>
                <Component {...pageProps} />
            </Layout>
               
        </Provider>
  )

  
}

export default MyApp
