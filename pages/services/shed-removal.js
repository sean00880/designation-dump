import React from 'react'
import Layout from '../../layout/layout'
import Sidebar from '../../layout/sidebar'
import Title from '../../layout/title'
import List from '../../layout/list'
import { Check } from '../../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle2() {
	return (
		<>
		<Title title='Service Single 2' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle" >
					<div className="container">
						<div className="title_holder">
							<h3>Shed Removal</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Services</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Shed Removal</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}


				{/* Sidebar Page */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">

								{/* Single Service */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/2.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<h1>Shed Removal near Columbus, OH</h1>
										
										<p>Sheds naturally draw clutter, and they have a propensity to accumulate clutter and disorder over time. Beginning with a few lawnmowers and gardening tools, you soon discover that the shed is stuffed to the brim with useless goods that have been left unattended for many years. Your backyard's once-pretty and useful storage section has now grown dated and weathered, destroying the aesthetic of the entire space and turning what was once a nice and useful storage area into an eyesore. By contacting us for our shed removal services in Ohio right away, you can bring your shed back to its former splendor.</p>
										
										<h1>How We Remove Sheds</h1>
										<p>Shed removal can get tricky. However, with the right professional help, this task can be made simple. Take us to the shed when we get to your property so we can start evaluating the task at hand. After that, we will present you with a free quote for your consideration. Just give us the go-ahead if you're happy with the pricing, and we'll start the demolition process right away.</p>

<h1>What To Expect?</h1>
<p>Designation Dump is aware of how to take down a building like a shed gently and safely. Planning the breakdown procedure carefully will help us avoid any accidents or damage. We are also completely insured, so you won't need to worry about any concerns. We'll carry the shed to our truck once it's been taken down, then we'll transport the materials for recycling.</p>
									</div>

									

									{/* Check List Shortcode */}
						
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Wood Sheds</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Metal Sheds</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Backyard Sheds</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Storage Sheds</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Garden Sheds</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>& More</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
									{/* Check List Shortcode */}

									{/* Call to Action Shortcode (with corner) */}
									<div className="fn_cs_call_to_action corner">
										<div className="container">
											<div className="cta_holder">
												<div className="title_holder">
													<h3>Designation Dump LLC</h3>
													<p>We build your dream house. Contact us for detailed information.</p>
												</div>
												<div className="link_holder">
													<Link href="/contact"><a>Our Responsibility</a></Link>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner) */}

									{/* Get Random Services */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
									<div data-html="includes/random-service.html" data-index="2" data-count="2"></div>
									{/* /Get Random Services */}

								</div>
								{/* /Single Service */}


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">


								{/* Service List */}
								<List />
								
								{/* /Service List */}

								{/* Get Sidebar */}
								<Sidebar/>
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
