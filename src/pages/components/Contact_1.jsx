import React from "react";

function Contact() {
    return (
        <section id="contact">
            <div className="cont">
                <div className="left">
                    <div className="cont-logo"><img src="images/logo1.png" alt="Logo" /></div>
                    <div className="cont-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolor doloribus recusandae eveniet eum.</div>
                    <button class="ab-but">Know More</button>
                </div>
                <div className="right" style={
                    {width: '30%'}
                }>
                    <div className="cols">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Disclaimer</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="cols">
                        <h3>Social Media</h3>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        {/* <a href=""><i class="fa-brands fa-twitter"></i></a> */}
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://instagram.com/dillkhush_app?igshid=MmU2YjMzNjRlOQ=="><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;