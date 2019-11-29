import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Home Page of Soeren Martius"
        const siteDescription = "The Home Page of Soeren Martius. Entrepreneur and technologist who loves building and delivering digital products and managing and scaling engineering teams."

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
                            Entrepreneur and technologist who loves building and delivering digital products and managing
                            and scaling engineering teams for various kinds of businesses.<br/><br/>
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
