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
			<Title title='Service Single 4' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Construction Debris Removal</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Services</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Construction Debris Removal</span></li>
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
										<img src="img/service/single/4.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<h1>Construction Debris Removal near Columbus, OH</h1>
										<p>We are able to remove any debris that are typically left strewn around till pickup is feasible by using enough labor and powerful machinery for lifting and moving scraps. Instead of using up your precious time removing the rubbish, you may use it to finish the task at hand. Every step of the waste disposal process is meticulously managed by our professionals when we are on the job. You can rely on Designation Dump to dispose of any construction debris that needs to be cleared from your worksite with efficiency.</p>
										<h1>What Kind of Construction Debris do We Remove?</h1>
										<p>No matter how heavy or dangerous an object may be, we have the tools to remove it. We are trained to handle these materials safely. Whether it is nails, rocks, cement, glass or anything else, our  r construction debris removal services will streamline the process of disposing the materials responsibly. We put our clients first and respectfully ffollow the strictest safety guidelines to avoid any potentially fatal mishaps.</p>
									</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>We Recycle/Dispose/Donate the Following Construction Materials:</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Asphalt</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Concrete</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Cardboard</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Wood</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Metal</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Tools</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Furniture</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Tiles</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Rocks</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Dirt</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Pipes</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Wiring</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Cement</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Drywall</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Plaster</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Toilets</span>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<span>Doors</span>
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
													<a href="contact.html">Our Responsibility</a>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner) */}

									{/* Get Random Services */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
									<div data-html="includes/random-service.html" data-index="4" data-count="2"></div>
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
