import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'



export default function Principles() {
	return (
		<>
		<Title title='Principles' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle" style={{"paddingTop":"10vh"}}>
					<div className="container">
						<div className="title_holder">
							<h3>Getting Started</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Getting Started with Junk Removal</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title  */}

				{/* Principles  */}
				<div className="industify_fn_principles">
					<div className="container">
						<div className="principles">
							<ul>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>01.</h2>
											<h3>Pick Your Service</h3>
										</div>
										<div className="item_right">
											<p>Browse through our wide list junk removal and cleanout servies.</p>
											
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>02.</h2>
											<h3>Initiate FREE Quote Request</h3>
										</div>
										<div className="item_right">
											<p>Reach out to us with a description of your needs. Please be as descriptive as possible so we can provide you with accurate quotes.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="item_left">
											<h2>03.</h2>
											<h3>Receive Professional Junk Removal Service</h3>
										</div>
										<div className="item_right">
											<p>Just welcome us at your doorstep and direct us to the junk. Our professionals will handle the rest. </p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* /Principles  */}
			</Layout>

		</>
	)
}
