import React from 'react';
import Navigation from '../../../common/Navigation';

function FamilySubscription() {
    return (
        <div>
            <Navigation />
            {/* WRAPPER
                =================================================================================================================*/}
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
            
            {/***********************************************************************************************************/}
            {/* MAIN ****************************************************************************************************/}
            {/***********************************************************************************************************/}
            <main id="ts-main">
                
                {/*PAGE TITLE
                =========================================================================================================*/}
                <h2></h2>
                <section id="page-title">
                <div className="container">
                    <div className="ts-title">
                    <h1>Pricing</h1>
                    </div>
                </div>
                </section>
                {/*PRICING
                =========================================================================================================*/}
                <section id="pricing">
                <div className="container">
                    {/*Title*/}
                    <div className="ts-title text-center">
                    <h2>Affordable Prices</h2>
                    </div>
                    <div className="row no-gutters ts-cards-same-height">
                    {/*Price Box*/}
                    <div className="col-sm-4 col-lg-4">
                        <div className="card text-center ts-price-box">
                        {/*Header*/}
                        <div className="card-header" data-bg-color="#dadada">
                            <h5 className="text-white" data-bg-color="#000296">Basic</h5>
                            <div className="ts-title">
                            <h3 className="font-weight-normal">Free</h3>
                            <small className="ts-opacity__50">Forever</small>
                            </div>
                        </div>
                        {/*Body*/}
                        <div className="card-body p-0 border-bottom-0">
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item ts-na"><s>Example</s></li>
                            <li className="list-group-item ts-na"><s>Example</s></li>
                            </ul>
                        </div>
                        {/*Footer*/}
                        <div className="card-footer bg-transparent pt-0 border-0">
                            <a href="/#" className="btn btn-primary">Select Now</a>
                        </div>
                        </div>
                    </div>
                    {/*end price-box*/}
                    {/*Price Box Promoted*/}
                    <div className="col-sm-4 col-lg-4">
                        <div className="card text-center ts-price-box ts-price-box__promoted">
                        {/*Header*/}
                        <div className="card-header" data-bg-color="#00004c">
                            <h5 className="text-white ts-bg-primary">Premium</h5>
                            <div className="ts-title text-white">
                            <h3 className="font-weight-normal">
                                <sup>$</sup>9,99
                            </h3>
                            <small className="ts-opacity__50">per month</small>
                            </div>
                        </div>
                        {/*Body*/}
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Examples</li>
                            </ul>
                        </div>
                        {/*Footer*/}
                        <div className="card-footer bg-transparent pt-0 border-0">
                            <a href="/#" className="btn btn-primary">Select Now</a>
                        </div>
                        </div>
                    </div>
                    {/*end price-box*/}
                    {/*Price Box*/}
                    <div className="col-sm-4 col-lg-4">
                        <div className="card text-center ts-price-box">
                        {/*Header*/}
                        <div className="card-header" data-bg-color="#dadada">
                            <h5 className="text-white" data-bg-color="#000296">Professional</h5>
                            <div className="ts-title">
                            <h3 className="font-weight-normal">
                                <sup>$</sup>19,99
                            </h3>
                            <small className="ts-opacity__50">Per Month</small>
                            </div>
                        </div>
                        {/*Body*/}
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            <li className="list-group-item">Example</li>
                            </ul>
                        </div>
                        {/*Footer*/}
                        <div className="card-footer bg-transparent pt-0 border-0">
                            <a href="/#" className="btn btn-primary">Select Now</a>
                        </div>
                        </div>
                    </div>
                    {/*end price-box*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                </section>
            </main>
            {/*end #ts-main*/}
            {/***********************************************************************************************************/}
            {/************* FOOTER **************************************************************************************/}
            {/***********************************************************************************************************/}
            <footer id="ts-footer">
                {/*MAIN FOOTER CONTENT
                =========================================================================================================*/}
                <section id="ts-footer-main">
                <div className="container">
                    <div className="row">
                    {/*Brand and description*/}
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
                        
                    </div>
                    {/*Navigation*/}
                    <div className="col-md-2">
                        
                    </div>
                    {/*Contact Info*/}
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
                    </div>
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                </section>
                {/*end ts-footer-main*/}
                {/*SECONDARY FOOTER CONTENT
                =========================================================================================================*/}
                <section id="ts-footer-secondary">
                <div className="container">
                    
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

export default FamilySubscription;