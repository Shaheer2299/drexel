import React from "react";


function Footer() {
    return (
        <div className="main-footer">
        <div className="container">
            <div className="row">
            {/* Column1 */}
            <div className="col">
                <h4>Support</h4><hr/>
                <span className="list-unstyled">
                <li>342-420-6969</li>
                <li>support@drexel.com</li>
                <li>Moscow, Russia</li>
                <li>123 Streeet South North</li>
                </span>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Our Hours</h4><hr/>
                <ui className="list-unstyled">
                <li>Monday: 9am - 5pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Service Areas</h4><hr/>
                <ui className="list-unstyled">
                <li>City, State, 00000</li>
                <li>City, State, 00000</li>
                <li>City, State, 00000</li>
                </ui>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Drexel | All rights reserved |
                Terms Of Service | Privacy
            </p>
            </div>
        </div>
        </div>
        );
    }

export default Footer;