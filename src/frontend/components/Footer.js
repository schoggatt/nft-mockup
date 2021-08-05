import React, {Component} from 'react'
import "./Footer.css"

/*
    Need to implement mailchimp package for a mailing app. 
    FIX DOM NESTING
*/

class Footer extends Component{

    constructor()
    {
        super();
        this.state = {
            
        }
    }

    componentDidMount()
    {

    }

    componentWillUnmount()
    {

    }

    render()
    {
        return(
            <footer>
                <table id="footer-table">
                    <tbody>
                    <tr>
                        <td width="25%">
                            <th>Contact</th>
                            <tr><td>John Doe</td></tr>
                            <tr><td>1234 Lorem St. Ipsum, Dolores</td></tr>
                            <tr><td>brawler@gmail.com</td></tr>
                            <tr><td>123-456-7891</td></tr>
                        </td>
                        <td width="15%">
                            <th>Social</th>
                            <tr><td>Twitter</td></tr>
                            <tr><td>Instagram</td></tr>
                            <tr><td>Facebook</td></tr>
                            <tr><td>Reddit</td></tr>
                        </td>
                        <td width="15%">
                            <th>Legal</th>
                            <tr><td>Copyright</td></tr>
                            <tr><td>Privacy Policy</td></tr>
                            <tr><td>Terms of Use</td></tr>
                        </td>
                        <td width="15%">
                            <th>About</th>
                            <tr><td>Our Team</td></tr>
                            <tr><td>Brawler</td></tr>
                            <tr><td>Development</td></tr>
                        </td>
                        <td width="30%">
                            <th>Newsletter</th>
                            <tr>
                                <td>
                                    <div id="footer-signup-container">
                                        <p>
                                            Sign up for the Brawler newsletter to stay up to date with NFT release dates and development updates.
                                            The newsletter comes on the first friday of the month, so no spam in your inbox. Also, with sign up, you
                                            have the oppurtunity to vote in community polls for new collectibles.
                                        </p>
                                        <form>
                                            <input type="email" className="box-signup-form" placeholder="legend27@gmail.com"/>
                                            <input type="submit" value="Sign Up"></input>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        </td>
                    </tr>
                    <tr width="100%">
                        <div className="footer-copyright">©2021 Brawler, Inc. All Rights Reserved</div>
                    </tr>
                    </tbody>
                </table>
            </footer>
        );
    }
} 

export default Footer;