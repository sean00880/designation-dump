import Link from 'next/link'
import React from 'react'
import Layout from '../../layout/layout'
import Sidebar from '../../layout/sidebar'
import Title from '../../layout/title'
const footerImage = "/img/footer/bg.jpg"
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../../public/svg/icon'
import { Design, Drawing, Learning, TowerCrane } from '../../public/svg/service/IconService'
import List from '../../layout/list'



export default function Services() {
	return (
		<>
			<Title title='Cleanout Services' />
			<Layout>

				{/* Page Title */}
				<div className="industify_fn_pagetitle">

					
					<div className="container">
						<div className="title_holder">
							<h3>Cleanout Services</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Services</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}

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
							<h2 className="headings">Cleanout Services</h2>
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
										<Link href="/services/storage-cleanout"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Drawing className="fn__svg" />
										</span>
										<h3>Storage <br />Cleanout</h3>
										<p>Our larger trucks and professionalism will help you, whether you're preparing a space for a new tenant or need to make space in your garage. Your apartment, house, basement, attic or garage cleanout can be easily handled with Designation Dump.</p>
										<span className="more_details ixon">
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


				{/* Sidebar Page */}


									
				<div className="industify_fn_sidebarpage">
					<div className="container">
						
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">

								<ul className="industify_fn_service_list">
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.jpg)" }}></div>
													<Link href="/services/junk-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/junk-removal"><a>Junk Removal</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
												<div className="read_more">
													<Link href="/services/junk-removal"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
													<Link href="/services/property-cleanout"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/property-cleanout"><a>Property Cleanout</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
												<div className="read_more">
													<Link href="/services/property-cleanout"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
													<Link href="/services/commercial-cleanout"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/commercial-cleanout"><a>Commercial Cleanout</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
												<div className="read_more">
													<Link href="/services/commercial-cleanout"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/6.jpg)" }}></div>
													<Link href="/services/storage-cleanout"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/storage-cleanout"><a>Storage Cleanout</a></Link></h3>
													<p>The Shale Oil and Gas Revolution has changed the energy world. Industify has kept pace by providing crucial and timely exploration, production, quality, quantity inventory,</p>
												</div>
												<div className="read_more">
													<Link href="/services/storage-cleanout"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/5.jpg)" }}></div>
													<Link href="/servies/appliance-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/appliance-removal"><a>Appliance Removal</a></Link></h3>
													<p>Today’s energy and commodities industries power and feed the world economy. The efficient and effective operation of these projects is vital to sustained energy growth</p>
												</div>
												<div className="read_more">
													<Link href="/services/appliance-removal"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="/services/construction-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/construction-removal"><a>Construction Debris Removal</a></Link></h3>
													<p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
												</div>
												<div className="read_more">
													<Link href="/services/construction-removal"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
													<Link href="/services/shed-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/shed-removal"><a>Shed Removal</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
												<div className="read_more">
													<Link href="/services/shed-removal"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
													<Link href="/services/deck-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/deck-removal"><a>Deck Removal</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
												<div className="read_more">
													<Link href="/services/deck-removal"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="clearfix"></div>

								<div className="industify_fn_pagination">
									<ul>
										<li className="active"><span className="current">1</span></li>
										<li><Link href="#"><a>2</a></Link></li>
										<li className="view"><p>Viewing page 1 of 2</p></li>
									</ul>
								</div>


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">


								{/* Service List */}
								<List></List>
								{/* /Service List */}

								{/* Get Sidebar */}
								<Sidebar />
								{/* /Get Sidebar */}


							</div>
							{/* Main Sidebar: Right */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page */}
			</Layout>

		</>
	)
}
