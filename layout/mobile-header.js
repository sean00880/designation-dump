import React, { useState, useEffect } from 'react'
import MetisMenu from 'metismenujs';
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';
import Image from 'next/image';
import Flip from 'react-reveal/Flip';

export default function MobileHeader() {

	const [isMobileMenu, setMobileMenu] = useState(false);
	const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		new MetisMenu("#metismenu");
	}, []);

	return (
		<>
			<div className="industify_fn_mobilemenu_wrap">
				{/* <!-- TOLL FREE MOBILE --> */}
				<div className="m_toll_free_lang">
					<div className="lang_switcher">
						<ul>
							<li className="active"><span><Image src='/../public/img/five-star.png' width={100} height={100}></Image></span></li>
						</ul>
					</div>
					<div className="m_toll_free">
						<span className="shape1"></span>
						<span className="shape2"></span>
						<span className="shape3"></span>
						<div className="tf_in">
							<div className="img_holder" style={{ "backgroundImage": "url(img/call.png)" }}></div>
							<p><span>Toll Free:</span> <a href="+1-220-666-2520" style={{color:"white"}}>+1(220)666-2520</a></p>
						</div>
					</div>
				</div>
				{/* <!-- /TOLL FREE MOBILE --> */}
				{/* <!-- LOGO & HAMBURGER --> */}
				<div className="logo_hamb">
					<div className="in">
					<div className="menu_logo">
                        <Link href="/"><a>
                            <div className="flex-col flex">
                            <img className="desktop_logo" src="img/footer/DDLogo.png" alt="Designation Dump" />
                            </div>
                        </a></Link>
                    </div>
						<div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /LOGO & HAMBURGER --> */}
				{/* <!-- MOBILE DROPDOWN MENU --> */}
				<Flip bottom>
				<div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
					<div>
						<nav >
							<ul className="metismenu" id="metismenu">
								<li>
									<Link href="#"><a className="has-arrow">Home</a></Link>
									<ul>
										<li><Link href="/"><a>Home Alpha</a></Link></li>
										<li><Link href="/index-1"><a>Home Beta</a></Link></li>
										<li><Link href="/index-2"><a>Home Gama</a></Link></li>
										<li><Link href="/index-3"><a>Home Delta</a></Link></li>
									</ul>
								</li>
								<li><Link href="/portfolio"><a>Projects</a></Link></li>
								<li>
									<Link href="#"><a className="has-arrow">Our Services</a></Link>
									<ul>
										<li><Link href="/junk-removal"><a>Junk Removal</a></Link></li>
										<li><Link href="/service-single-8"><a>Automative Manufacturing</a></Link></li>
										<li><Link href="/service-single-7"><a>Chemical Industry</a></Link></li>
										<li><Link href="/service-single-6"><a>Oil and Gas Industry</a></Link></li>
										<li><Link href="/service-single-5"><a>Energy &#038; Commodities</a></Link></li>
										<li><Link href="/service-single-4"><a>Medical Devices</a></Link></li>
										<li><Link href="/service-single-3"><a>Housewares &#038; Home Decor</a></Link></li>
										<li><Link href="/service-single-2"><a>Textiles &#038; Apparel</a></Link></li>
										<li><Link href="/service-single-1"><a>Construction &#038; Engineering</a></Link></li>
									</ul>
								</li>
								<li>
									<Link href="#"><a className="has-arrow">Pages</a></Link>

									<ul>
										<li><Link href="/gallery"><a>Gallery</a></Link></li>
										<li><Link href="/404"><a>404 Page</a></Link></li>
										<li><Link href="/principles"><a>Our Principles</a></Link></li>
										<li><Link href="/services"><a>Our Services</a></Link></li>
										<li><Link href="/blog-full"><a>Blog Full</a></Link></li>
										<li><Link href="/protected"><a>Protected Page</a></Link></li>
									</ul>
								</li>
								<li><Link href="/blog"><a>Blog</a></Link></li>
								<li><Link href="/contact"><a>Contact</a></Link></li>
							</ul>
						</nav>
					</div>
				</div>
				</Flip>
				{/* <!-- /MOBILE DROPDOWN MENU --> */}
			</div>
		</>
	)
}
