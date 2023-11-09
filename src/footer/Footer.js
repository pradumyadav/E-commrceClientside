

        import { Link } from "react-router-dom"
        import "./Footer.css"
        import img1 from "../img/icons8-facebook.gif"
        import img2 from "../img/icons8-instagram.gif"
        import img3 from "../img/icons8-linkedin-circled.gif"
        import img4 from "../img/icons8-twitter.gif"


         export default function Footer (){
                return(
                    <div>
                        <nav className="footer_Nav">

                            <div className="footer_Child1">
                               
                                <div>
                                <h3>UrbanPulse</h3>
                                    <p className="font_Size">STay Home - Shop Online</p>
                                    <p className="font_Size">Where you can always find something you want..</p>
                                </div>
                            </div>
                            <div className="footer_Child2">
                               
                                <div className="footer_Link">
                                <h3>Quick Links</h3>
                                    <Link to="/" className="footer_Link1">HOME</Link>
                                    <Link to="/mobile" className="footer_Link2">MOBILE</Link>
                                    <Link to="/clothe" className="footer_Link3">CLOTHE</Link>
                                    <Link to="/furniture" className="footer_Link4">FURNITURE</Link>
                                    <Link to="/watch" className="footer_Link5">WATCH</Link>
                                    <Link to="/gym" className="footer_Link6">GYM</Link>
                                </div>
                            </div>
                            <div className="footer_Child3">
                               <h3>Get Started</h3>
                                <div>
                                    <p className="font_Size">Get access to your full Info and knowledge.</p>
                                    <Link className="font_Size">Login Now</Link>
                                </div>
                            </div>
                            <div className="footer_Child4">
                                <h3>Contact Us</h3>
                                <div className="icons_Flex">
                                    
                                    <div><img className="footer_Icons" src={img1} alt="Not Found"/></div>
                                    <div><img className="footer_Icons" src={img2} alt="Not Found"/></div>
                                    <div><img className="footer_Icons" src={img3} alt="Not Found"/></div>
                                    <div><img className="footer_Icons" src={img4} alt="Not Found"/></div>
                                </div>
                            </div>


                        </nav>

                    </div>
                )
            }