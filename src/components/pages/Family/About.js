import React from 'react';
import Header from '../../../common/Header';
import Navigation from '../../../common/Navigation';

function FamilyAbout() {
    return (
        <div>
            <Navigation /> 
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
                
                {/***********************************************************************************************************/}
                {/************* MAIN ****************************************************************************************/}
                {/***********************************************************************************************************/}
                <main id="ts-main">
                    
                    {/*PAGE TITLE *******************************************************************************************/}
                    <section id="page-title">
                    <div className="container">
                        <div className="ts-title">
                        {/*<h1>About Us</h1>*/}
                        </div>
                        {/*end ts-title*/}
                    </div>
                    {/*end container*/}
                    </section>
                    {/*DESCRIPTION ******************************************************************************************/}
                    <section id="about-us-description">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8">
                            <p className="h3">
                            Phasellus quis scelerisque ligula. Sed gravida tincidunt purus at tincidunt. Etiam ac diam
                            eu purus aliquam vehicula eleifend eget turpis. In finibus vel elit eget suscipit.
                            </p>
                            <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien. In
                            lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec maximus. Nam tortor arcu,
                            tincidunt quis molestie non, sagittis dignissim ligula. Fusce est ipsum, pharetra in felis
                            ac,
                            lobortis volutpat diam.
                            </p>
                            <a href="contact.html" className="btn btn-primary">Contact us</a>
                        </div>
                        {/*end col-md-8*/}
                        <div className="col-md-4" />
                        {/*end col-md-4*/}
                        </div>
                        {/*end row*/}
                        <hr className="my-5" />
                    </div>
                    {/*end container*/}
                    </section>
                    {/*TEAM
                =========================================================================================================*/}
                    <section id="about-us-team">
                    <div className="container pb-5">
                        <div className="row">
                        {/*Person*/}
                        <div className="col-md-3">
                            <div className="card ts-person ts-card">
                            
                            {/*Image*/}
                            <a href="/#" className="card-img" data-bg-image="assets/img/img-person-01.jpg">
                                {/*<div className="ts-item__info-badge">
                                <span>23 Properties</span>
                                </div>*/}
                            </a>
                            {/*Body*/}
                            <div className="card-body">
                                {/*<figure className="ts-item__info">
                                <h4>Jane Harwood</h4>
                                <aside>
                                    <i className="fa fa-map-marker mr-2" />
                                    London
                                </aside>
                                </figure>*/}
                                <dl>
                                <dt>Phone</dt>
                                <dd>+1 602-862-1673</dd>
                                <dt>Email</dt>
                                <dd><a href="/#">jane.harwood@example.com</a></dd>
                                </dl>
                            </div>
                            {/*Footer*/}
                            <a href="agent-detail-01.html" className="card-footer">
                                <span className="ts-btn-arrow">Detail</span>
                            </a>
                            </div>
                        </div>
                        {/*end col-md-3*/}
                        {/*Person*/}
                        <div className="col-md-3">
                            <div className="card ts-person ts-card">
                            
                            {/*Image*/}
                            <a href="/#" className="card-img" data-bg-image="assets/img/img-person-02.jpg">
                                {/*<div className="ts-item__info-badge">
                                <span>41 Properties</span>
                                </div>*/}
                            </a>
                            {/*Body*/}
                            <div className="card-body">
                                {/*<figure className="ts-item__info">
                                <h4>Jackie Kinsey</h4>
                                <aside>
                                    <i className="fa fa-map-marker mr-2" />
                                    New York
                                </aside>
                                </figure>*/}
                                <dl>
                                <dt>Phone</dt>
                                <dd>+1 602-862-1673</dd>
                                <dt>Email</dt>
                                <dd><a href="/#">jane.harwood@example.com</a></dd>
                                </dl>
                            </div>
                            {/*Footer*/}
                            <a href="agent-detail-01.html" className="card-footer">
                                <span className="ts-btn-arrow">Detail</span>
                            </a>
                            </div>
                        </div>
                        {/*end col-md-3*/}
                        {/*Person*/}
                        <div className="col-md-3">
                            <div className="card ts-person ts-card">
                            {/*Image*/}
                            <a href="/#" className="card-img" data-bg-image="assets/img/img-person-03.jpg">
                                {/*<div className="ts-item__info-badge">
                                <span>16 Properties</span>
                                </div>*/}
                            </a>
                            {/*Body*/}
                            <div className="card-body">
                                {/*<figure className="ts-item__info">
                                <h4>Adam Price</h4>
                                <aside>
                                    <i className="fa fa-map-marker mr-2" />
                                    Paris
                                </aside>
                                </figure>*/}
                                <dl>
                                <dt>Phone</dt>
                                <dd>+1 602-862-1673</dd>
                                <dt>Email</dt>
                                <dd><a href="/#">jane.harwood@example.com</a></dd>
                                </dl>
                            </div>
                            {/*Footer*/}
                            <a href="agent-detail-01.html" className="card-footer">
                                <span className="ts-btn-arrow">Detail</span>
                            </a>
                            </div>
                        </div>
                        {/*end col-md-3*/}
                        {/*Person*/}
                        <div className="col-md-3">
                            <div className="card ts-person ts-card">
                            {/*Image*/}
                            <a href="/#" className="card-img" data-bg-image="assets/img/img-person-04.jpg">
                                {/*<div className="ts-item__info-badge">
                                <span>28 Properties</span>
                                </div>*/}
                            </a>
                            {/*Body*/}
                            <div className="card-body">
                                {/*<figure className="ts-item__info">
                                <h4>Edward Palmer</h4>
                                <aside>
                                    <i className="fa fa-map-marker mr-2" />
                                    Berlin
                                </aside>
                                </figure>*/}
                                <dl>
                                <dt>Phone</dt>
                                <dd>+1 602-862-1673</dd>
                                <dt>Email</dt>
                                <dd><a href="/#">jane.harwood@example.com</a></dd>
                                </dl>
                            </div>
                            {/*Footer*/}
                            <a href="agent-detail-01.html" className="card-footer">
                                <span className="ts-btn-arrow">Detail</span>
                            </a>
                            </div>
                        </div>
                        {/*end col-md-3*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                    </section>
                    {/*TESTIMONIALS *****************************************************************************************/}
                    <section id="about-us-testimonials-carousel">
                    <div className="bg-white text-center py-5">
                        <div className="container">
                        <div className="offset-lg-2 col-lg-8">
                            <div className="owl-carousel" data-owl-items={1} data-owl-dots={1}>
                            <div className="ts-slide">
                                <div className="ts-circle__sm" data-bg-image="assets/img/img-person-01.jpg" />
                                <h5 className="my-3">Jane Doe</h5>
                                <p className="h5 font-weight-normal ts-text-color-light">
                                Duis ac dolor et enim volutpat semper. Morbi placerat tempor ornare. Quisque
                                bibendum
                                ultrices diam, ac fermentum massa egestas quis.
                                </p>
                            </div>
                            {/*end ts-slide*/}
                            <div className="ts-slide">
                                <div className="ts-circle__sm" data-bg-image="assets/img/img-person-02.jpg" />
                                <h5 className="my-3">Catherine Pride</h5>
                                <p className="h5 font-weight-normal ts-text-color-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor
                                sapien.
                                In lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec
                                </p>
                            </div>
                            {/*end ts-slide*/}
                            </div>
                            {/*end owl-carousel*/}
                        </div>
                        {/*end offset-lg-2*/}
                        </div>
                        {/*end container*/}
                    </div>
                    {/*end ts-block*/}
                    </section>
                    {/*NUMBERS **********************************************************************************************/}
                    <section id="about-us-numbers">
                    <div id="numbers" className="py-5 text-white text-center ts-separate-bg-element" data-bg-color="#000037" data-bg-image="assets/img/bg-apartment-table.jpg" data-bg-image-opacity=".3">
                        <div className="container py-5">
                        <div className="ts-promo-numbers">
                            <div className="row">
                            <div className="col-sm-3">
                                <div className="ts-promo-number">
                                <h2>640</h2>
                                <h4 className="mb-0 ts-opacity__50">Properties</h4>
                                </div>
                                {/*end ts-promo-number*/}
                            </div>
                            {/*end col-sm-3*/}
                            <div className="col-sm-3">
                                <div className="ts-promo-number">
                                <h2>350</h2>
                                <h4 className="mb-0 ts-opacity__50">Local Agents</h4>
                                </div>
                                {/*end ts-promo-number*/}
                            </div>
                            {/*end col-sm-3*/}
                            <div className="col-sm-3">
                                <div className="ts-promo-number">
                                <h2>23</h2>
                                <h4 className="mb-0 ts-opacity__50">Years Experience</h4>
                                </div>
                                {/*end ts-promo-number*/}
                            </div>
                            {/*end col-sm-3*/}
                            <div className="col-sm-3">
                                <div className="ts-promo-number">
                                <h2>67</h2>
                                <h4 className="mb-0 ts-opacity__50">Agencies</h4>
                                </div>
                                {/*end ts-promo-number*/}
                            </div>
                            {/*end col-sm-3*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end ts-promo-numbers*/}
                        </div>
                        {/*end container*/}
                    </div>
                    {/*end #numbers*/}
                    </section>
                    {/*PARTNERS *********************************************************************************************/}
                    <section id="partners">
                    <div className="ts-block py-4">
                        <div className="container">
                        {/*block of logos*/}
                        <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
                            <a href="/#">
                            <img src="assets/img/logo-01.png" alt="" />
                            </a>
                            <a href="/#">
                            <img src="assets/img/logo-02.png" alt="" />
                            </a>
                            <a href="/#">
                            <img src="assets/img/logo-03.png" alt="" />
                            </a>
                            <a href="/#">
                            <img src="assets/img/logo-04.png" alt="" />
                            </a>
                            <a href="/#">
                            <img src="assets/img/logo-05.png" alt="" />
                            </a>
                        </div>
                        {/*end logos*/}
                        </div>
                        {/*end container*/}
                    </div>
                    </section>
                </main>
                {/*end #ts-main*/}
                {/***********************************************************************************************************/}
                {/************* FOOTER **************************************************************************************/}
                {/***********************************************************************************************************/}
                <footer id="ts-footer">
                    <section id="ts-footer-main">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                            <a href="/#" className="brand">
                            <img src="assets/img/logo.png" alt="" />
                            </a>
                            <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien.
                            In lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec maximus. Nam tortor
                            arcu,
                            tincidunt quis molestie non, sagittis dignissim ligula. Fusce est ipsum, pharetra in felis
                            ac,
                            lobortis volutpat diam.
                            </p>
                            {/*<a href="/#" className="btn btn-outline-dark mb-4">Contact Us</a>*/}
                        </div>
                        {/*end col-md-6*/}
                        <div className="col-md-2">
                            <h4>Navigation</h4>
                            <nav className="nav flex-row flex-md-column mb-4">
                            <a href="/family/home" className="nav-link">Home</a>
                            <a href="/#" className="nav-link"></a>
                            <a href="/#" className="nav-link"></a>
                            <a href="/#" className="nav-link"></a>
                            <a href="/#" className="nav-link"></a>
                            <a href="/#" className="nav-link"></a>
                            </nav>
                        </div>
                        {/*end col-md-2*/}
                        <div className="col-md-4">
                            <h4>Contact</h4>
                            <address className="ts-text-color-light">
                            2590 Rocky Road
                            <br />
                            Philadelphia, PA 19108
                            <br />
                            <strong>Email: </strong>
                            <a href="/#" className="btn-link">office@example.com</a>
                            <br />
                            <strong>Phone:</strong>
                            +1 215-606-0391
                            <br />
                            <strong>Skype: </strong>
                            real.estate1
                            </address>
                            {/*end address*/}
                        </div>
                        {/*end col-md-4*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                    </section>
                    {/*end ts-footer-main*/}
                    <section id="ts-footer-secondary">
                    <div className="container">
                        {/*<div className="ts-copyright">(C) 2018 ThemeStarz, All rights reserved</div>*/}
                        {/*end ts-copyright*/}
                        {/*<div className="ts-footer-nav">
                        <nav className="nav">
                            <a href="/#" className="nav-link">
                            <i className="fab fa-facebook-f" />
                            </a>
                            <a href="/#" className="nav-link">
                            <i className="fab fa-twitter" />
                            </a>
                            <a href="/#" className="nav-link">
                            <i className="fab fa-pinterest-p" />
                            </a>
                            <a href="/#" className="nav-link">
                            <i className="fab fa-youtube" />
                            </a>
                        </nav>
                        {/*end nav}
                        </div>*/}
                        {/*end ts-footer-nav*/}
                    </div>
                    {/*end container*/}
                    </section>
                    {/*end ts-footer-secondary*/}
                </footer>
                {/*end #ts-footer*/}
                </div>
                {/*end page*/}

        </div>
    );
}

export default FamilyAbout;