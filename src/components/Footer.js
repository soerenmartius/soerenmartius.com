import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/soerenmartius/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="https://github.com/soerenmartius" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.facebook.com/soerensupertramp" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://medium.com/@soeren.martius" className="icon fa-medium"><span className="label">Medium</span></a></li>
                        <li><a href="https://twitter.com/sorenmartius" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://telegram.me/soerenmartius" className="icon fa-telegram"><span className="label">Telegram</span></a></li>
                        <li><a href="mailto:soeren.martius@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
