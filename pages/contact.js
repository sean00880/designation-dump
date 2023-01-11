import React, { useRef } from 'react'
import Layout from '../layout/layout'
import Title from '../layout/title'
import { Location } from '../public/svg/icon'
import Link from 'next/link'
import emailjs from '@emailjs/browser';



export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_it2ab1j', 'template_12gw11o', form.current, 'jUn1z-vodKfQLijZ7')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};
  
	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Contact' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Get in Touch</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Contact</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}

				{/* Contact */}
				<div className="industify_fn_contact">
					<div className="container">
						<div className="contact_in">

							<div className="map_holder">
								<iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.109630397434!2d-82.78566574875114!3d39.80453260046572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838790420c26b17%3A0xa36a00f760137ee0!2sSlough%20Rd%2C%20Bloom%20Township%2C%20OH!5e0!3m2!1sen!2sus!4v1673384129532!5m2!1sen!2sus"></iframe>
							</div>

							<div className="contact_holder">
								<div className="contact_left">
									<h3>Get in touch with us</h3>
									<form className="contact_form" ref={form} onSubmit={sendEmail} >


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="empty_notice"><span>Get In Touch With Us</span></div>
										{/*  */}
										<div className="items">
											<div className="item">
												<input id="name" type="text" name="name" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" name="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<input id="phone" type="text" name="contact" placeholder="Phone" />
											</div>
											<div className="item">
												<input id="subject" type="text" name="subject" placeholder="Subject" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message" name="message"></textarea>
											</div>
											<div className="item">
												<input id="send_message" value="Connect With Us" type="submit" />
											</div>
										</div>
									</form>
								</div>
								<div className="contact_right">

									<div className="fn_cs_location_list">
										<ul className="list">

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Office</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>Slough Road, Canal Winchester, OH</li>
															<li>Phone: +1 (202)666-7234</li>
															<li>Email: <Link href="mailto:fgreatful@gmail.com"><a>fgreatful@gmail.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>


										</ul>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /Contact */}

			</Layout>

		</>
	)
}
