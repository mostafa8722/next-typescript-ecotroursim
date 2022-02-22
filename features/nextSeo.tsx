import React ,{Component} from "react"
import Head from "next/head"
import {DefaultSeoProps} from "../logic/types"

class  NextSeo extends Component<NextSeoProps,{}> {

    render(){

        return (
            <Head>
            {buildTags({
              title,
              noindex,
              nofollow,
              robotsProps,
              description,
              canonical,
              facebook,
              openGraph,
              additionalMetaTags,
              twitter,
              titleTemplate,
              mobileAlternate,
              languageAlternates,
              additionalLinkTags,
            })}
          </Head>
        )

    }

   
}
export default NextSeo;