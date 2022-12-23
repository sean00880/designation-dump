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
										<p>If your deck's connectors seem to be falling apart or the planks are getting flimsy or unstable, your deck may be troublesome. It could be best to tear down your deck for everyone's safety to prevent unprecedented injuries.</p>
										<p>The fact remains that removing appliances is almost never a one-person job. The majority of large appliances are far too heavy for just one or two individuals. Large appliances are not only notoriously difficult to pick up and transport, but they are also challenging to get rid of.</p>
			
										<p>We provide complete deck, gazebo, and patio demolition and removal for both, residential as well as commercial properties. You direct us and we carry out the task!</p>
										<h1>How Much Will Deck Removal Cost?</h1>
										<p>Prices are determined on how much rubbish we haul away. There are no additional expenses because all rates include labor, tax, and disposal fees. We have reasonable charges, and we'll always give you a quote up front before beginning any job. Send us a picture of your stuff via SMS, and we'll reply with an estimate. A free, no-obligation estimate at your home or place of business is the best way for us to provide you with the lowest, most accurate quote. In Cincinnati, Dayton, and Southwest Ohio, we provide the deck removal service at the most competitive price.</p>
									
										<h1>The Deck Removal Process</h1>
										<p>Designation Dump will start removing the deck after all safety precautions have been fulfilled, utilizing specialist cutting tools and equipment. Depending on how big the deck is, we might use saws or sledgehammers to cut it into smaller pieces that can be moved and disposed of more readily. Every piece of the deck will have any nails or screws used for assembly meticulously removed and disposed.</p>
										<h1>Post-Work Cleanup</h1>
										<p>We will clear away any dust or debris that has accumulated during the demolition process before leaving your site clean and ready for future development prospects to guarantee that your property is safe and orderly once we have finished our work.</p>
										</div>

									{/* Check List Shortcode  */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>High-tech exploration and production methods</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Cold-climate operations</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Development of oil sands, heavy oil</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Gas processing, sulphur extraction</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Construction and operation of pipelines</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Specialized controls and computer applications</p>
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
