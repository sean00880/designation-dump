import React from 'react'
import Services from '../components/Home/HomeServices'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import { Design, Drawing, Learning, TowerCrane } from '../public/svg/service/IconService'
const headerBG = "img/hero.jpg";

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


export default function Index() {
	return (
		<>
			<Title title='Junk Removal Near Columbus Ohio' />
			<Layout className={"nobglight"}>
				<Title title='Junk Removal Near Columbus Ohio' />

				{/* <!-- Hero Header --> */}
				<div className="fn_cs_hero_header">
                        <div className="container2">
                            <div className="content_holder">
                                <div className="title_holder">
                                    <h1>Professional Junk Removal Near Columbus, Ohio</h1>
                                    <p>Based in Canal Winchester, Ohio. </p>
                                </div>
                                <Slider />
                                
                            </div>
                            <div className="content_holder2">
                            <div className="contact_left">
									<h3>Receive Your FREE Instant Quote!</h3>
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										{/*  */}
										<div className="items">
											<div className="item">
												<input id="name" type="text" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message"></textarea>
											</div>
											<div className="item">
												<Link href="#"><a id="send_message">Send Message</a></Link>
											</div>
										</div>
									</form>
								</div>
                                
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

						<div className="button_inner">
							<span className="rounded"></span>
							<Link  href="https://www.youtube.com/watch?v=cnzFPq_8428"><a className="popup-youtube"></a></Link>
						</div>
						<div className="video_holder">
							<span className="video_bg"></span>
						</div>

						{/* <!-- About Section --> */}
				<div className="about_section">

{/* <!-- About Shortcode --> */}
<div className="fn_cs_about">
	<div className="container">
		<div className="a_inner">
			<div className="leftpart">
				<div className="title_holder">
					<h3 className="title">We are Designation Dump</h3>
					<p> Designation Dump is a rising pioneer when it comes to offering waste management services in Canal Winchester, Ohio, and the nearby areas in Columbus, Ohio..</p>
					<p>We are devoted to offering the highest caliber of work with professionalism to keep your enviorenment clean and safe.</p>
				</div>
				<div className="sign_holder">
					<h3 className="name">Josh D. Reichley</h3>
					<p className="occ">C.E.O.</p>
				</div>
			</div>
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
					<div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
						<span className="span1"></span>
						<span className="span2"></span>
						<img src="img/thumb/500-560.jpg" alt="" />
					</div>
					<div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
						<img src="img/thumb/500-560.jpg" alt="" />
						<div className="abs_img" data-bg-img="img/about/right2.jpg" style={{ "backgroundImage": "url(img/about/right2.jpg)" }}></div>
					</div>
					<div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
						<img src="img/thumb/500-560.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!-- /About Shortcode --> */}

</div>
{/* <!-- /About Section --> */}
<div className="title_holder" style={{ "color": "#455245"}} >
										<h1  style={{ "color": "black", "textAlign": "center", "borderBottom":"3px solid black"}}>Junk Removal in Canal Winchester, OH</h1>
										<p>Do you feel totally overwhelmed by your junk situation? Do you have one or two large items that might be hazardous or at the very least challenging for you to remove on your own? Designation Dump is available to help! To begin with anything you could have in mind, get in touch with us right away. You can use our expertise, equipment, friendliness, and professionalism to solve any problems you might be having. Everything can be handled by us in the safest, most effective way possible.</p>
										<p>For local communities, junk disposal is a crucial component of sustainable waste management. It allows us to reuse or properly dispose of materials that might otherwise be thrown out as trash and helps keep our environment clean. Additionally, it lessens the quantity of trash that is disposed of in landfills and incinerators, making the world a cleaner and safer environment.</p>
										<p>We provide junk removal services for home and commercial clients, including but not limited to offices, retail establishments, offices, and building sites. We take pleasure in our customer service and enjoy a challenge, so we take on any challenging jobs, no matter how big or small, and we always make sure that your waste is disposed appropriately, whether that means being recycled, donated, or in some other way.</p>
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
										<Learning className="fn__svg" />
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
										<Drawing className="fn__svg" />
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
										<Design className="fn__svg" />
										</span>
										<h3>Commercial <br /> Cleanout</h3>
										<p>Under a Construction Management contract, the client secures the services of a construction manager to work with the design team.</p>
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
										
										<TowerCrane className="fn__svg" />
										</span>
										<h3>Construction <br /> Debris Removal</h3>
										<p>In this section, we let clients select a design-build arrangement when they want to work with one contract entity, instead of several contractors and consultants.</p>
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
				<div className="fn_cs_button" style={{ "width": "auto"}}>
					<div className="container max1500">
						<div className="inner max500">
							<Link href="/services"><a>Full List of Services</a></Link>
						</div>
					</div>
				</div>
				{/* <!-- /Button Shortcode --> */}




				{/* <!-- Service Section --> */}
				<div className="service_section">

					{/* <!-- About with Rating Shortcode --> */}
					<div className="fn_cs_about_with_rating">
						<div className="container">
							<div className="awr_inner">
								<div className="left_part">
									<div className="title_holder">
										<h3 style={{"color":"#608560"}}>Why choose Designation Dump?</h3>
										<p>Beyond just removing unwanted objects from your house, our junk removal services go above and beyond. We're willing to do all the labor-intensive work for your particular waste management requirements—we accept any job, no matter how big or small.</p>
										<p>Our key mission is to reduce the carbon footprint by making the most of the garbage through donation, recycling, and limited disposal.</p>
									</div>
									<div className="signature">
										<Certificate className="fn__svg" />
										<p>We have a<br />ISO Certificate.</p>
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
				<div className="title_holder"  style={{ "maxWidth": "100%", "padding": "5vh 12vh", "lineHeight":"2"}}>
										
										<h1  style={{ "color": "white", "textAlign": "center", "borderBottom":"3px solid white", "borderColor":"white"}}>Our 3 Step Process</h1>
										<p>Designation Dump is available to assist with organizing your clutter and removing your unwanted items. For all of your hauling needs, our highly regarded junk removal service offers quick service and simple solutions.</p>
										<p>We can remove non-hazardous items, construction waste, and yard garbage from any part of your property, including the attic, basement, and backyard. We then dispose everything responsibly.</p>
									</div>
							
					<div className="container">
					
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
                                    <h3>Our Core Values</h3>
                                    <p>At Designation Dump, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values.</p>
									<br />
                                    <p>Serving an impressive list of long-term clients, we are an organization of seasoned professionals with a tremendous breadth of construction experience and expertise across multiple industries.</p>
                                </div>
                                <div className="right_part">
                                    <ul className="masonry">
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Humility</h3>
                                                    <p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
                                                </div>
                                                <div className="number_holder">01</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Honesty</h3>
                                                    <p>Be sure of our facts and be honest and straightforward in all of our dealings with each other and our clients.</p>
                                                </div>
                                                <div className="number_holder">02</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Empathy</h3>
                                                    <p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
                                                </div>
                                                <div className="number_holder">03</div>
                                            </div>
                                        </li>
                                        <li className="masonry_in">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <h3>Quality Hard Work</h3>
                                                    <p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
                                                </div>
                                                <div className="number_holder">04</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Principles --> */}


				


				


				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>Let us assist you in keeping your environment clean, safe & healthy!</h3>
								<p>We believe in giving back to the community. We strive to do so by donating salvagable goods, recycling and following best disposal practices to dispose the rest. Our sustainable junk removal solutions help reduce carbon emissions and protect our environement.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Our Responsibility</a></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Call to Action --> */}

				{/* <!-- Testimonial Section --> */}
				<div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

					<div className="overlay"></div>

					{/* <!-- Single Testimonial Shortcode --> */}
					<div className="fn_cs_single_testimonial">
						<div className="container">
							<div className="inner">
								<Quotes className="fn__svg"/>
								<div className="content_holder">
									<p>Hiday Motors needed to build a brand new 28,000 sf facility that would both meet our needs and comply with GMs standards - which seemed daunting, to say the least. Designation Dump alleviated all of our concerns and communicated with us every step of the way. We have received dozens of compliments from our customers, and our employees love the new store!</p>
									<h3>Steve Lehman</h3>
									<h5>CEO of Hiday Motors.</h5>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Single Testimonial Shortcode --> */}

				</div>
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
										<h1  style={{ "color": "black", "textAlign": "center", "borderBottom":"3px solid black"}}>Our Blog</h1>
										<p>At Desgination Dump, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
										<p>Desgination Dump is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
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
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-1"><a>Laing O’Rourke: Moves, projects and bids</a></Link></h3>
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
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-2"><a>How to turn Victorian gasholders apartments</a></Link></h3>
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
												<p className="t_header">By <Link href="#"><a>Frenify</a></Link> — In <Link href="#"><a>Australia</a></Link></p>
												<h3><Link href="/blog-single-3"><a>CITB appoints Peter Lauener as new chairman</a></Link></h3>
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
