import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Home Page of Soeren Martius"
        const siteDescription = "The Home Page of Soeren Martius. Founder and CEO of Mineiros.io"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription}/>
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About me</h2>
                            <p>
                                I am an entrepreneur and technologist and I love building
                                and delivering digital products and managing and scaling engineering teams for various
                                kinds of businesses.<br/><br/>

                                Also, I am the founder of <a href="https://mineiros.io">mineiros.io</a>.
                                We help our customers  to implement  cutting edge infrastructure on Amazon Web Services,
                                Google Cloud, Microsoft Azure and Alibaba Cloud.<br/><br/>

                                I enjoy all kinds of sports,
                                 <a href="https://www.goodreads.com/user/show/108344935-soren-martius">reading</a> and
                                travelling.<br/>
                                Sometimes, I write aabout what moves me on
                                 <a href="https://medium.com/@soeren.martius" ref="_blank">medium</a>.
                            </p>
                            <br/><br/>
                        </header>
                        <p>
                            I like simplicity, pragmatism and common sense
                            while bridging business, product and technology.
                        </p>
                        <ul className="actions">
                            <li><a href="https://www.linkedin.com/in/soerenmartius/" className="button">Bio</a></li>
                        </ul>
                    </section>


                </div>

            </Layout>
        )
    }
}

export default HomeIndex
