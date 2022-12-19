import React from 'react'
import Layout from '../../layout/layout'
import Sidebar from '../../layout/sidebar'
import Title from '../../layout/title'
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
							<h3>Commercial Cleanout</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Services</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Commercial Cleanout</span></li>
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
										<p>Industify’s tailored solutions enable retailers, brands and manufacturers of textile products, apparel and home textiles to ensure the safety, quality and performance of their products with precision, resulting in increased speed to market.</p>
										<p>Industify performs textile testing on items ranging from fabric samples to finished products, including activewear, apparel for children and adults (pajamas, sweaters, jeans, outerwear), fashion accessories (scarves, belts) and soft home furnishings (bedding, curtains, upholstery). We help our customers go beyond regulatory requirements to consistently meet consumer demand for high quality, minimize reputational risk, reduce environmental impacts and protect the interests of retailers, brands, textile manufacturers and consumer safety.</p>
									</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Accessory Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Activewear Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>AP/APEOs Quick Test</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Apparel Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Auditing and Systems Certification</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Chemical Smart Screening</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Children&apos;s Textile and Apparel Testing</p>
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
								<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
									<ul>
											<li><Link href="/services/junk-removal"><a>Junk Removal</a></Link></li>
											<li><Link href="/services/property-cleanout"><a>Property Cleanout</a></Link></li>
											<li><Link href="/services/commercial-cleanout"><a>Commercial Cleanout</a></Link></li>
											<li><Link href="/services/storage-cleanout"><a>Storage Cleanout</a></Link></li>
											<li><Link href="/services/appliance-removal"><a>Appliance Removal</a></Link></li>
											<li><Link href="/services/construction-removal"><a>Construction Debris Removal</a></Link></li>
										</ul>
									</div>
								</div>
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
