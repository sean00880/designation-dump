import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
const footerImage = "/img/footer/bg.jpg"
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import { Design, Drawing, Learning, TowerCrane } from '../public/svg/service/IconService'
import List from '../layout/list'
import Image from 'next/image'


export default function Services() {
	return (
		<>
			<Title title='Waste Management Services Columbus, OH' />
			<Layout>

				{/* Page Title */}
				<div className="industify_fn_pagetitle">

					
					<div className="container">
						<div className="title_holder">
							
							<h3>Our Services</h3>
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
							<Link href='/services/waste-removal-services'>
							<h2 className="headings">Removal Services</h2>
							</Link>
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
								<li>
									<div className="item">
										<Link href="/services/appliance-removal"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/appliance.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Appliance <br /> Removal</h3>
										<p>Old appliances are moved by Designation Dump in a safe, effective, and environmentally responsible manner. Whether it's a business or residential property, we can take up both big and small appliances from your house, workplace, storage facility, or virtually any other location you own.</p>
										<span className="more_details">
											<Link href="/services/appliance-removal"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<Link href="/services/shed-removal"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/shed.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Shed <br /> Removal</h3>
										<p>Shed removal can get tricky. However, with the right professional help, this task can be made simple. Take us to the shed when we get to your property so we can start evaluating the task at hand.</p>
										<span className="more_details">
											<Link href="/services/shed-removal"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<Link href="/services/deck-removal"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/deck1.png' width='100' height='100' className="service_icon"/>
										</span>
										<h3>Deck <br /> Removal</h3>
										<p>We provide complete deck, gazebo, and patio demolition and removal for both, residential as well as commercial properties. You direct us and we carry out the task!</p>
										<span className="more_details">
											<Link href="/services/deck-removal"><a>
												More Details
												<Arrow_r className="fn__svg" />
											</a></Link>
										</span>
									</div>
								</li>
							</ul>
							<ul>
							<Link href='/services/cleanout-services'>
							<h2 className="headings">Cleanout Services</h2>
							</Link>
							<li>
									<div className="item">
										<Link href="/services/commercial-cleanout"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/commercial.png' width='100' height='100' className="service_icon"/>
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
										<Link href="/services/storage-cleanout"><a></a></Link><span className="bg1"></span><span className="bg2"></span>
										<span className="icon">
										<Image src='/svg/service/storage.png' width='100' height='100' className="service_icon"/>
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
													<p>Whether you're a business owner, real estate agent, or property manager, your commercial business needs a reliable junk removal service to keep that commercial property clean and marketable. Sometimes properties need remodeling or preparation for new tenants.</p>
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
													<p>Your life will be made easy by our team of experts who have been professionally trained in storage unit cleanouts by loading everything and dragging it away.</p>
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
													<p>Old appliances are moved by Designation Dump in a safe, effective, and environmentally responsible manner. Whether it's a business or residential property, we can take up both big and small appliances from your house, workplace, storage facility, or virtually any other location you own.</p>
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
													<p>You can rely on Designation Dump to dispose of any construction debris that needs to be cleared from your worksite with efficiency.</p>
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
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/3.jpg)" }}></div>
													<Link href="/services/shed-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/shed-removal"><a>Shed Removal</a></Link></h3>
													<p>Sheds naturally draw clutter, and they have a propensity to accumulate clutter and disorder over time. By contacting us for our shed removal services in Ohio right away, you can bring your shed back to its former splendor.</p>
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
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/2.jpg)" }}></div>
													<Link href="/services/deck-removal"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/services/deck-removal"><a>Deck Removal</a></Link></h3>
													<p>There are alternative methods for getting rid of your old deck, but nothing makes the process easier and more affordable than hiring our professionals at Designation Dump.We provide complete deck, gazebo, and patio demolition and removal for both, residential as well as commercial properties. You direct us and we carry out the task!</p>
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
