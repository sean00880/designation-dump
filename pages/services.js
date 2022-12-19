import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'


export default function Services() {
	return (
		<>
			<Title title='Services' />
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
