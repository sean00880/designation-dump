import React from 'react'
import Layout from '../../layout/layout'
import Sidebar from '../../layout/sidebar'
import Title from '../../layout/title'
import { Check } from '../../public/svg/icon'
import Link from 'next/link'
import List from '../../layout/list'


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
									<p>Your commercial business needs a dependable junk removal service to keep that commercial property clean and marketable, whether you're a business owner, real estate agent, or property manager. Sometimes homes need to be updated or made ready for new tenants.</p>
										<p>While some waste management firms would set up a special pick up, there are always additional costs involved. That might work for you if that's the case and you just require it around once a year.</p>
									<h1>Commercial Property Cleanout</h1>
										<p> For your commercial property cleanout needs in Ohio, we offer professional junk removal and disposal. We can handle any size clean-up assignment. We can clear out any commercial property, from tiny workshops to huge industrial complexes. To make sure that the cleanout of your property is safe and doesn't hurt the environment, we also handle the collection and recycling of electronic waste.</p>
										<p>Finding another method to complete the task is necessary if that is not an option or if you frequently need massive commercial garbage removed, and that's where Designation Dump's full 'Commercial Cleanout' service comes in.</p>

									<h1>Advantages of Full Property Cleanout</h1>
									<h3>1) Convenience</h3>
									<p>You as the owner or manager must take into account the time required for cleaning out, loading, carrying, and disposing of your company's junk. You may be looking at a significant number of hours and potentially even days lost, depending on the size and volume of the garbage involved.</p>
									<h3>2) Money</h3>
									<p>When weighing your options, it is not sufficient to only examine the price of hiring a reputable rubbish removal company, such as Junk King. The pay paid to your workers (or to yourself) to load and haul your rubbish must also be taken into account, along with the expense of other job that isn't getting done.</p>
									<h3>3) Professional</h3>
									<p>Too many companies just relocate their extra furniture, equipment, and other clutter from one storage location to another. They don't take action because they don't want to have to sort, load, move, and dispose of all that things.</p>
									<h3>4) Safety</h3>
									<p>Moving junk may seem like a simple task, but it can be dangerous depending on the amount and type of waste you have. Cuts, abrasions, and back strains are all too common due to the huge, heavy, and bulky nature of office furniture, equipment, and other items. Taking away the trash is not the same as removing commercial crap!</p>
									<h4>5) Satisfaction</h4>
									<p>Junk removal and disposal properly involves much more than just loading items into a vehicle and driving them to the dump. Using a professional firm is a preferable option in large part because they are aware of what can be lawfully disposed of and where to remove it.</p>
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
