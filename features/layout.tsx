
import Head from 'next/head'
import NextSeo from './nextSeo'
import Header from '../components/header'
import Footer from '../components/footer'
type Props ={
    children : any
}

const layout = (props:Props)=>{

    return (
      
        <>
        
        <Head>
                <title>کومه گردی</title>
                <meta name="description" content="mahta shop " />
                <link rel="icon" href="/images/hayatStore.svg" />

                <link rel="preload" href="../public/fonts/IRANSans.ttf" as="font" crossOrigin="" />

                <link rel="preload" href="../public/fonts/IRANSans_Medium.ttf" as="font" crossOrigin="" />

                <link rel="preload" href="../public/fonts/IRANSans_Bold.ttf" as="font" crossOrigin="" />
            </Head>
        <body dir="rtl">
            <Header />
            {props.children}
            <Footer />
        </body>
    </>
        
        );

}
export default layout;