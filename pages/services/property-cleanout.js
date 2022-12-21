import React from 'react'
import Layout from '../../layout/layout'
import Sidebar from '../../layout/sidebar'
import Title from '../../layout/title'
import { Check } from '../../public/svg/icon'
import Link from 'next/link'
import List from '../../layout/list'



export default function ServiceSingle3() {
	return (
		<>
		<Title title='Service Single 3' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Property Cleanout</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Services</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Property Cleanout</span></li>
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
										<img src="img/service/single/3.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>From candles to cutlery and from picture frames to pet toys, Industify helps to establish the compliance of your household products to quality and safety standards and regulations.</p>
										<p>Industify global network offers innovative assurance, testing, inspection and certification services for your housewares home décor items through testing the physical, mechanical and chemical properties of each product, providing total quality assurance.</p>
									</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Candles</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Food Contact Articles</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Household and Kitchen Utensils</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Promotional Products</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Pet Products</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Window Coverings</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Auditing and Systems Certification</p>
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
									<div data-html="includes/random-service.html" data-index="3" data-count="2"></div>
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
