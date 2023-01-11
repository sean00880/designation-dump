import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="industify_fn_footer">
                <div className="top_footer">
                    <div className="top_footer_img" style={{ "background": "url(img/footer/bg.jpg)" , "backgroundAttachment":"fixed" }}></div>

                    {/* <!-- /SUBSCRIBE --> */}
                    {/* <!-- TRIPLE WIDGET --> */}
                    <div className="footer_widget">
                        <div className="container">
                            <div className="inner">
                                <ul className="widget_area">
                                    <li>
                                        <div className="item">
                                        <div className="flex-col flex">
                            <h3>Designation Dump</h3> <br /><h5> Waste Management Services</h5>
                            </div>
                                            <div className="textwidget">
                                                <p>We are focused on user-driven outcomes, we strive to create meaningful connections for users through considered strategy and innovation.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>Business Hours</span>
                                            </div>
                                            <div className="industify_fn_widget_business_hours">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Monday-Friday:</span>
                                                                <span className="hours">24 Hours</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Saturday:</span>
                                                                <span className="hours">24 Hours</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Sunday:</span>
                                                                <span className="hours">24 Hours</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Holidays:</span>
                                                                <span className="hours">Hours may vary</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title"><span>Helpful Links</span></div>
                                            <div className="widget_nav_menu">
                                                <ul className="menu">
                                                    <li><Link href="/services"><a>Our Services</a></Link></li>
                                                    <li><Link href="/process"><a>Process</a></Link></li>
                                                    <li><Link href="/blog"><a>Blog</a></Link></li>
                                                    <li><Link href="/contact"><a>Contact</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /TRIPLE WIDGET --> */}
                </div>
                {/* <!-- BOTTOM --> */}
                <div className="footer_bottom">
                    <div className="container">
                        <div className="footer_bottom_in">
                            <div className="bottom_widget">
                                <div className="widget_nav_menu">
                                    <ul className="menu">
                                        <li><Link href="/services"><a>Services</a></Link></li>
                                        <li><Link href="#"><a>Affliates (Coming Soon)</a></Link></li>
                                        <li><Link href="#"><a>Disclaimer (Coming Soon)</a></Link></li>
                                        <li><Link href="#"><a>Privacy Policy (Coming Soon)</a></Link></li>
                                        <li><Link href="#"><a>Career (Coming Soon)</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_copyright">
                                <p>&copy; 2023 | Designation Dump, LLC. All Rights Reserved <br /> Website by <Link href="https://www.decodedweb.us/"><a target="_blank" rel="noreferrer">Decoded Web</a></Link></p>
                            </div>
                            <Link href="#">
                                <a className="industify_fn_totop">
                                    <span className="top"></span>
                                    <span className="text">To Top</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!-- /BOTTOM --> */}
            </footer>
        </>
    )
}
