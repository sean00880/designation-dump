import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';
const footerImage = "/img/footer/bg.jpg"
const background = "img/call.png"

export default function DesktopHeader() {

    const [isActive, setActive] = useState(false);
    const activeTrueFalse = () => setActive(!isActive)

    return (
        <>
        
									
            <div className="industify_fn_header" style={{"position":"fixed", "backgroundImage": `url(${footerImage})`, "backgroundAttachment":"fixed","backgroundSize":"cover",}}>
                
            <div className="backgroundWrapper" style={{  "background": "radial-gradient(ellipse at top, #595a59, #092009b5), radial-gradient(ellipse at bottom, #d6e4c9, #5d615dd6)", "color":"white",  "display":"flex"}}>
                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/"><a>
                            <div className="flex-col flex">
                            <h3>Designation Dump LLC</h3> <br /><h5> Waste Management Services</h5>
                            </div>
                        </a></Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/services"><a>Our Services</a></Link>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children"><Link href="/services/waste-removal-services"><a>Removal</a></Link>
                                    
                                    <ul className="sub-menu">
                                    <li><Link href="/services/junk-removal"><a className='text-white'>Junk Removal</a></Link></li>
                                    <li><Link href="/services/property-cleanout"><a>Appliance Removal</a></Link></li>
                                    
                                    <li><Link href="/services/construction-removal"><a className='text-white'>Construction Debris Removal</a></Link></li>
                                    <li><Link href="/services/deck-removal"><a className='text-white'>Deck Removal</a></Link></li>
                                    
                                    <li><Link href="/services/shed-removal"><a className='text-white'>Shed Removal</a></Link></li>
                                        </ul>
                                        
                                    </li>
                                    
                                    <li className="menu-item-has-children"><Link href="/services/cleanout-services"><a>Cleanouts</a></Link>
                                    
                                    <ul className="sub-menu">
                                    <li><Link href="/services/commercial-cleanout"><a>Commercial Cleanout</a></Link></li>
                                    <li><Link href="/services/property-cleanout"><a className='text-white'>Property Cleanout</a></Link></li>
                                    <li><Link href="/services/storage-cleanout"><a className='text-white'>Storage Cleanout</a></Link></li>
                                        </ul>
                                        
                                    </li>
                                    
                                    
                                </ul>
                            </li>
                            <li >
                                <Link href="/process"><a>Process</a></Link>
                            </li>
                            <li>
                                <Link href="/blog"><a>Blog</a></Link>
                            </li>
                            <li>
                                <Link href="/contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="toll_free_lang">

                        <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> 1-800-987-6543</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- /Header: Bottom Panel --> */}

            </div>
            </div>
            <div className="my-class"></div>
        </>
    )
}
