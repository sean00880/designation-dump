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
		<Title title='Property Cleanout' />
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
									<h1>Property Cleanout near Columbus, OH</h1>
									<p>Designation Dump's property cleanout services will assist you make the property ready for leasing when renters leave trash and furniture behind. Within a few hours, we can shorten the turnaround time and have your rental property thoroughly cleaned out.</p>
									<p>We handle a range of property cleanouts, including estate cleanouts, garage cleanouts, attic cleanouts, and cleanouts of commercial spaces. Each of our cleanup services is carried out by a team of qualified experts. </p>
									<h1>Residential Property Cleanout</h1>
										<p>A few of the household cleanout services we provide at Designation Dump include garbage collection, attic storage cleanout, garage cleanout, and estate cleanout. We also remove unwanted appliances like microwaves, televisions and refrigerators, recycle waste, and get rid of mattress box springs and other large objects that can't fit in the typical dumpster.</p>
										<p>We can handle everything, from one-off projects for private homes to regular schedules for REO property flippers, thanks to our expertise to provide full-service removal, hauling, and disposal. As soon as we get there, we go to work clearing out all of your extra items, whether they are from the garage, the basement, or the entire house.</p>
										</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>What's Included in Property Cleanout?</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Garbage Removal</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Waste & E-Waste Removal</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Foreclosures & Evictions</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Churches & Religious Properties</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Yards</p>
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
										<h3>Types of Properties We Service:</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Industrial Facilities</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Appartments & Condos</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Foreclosures & Evictions</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Churches & Religious Properties</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Institutions</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Other Facilities & Properties</p>
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
