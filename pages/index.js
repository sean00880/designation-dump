import React, { useRef }  from 'react'
import Services from '../components/Home/HomeServices'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import { Design, Drawing, Learning, TowerCrane } from '../public/svg/service/IconService'
import Marquee from "react-fast-marquee";
const headerBG = "img/hero.jpg";
import emailjs from '@emailjs/browser';
const right = "/img/about/right2.jpg"
const rightImage = "/img/service/right-image.jpg"
const footerImage = "/img/footer/bg.jpg"
const testimonial = "/img/testimonial/bg.jpg"
const portfolio1 = "/img/portfolio/1.jpg"
const portfolio2 = "/img/portfolio/2.jpg"
const portfolio3 = "/img/portfolio/3.jpg"
const portfolio4 = "/img/portfolio/4.jpg"
const map = "/img/blog/map.png"
const blog1 = "/img/blog/1.jpg"
const blog2 = "/img/blog/2.jpg"
const blog3 = "/img/blog/3.jpg"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Spin from 'react-reveal/Spin';
import Image from 'next/image'
import OldBottle from '../public/svg/service/oldbottle-broken2.svg'


export default function Index() {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_it2ab1j', 'template_12gw11o', form.current, 'jUn1z-vodKfQLijZ7')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};
	return (
		<>
			<Title title='Junk Removal Near Columbus Ohio' />
			<Layout className={"nobglight"}>

				{/* <!-- Hero Header --> */}
				<div className="fn_cs_hero_header">
                        <div className="container2">
                            <div className="content_holder">
                                <div className="title_holder">
						<Fade left>
									<Flip top>
                                    <h1>Professional Junk Removal Near Columbus, Ohio</h1>
									</Flip>
									<Flip bottom>
                                    <p>Based in Canal Winchester, Ohio. </p>
									</Flip>
						</Fade>
                                </div>
                                <Slider />
                            </div>
                            <div className="content_holder2">
						<Fade right>
                            <div className="contact_left">
								<div className="container3">
								<Marquee className='marquee-list-container' gradientColor={0} speed={20}> <ul className="marquee-list" aria-hidden="true"><li>Commercial Cleanout</li><li>Property Cleanout</li><li>Storage Cleanout</li><li>Construction Debris Removal</li><li>Appliance Removal</li><li>Shed Removal</li><li>Deck Removal</li><li>Junk Removal</li></ul></Marquee>
                                </div>
									<h3 style={{"fontStyle":"italic"}}>Receive Your FREE Instant Quote!</h3>
									<form className="contact_form" ref={form} onSubmit={sendEmail} >


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="empty_notice"><span>Get In Touch With Us</span></div>
										{/*  */}
										<div className="items">
											<div className="item">
												<input id="name" type="text" name="name" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" name="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<input id="phone" type="text" name="contact" placeholder="Phone" />
											</div>
											<div className="item">
												<input id="subject" type="text" name="subject" placeholder="Subject" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message" name="message"></textarea>
											</div>
											<div className="item">
												<input id="send_message" value="Connect With Us" type="submit" />
											</div>
										</div>
									</form>
								</div>
							</Fade>
                                
                            </div>
                        </div>
                        <div className="bg_holder">
                            <div className="o_img" style={{ background: `url(${headerBG})` }}></div>
                            <div className="o_color"></div>
                        </div>
                    </div>
                    {/* <!-- /Hero Header --> */}

				<div className="fn_cs_services_classic video_enable">
					<div className="container max1500">


						 {/* <!-- Introduce Shortcode --> */}
						 <div className="fn_cs_introduce_wrap fn_cs_lightgallery" data-url-show="yes" data-wing-switch="enable">
                        <div className="container">
                            <div className="fn_cs_introduce">

                                <span className="wing11"></span>
                                <span className="wing12"></span>
                                <span className="wing21"></span>
                                <span className="wing22"></span>
                               
                                <div className="o_color"></div>

                                <div className="content_holder">
                                    <div className="title_holder">
                                        <h5>Follow Us </h5>
                                        <h3>On Social Media:</h3>
                                        
                                    </div>
									<h4 style={{color:'#4c5850'}}>We are Columbus, Ohio's preferred Junk Removal business. Follow us & get updated on our latest news, promotions and more.</h4>
									<div style={{ justifyContent: 'space-around'}} className='intro'>
										<a href='https://www.instagram.com/designationdumpllc/'>
										<div style={{textAlign: 'center' ,borderRadius:'8px'}} className='iconWrapper'>
											
										<Image src='/img/about/instagram.png' width='45' height='45' className='icon'/>
										<br />
										<h3>Instagram</h3>
										</div>
										</a>
										<a href='https://www.facebook.com/profile.php?id=100088548921310'>
										<div style={{ textAlign: 'center',borderRadius:'8px'}} className='iconWrapper'>
										<Image src='/img/about/facebook.png' width='45' height='45' className='icon'/>
										<br />
										<h3>Facebook</h3>
										</div>
										</a>
									</div>
                                </div>
                            </div>
                        </div>
                    </div>

						{/* <!-- About Section --> */}
				<div className="about_section" style={{"minHeight":"100vh", "display":"flex","flexDirection":"column","justifyContent":"center"}}>

{/* <!-- About Shortcode --> */}
<div className="fn_cs_about">
	<div className="container">
		<div className="a_inner">
				<Fade left>
			<div className="leftpart">
				<div className="title_holder">
				<Flip top>
					<h3 className="title">We are Designation Dump</h3>
									</Flip>
									
					<p> Designation dump is a junk removal company that is located in Canal Winchester, Ohio. We are a group of young men with a vision to clean up one property at a time. We have integrity, and we are absolutely sure you will love the communication and work we do for you. We donate anything we can that is in good condition to local charities such as Salvation Army or Habatit for Humanity. There are instances where we can find new owners for certain items we try to re use as much as we can.</p>
				</div>
			</div>
					</Fade>
					<Fade right>
			<div className="rightpart">
				{/* <div className="r_inner" id="scene">
					<div className="layer border" data-depth="0.3">
						<span className="span1"></span>
						<span className="span2"></span>
						<img src="img/thumb/500-560.jpg" alt="" />
					</div>
					<div className="img_holder layer" data-depth="0.5">
						<img src="img/thumb/500-560.jpg" alt="" />
						<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
					</div>
					<div className="dots layer" data-switch="disable" data-depth="0.9">
						<img src="img/thumb/500-560.jpg" alt="" />
					</div>
				</div> */}
				<div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>

					<div className="img_holder layer" data-depth="0.5" style={{ "display": "flex", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
						<img src="img/thumb/500-560.jpg" alt="" />
						<div className="abs_img" data-bg-img="img/about/right2.jpg" style={{ "backgroundImage": "url(img/about/right2.jpg)" }}></div>
					</div>
				</div>
			</div>
			</Fade>
		</div>
	</div>
</div>
{/* <!-- /About Shortcode --> */}

</div>
{/* <!-- /About Section --> */}
<div className="title_holder" style={{ "color": "#455245"}} >
<Slide bottom>
										<h1  style={{ "color": "black", "textAlign": "center", "borderBottom":"3px solid black"}}>Junk Removal in Canal Winchester, OH</h1>
										</Slide>
										<p>Do you feel totally overwhelmed by your junk situation? Do you have one or two large items that might be hazardous or at the very least challenging for you to remove on your own? Designation Dump is available to help! To begin with anything you could have in mind, get in touch with us right away. You can use our expertise, equipment, friendliness, and professionalism to solve any problems you might be having. Everything can be handled by us in the safest, most effective way possible.</p>
										<p>For local communities, junk disposal is a crucial component of sustainable waste management. It allows us to reuse or properly dispose of materials that might otherwise be thrown out as trash and helps keep our environment clean. Additionally, it lessens the quantity of trash that is disposed of in landfills and incinerators, making the world a cleaner and safer environment.</p>
										<p>We provide junk removal services for home and commercial clients, including but not limited to offices, retail establishments, construction sites, and building sites. We take pleasure in our customer service and enjoy a challenge, so we take on any challenging jobs, no matter how big or small, and we always make sure that your waste is disposed appropriately, whether that means being recycled, donated, or in some other way.</p>
									</div>
									<div className="listWrapper" style={{ "backgroundImage": `url(${footerImage})`, "backgroundAttachment":"fixed","backgroundSize":"cover"  }}>
									<div className="listBorder" style={{ "background": "#374736c4"  }}>
						<div className="list">

							<ul>
						
							<h2 className="headings">Featured Services</h2>
						
								<li>
									<div className="item">
										<Link href="/services/junk-removal"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/trash.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Junk <br /> Removal</h3>
										<p>We provide quality junk removal services for private residences including houses, apartments, and condos. We manage all the labor-intensive lifting and moving while accommodating your hectic schedule.</p>
										<span className="more_details">
											<Link href="#"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<Link href="/services/property-cleanout"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/property.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Property <br />Cleanout</h3>
										<p>Our larger trucks and professionalism will help you, whether you're preparing a space for a new tenant or need to make space in your garage. Your apartment, house, basement, attic or garage cleanout can be easily handled with Designation Dump.</p>
										<span className="more_details ixon">
											<Link href="#"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<Link href="/services/commercial-cleanout"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/commercial.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Commercial <br /> Cleanout</h3>
										<p>Finding another method to complete the task is necessary if that is not an option or if you frequently need massive commercial garbage removed, and that's where Designation Dump's full 'Commercial Cleanout' service comes in.</p>
										<span className="more_details">
											<Link href="#"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<Link href="/services/construction-removal"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										
										<Image src='/svg/service/construction.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Construction <br /> Debris Removal</h3>
										<p>You can rely on Designation Dump to dispose of any construction debris that needs to be cleared from your worksite with efficiency.</p>
										<span className="more_details">
											<Link href="#"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
							</ul>
						</div>
						</div>
						</div>
					</div>
				</div>

				{/* <!-- Description Shortcode --> */}
				<div className="fn_cs_description" data-margin-bottom="33" style={{ "float": "right", "width": "auto",}}>
					<div className="container max1500">
						<div className="desc_holder max500">
							<p>We take pleasure in giving you an outstanding junk removal experience at Designation Dump. Choose from our wide range of removal and cleanout servies.</p>
						</div>
					</div>
				</div>
				{/* <!-- /Description Shortcode --> */}

				{/* <!-- Button Shortcode --> */}
				<Slide top>
				<div className="fn_cs_button" style={{ "width": "auto"}}>
					<div className="container max1500">
						<div className="inner max500">
							<Link href="/services"><a>Full List of Services</a></Link>
						</div>
					</div>
				</div>
				</Slide>
				{/* <!-- /Button Shortcode --> */}




				{/* <!-- Service Section --> */}
				<div className="service_section">

					{/* <!-- About with Rating Shortcode --> */}
					<div className="fn_cs_about_with_rating">
						<div className="container">
							<div className="awr_inner">
								<div className="left_part">
									<div className="title_holder">
									<Flip top>
										<h3 style={{"color":"#608560"}}>Why choose Designation Dump?</h3>
										</Flip>
										<Fade top>
										<p>Beyond just removing unwanted objects from your house, our junk removal services go above and beyond. We're willing to do all the labor-intensive work for your particular waste management requirements—we accept any job, no matter how big or small.</p>
										<p>Our key mission is to reduce the carbon footprint by making the most of the garbage through donation, recycling, and limited disposal.</p>
										</Fade>
									</div>
								</div>
								<div className="right_part">
									<div className="r_inner">
										<div className="bottom_section">
											<div className="list">
												<ul>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Reduce Carbon Footprint</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Professional work </p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>We take on jobs of varying complexities</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Available 24/7.</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About with Rating Shortcode --> */}

				</div>
				{/* <!-- /Service Section --> */}

				{/* <!-- Principles Modern --> */}
				<div className="fn_cs_principles_modern">
				<div className="title_holder_main"  style={{ "maxWidth": "100%", "padding": "5vh 12vh", "lineHeight":"2"}}>
										
										<h1  style={{ "color": "#4e534f", "textAlign": "center", "borderBottom":"3px solid white", "borderColor":"white"}}>Our 3 Step Process</h1>
										<p>Designation Dump is available to assist with organizing your clutter and removing your unwanted items. For all of your hauling needs, our highly regarded junk removal service offers quick service and simple solutions.</p>
										<p>We can remove non-hazardous items, construction waste, and yard garbage from any part of your property, including the attic, basement, and backyard. We then dispose everything responsibly.</p>
									</div>
							
					<div className="container" style={{"padding": "8vh"}}>
					
						<div className="inner">
							
							<div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
							
							<ul className="fn_cs_miniboxes">
							
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/process"><a></a></Link>
											<h3>Pick a Service</h3>
											<p>Browse through our list of services and identify the one you require assistance with.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">01</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/process"><a></a></Link>
											<h3>Contact Us</h3>
											<p>Contact us with a description of your needs and our representatives will get in touch with you with quote estimates.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">02</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/process"><a></a></Link>
											<h3>Begin Removal</h3>
											<p>There are no further actions needed from you besides opening the door when we arrive. We'll handle all of the heavy lifting. Simply point out the location of the rubbish, and we'll remove it.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">03</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- /Principles Modern --> */}

				{/* <!-- Principles --> */}
				<div className="fn_cs_principles">
                        <div className="container">
                            <div className="inner">
                                <div className="left_part">
								<Flip top>
                                    <h3>Our Core Values</h3>
									</Flip>
									<Fade top>
                                    <p>At Designation Dump, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values.</p>
									<br />
                                    <p>Serving an impressive list of long-term clients, we are an organization of seasoned professionals with a tremendous breadth of junk removal experience and expertise across the state of Ohio.</p>
									</Fade>
							    </div>
                                <div className="right_part">
                                    <ul className="masonry">
										<Spin right>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Humility</h3>
                                                    <p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
                                                </div>
                                                <div className="number_holder">01</div>
                                            </div>
                                        </li>
										</Spin>
										<Spin left>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Honesty</h3>
                                                    <p>Be sure of our facts and be honest and straightforward in all of our dealings with each other and our clients.</p>
                                                </div>
                                                <div className="number_holder">02</div>
                                            </div>
                                        </li>
										</Spin>
										<Spin right>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Empathy</h3>
                                                    <p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
                                                </div>
                                                <div className="number_holder">03</div>
                                            </div>
                                        </li>
										</Spin>
										<Spin left>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Quality Hard Work</h3>
                                                    <p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
                                                </div>
                                                <div className="number_holder">04</div>
                                            </div>
                                        </li>
										</Spin>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Principles --> */}


				


				


				{/* <!-- Call to Action --> */}
				<Slide bottom>
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>Let us assist you in keeping your environment clean, safe & healthy!</h3>
								<p>We believe in giving back to the community. We strive to do so by donating salvagable goods, recycling and following best disposal practices to dispose the rest. Our sustainable junk removal solutions help reduce carbon emissions and protect our environement.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Contact Us</a></Link>
							</div>
						</div>
					</div>
				</div>
				</Slide>
				{/* <!-- /Call to Action --> */}

				{/* <!-- Testimonial Section --> */}

				{/* <!-- /Testimonial Section --> */}


				{/* <!-- Project Sticky Full
				<div className="fn_cs_project_sticky_full">
					<div className="inner">
						<div className="left_part">
							<div className="fn_cs_sticky_section">
								<h3>Our latest projects.</h3>
								<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
								<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
								<Link href="/portfolio"><a>View All Projects</a></Link>
							</div>
						</div>

						<div className="right_part">
							<div className="fn_cs_sticky_section">
								<ul>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio1})` }}></div>
												<Link href="/portfolio-single-1"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-1"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-1"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio2})` }}></div>
												<Link href="/portfolio-single-2"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-2"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-2"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio3})` }}></div>
												<Link href="/portfolio-single-3"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-3"><a>Industify Gas and Oil Organization</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-3"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio4})` }}></div>
												<Link href="/portfolio-single-4"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-4"><a>Designation Dump</a></Link></h3>
												<span className="desc">We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.…</span>
												<p>
													<Link href="/portfolio-single-4"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>


				 --> */}
				{/* <!-- /Project Sticky Full --> */}


				{/* <!-- Blog Section --> */}
				<div className="blog_section">
					

					<div className="overlay" style={{ "backgroundImage": `url(${map})` }}></div>
					

					{/* <!-- Main Title --> */}
					<div className="fn_cs_main_title">
					<div className="title_holder" style={{ "maxWidth": "100%", "padding": "0 40px"}}>
						<Flip top>
										<h1  style={{ "color": "black", "textAlign": "center", "borderBottom":"3px solid black"}}>Our Blog</h1>
										</Flip>
										<p>At Desgination Dump, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
										</div>
						<div className="container">
							
							<div className="title_holder">
								<h3>Our latest posts:</h3>
							</div>
						</div>
					</div>
					{/* <!-- /Main Title --> */}

					{/* <!-- Triple Blog Modern Shortcode --> */}
					<div className="fn_cs_triple_blog_modern fn_alpha">
						<div className="container">
							<div className="inner">

								<ul>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog1})` }}>
												<div className="time">
													<span></span>
													<h3>28</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-1"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Designation Dump</a></Link> — In <Link href="#"><a>Columbus, OH</a></Link></p>
												<h3><Link href="/blog-single-1"><a>How much does removing junk cost?</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-1"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog2})` }}>
												<div className="time">
													<span></span>
													<h3>27</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-2"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Designation Dump</a></Link> — In <Link href="#"><a>Columbus, OH</a></Link></p>
												<h3><Link href="/blog-single-2"><a>Best Seasons For Junk Removal</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-2"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog3})` }}>
												<div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div>
												<Link href="/blog-single-3"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												<p className="t_header">By <Link href="#"><a>Designation Dump</a></Link> — In <Link href="#"><a>Columbus, OH</a></Link></p>
												<h3><Link href="/blog-single-3"><a>Why Use a Junk Removal Company Before Selling a Property?</a></Link></h3>
												<p className="t_footer"><Link href="/blog-single-3"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
								</ul>

							</div>
						</div>
					</div>
					{/* <!-- /Triple Blog Modern Shortcode --> */}

				</div>
				{/* <!-- /Blog Section --> */}

			</Layout>

		</>
	)
}
