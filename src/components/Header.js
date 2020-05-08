import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.linkedin.com/in/soerenmartius/" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Soeren Martius</strong><br />
                    Founder & CEO @ <a href="https://mineiros.io" target="_blank">mineiros.io</a></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
