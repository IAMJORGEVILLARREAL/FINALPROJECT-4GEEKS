import React from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer text-center text-lg-start bg-light text-muted " style={{ marginTop: "auto" }}>
		<div className="container-fluid p-0">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>
				<div>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-google"></i>
					</a>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="" className="me-4 text-reset">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</section>
			<section className="">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fas fa-gem me-3"></i>REALM32
							</h6>
							<p>
							From stunning branding & web design to captivating content creation, social media management, and expert mentorship - we've got you covered. Let us help you stand out in the digital world and achieve your business goals today!
							</p>
						</div>
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Products</h6>
							<p>
								<a href="#!" className="text-reset">Branding & Web</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Content Creation</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Social Media Management</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Mentorship</a>
							</p>
						</div>
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
							<p>
								<a href="#!" className="text-reset">Pricing</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Settings</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Orders</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Help</a>
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p><i className="fas fa-home me-3"></i>Homestead, FL, US</p>
							<p>
								<i className="fas fa-envelope me-3"></i>
								 info@realm32.com
							</p>
							<p><i className="fas fa-phone me-3"></i>+ 01 234 567 88</p>
							<p><i className="fas fa-print me-3"></i>+ 01 234 567 89</p>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
			© {new Date().getFullYear()} REALM32: 
			<a className="text-reset fw-bold" href="https://www.realm32.com/">   REALM32.com</a>
		</div>
	</footer>
);
export default Footer;
