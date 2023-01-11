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
			<Title title='Service Single 6' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Appliance Removal</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Services</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Appliance Removal</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title  */}


				{/* Sidebar Page  */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left  */}
							<div className="industify_fn_leftsidebar">

								{/* Single Service  */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/6.jpg" alt="" />
									</div>

									<div className="desc_holder">
									<h1>Appliance Removal near Columbus, OH</h1>
										<p>The fact remains that removing appliances is almost never a one-person job. The majority of large appliances are far too heavy for just one or two individuals. Large appliances are not only notoriously difficult to pick up and transport, but they are also challenging to get rid of.</p>
			
										<p>We provide complete deck, gazebo, and patio demolition and removal for both, residential as well as commercial properties. You direct us and we carry out the task!</p>
										<h1>The Significance of Recycling Appliances</h1>
										<p>Metal recycling lessens the environmental impact of using metals, which can be expensive and harmful to the environment when produced fresh. Many smaller appliances include materials that, when left to deteriorate in a landfill, can release gases into the air and other pollutants that can pollute the soil and water supplies.

Some localities require the recycling of specific small appliances. However, even if there isn't a rule in place to prohibit certain products from ending up in landfills, recycling these items is always necessary.</p>
									
										<h1>Our Process</h1>
										<p>Old appliances are moved by Designation Dump in a safe, effective, and environmentally responsible manner. Whether it's a business or residential property, we can take up both big and small appliances from your house, workplace, storage facility, or virtually any other location you own. In the Canal Winchester region, we are the rising  industry pioneers in junk removal.</p>
										</div>

									{/* Check List Shortcode  */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Refrigerator</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Television</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Washer</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Dryer</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Stove</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Dishwasher</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Dehumidifier</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Other Electronics & Appliances</p>
													</div>
												</li>
												
											</ul>
										</div>
									</div>
									{/* Check List Shortcode  */}

									{/* Call to Action Shortcode (with corner)  */}
									<div className="fn_cs_call_to_action corner">
										<div className="container">
											<div className="cta_holder">
												<div className="title_holder">
													<h3>Designation Dump LLC</h3>
													<p>We build your dream house. Contact us for detailed information.</p>
												</div>
												<div className="link_holder">
													<a href="contact.html">Our Responsibility</a>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner)  */}

									{/* Get Random Services  */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
									<div data-html="includes/random-service.html" data-index="6" data-count="2"></div>
									{/* /Get Random Services  */}

								</div>
								{/* /Single Service  */}


							</div>
							{/* /Main Sidebar: Left  */}


							{/* Main Sidebar: Right  */}
							<div className="industify_fn_rightsidebar">


								{/* Service List  */}
								<List />
								{/* /Service List  */}

								{/* Get Sidebar  */}
								<Sidebar />
								{/* /Get Sidebar  */}


							</div>
							{/* Main Sidebar: Right  */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page  */}
			</Layout>

		</>
	)
}
