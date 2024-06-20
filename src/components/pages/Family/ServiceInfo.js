import React from 'react';
import Navigation from '../../../common/Navigation';

function FamilyServiceInfo() {
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
                <h2> </h2>
                <section id="page-title">
                <div className="container">
                    <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                        <div className="ts-title">
                        <h1>Preview</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/*PREVIEW
                =========================================================================================================*/}
                <section id="preview">
                <div className="container">
                    <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                        {/*BASIC INFORMATION
                                =====================================================================================*/}
                        <section id="basic-information" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Basic Information</h3>
                        {/*Row*/}
                        <div className="row">
                            {/*Title*/}
                            <div className="col-sm-8">
                            <label></label>
                            <p></p>
                            </div>
                            {/*Price*/}
                            <div className="col-sm-4">
                            <label></label>
                            <p></p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                            <div className="row">
                                {/*Area*/}
                                <div className="col">
                                <label></label>
                                <p><sup></sup></p>
                                </div>
                                {/*Rooms*/}
                                <div className="col">
                                <label></label>
                                <p></p>
                                </div>
                            </div>
                            {/*end row*/}
                            </div>
                            {/*end col-md-4*/}
                            {/*Type Select*/}
                            <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                                <label></label>
                                <p></p>
                            </div>
                            </div>
                            {/*Status Select*/}
                            <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                                <label></label>
                                <p></p>
                            </div>
                            </div>
                        </div>
                        {/*end row*/}
                        </section>
                        {/*LOCATION
                                =====================================================================================*/}
                        <section id="location" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Location</h3>
                        <div className="row">
                            <div className="col-sm-6">
                            {/*Address*/}
                            <div className="input-group">
                                <label>Address</label>
                                <p>489 London Street</p>
                            </div>
                            {/*City*/}
                            <div className="form-group">
                                <label>City</label>
                                <p>Ellensburg</p>
                            </div>
                            {/*State*/}
                            <div className="form-group">
                                <label>State</label>
                                <p>Washington</p>
                            </div>
                            {/*ZIP*/}
                            <div className="form-group mb-0">
                                <label>ZIP</label>
                                <p>98926</p>
                            </div>
                            </div>
                            {/*end col-md-6*/}
                            {/*Map*/}
                            <div className="col-sm-6">
                            <div id="ts-map-simple" className="ts-map ts-shadow__sm h-100" data-ts-map-leaflet-provider="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png" data-ts-map-zoom={12} data-ts-map-center-latitude="40.702411" data-ts-map-center-longitude="-73.556842" data-ts-map-scroll-wheel={1} data-ts-map-controls={0}>
                            </div>
                            </div>
                            {/*end col-md-6*/}
                        </div>
                        {/*end row*/}
                        </section>
                        {/*end #location*/}
                        {/*GALLERY
                                =====================================================================================*/}
                        <section id="gallery" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Gallery</h3>
                        {/*Uploaded images*/}
                        <div className="file-uploaded-images">
                            {/*Image*/}
                            <div className="image">
                            <img src="assets/img/img-item-thumb-01.jpg" alt="" />
                            </div>
                            {/*Image*/}
                            <div className="image">
                            <img src="assets/img/img-item-thumb-02.jpg" alt="" />
                            </div>
                            {/*Image*/}
                            <div className="image">
                            <img src="assets/img/img-item-thumb-03.jpg" alt="" />
                            </div>
                        </div>
                        </section>
                        {/*ADDITIONAL INFORMATION
                                =====================================================================================*/}
                        <section id="additional-information" className="mb-5">
                        {/*Title*/}
                        <h3 className="text-muted border-bottom">Additional Information</h3>
                        {/*Description*/}
                        <section>
                            <label>Description</label>
                            <p>
                            Sed rhoncus arcu ut metus hendrerit gravida. Quisque eu urna neque. Maecenas
                            consectetur, nisl euismod fermentum tempor, nunc ipsum pretium tellus, eget
                            feugiat risus est tincidunt lacus. Vestibulum tortor erat, sodales sit amet
                            dolor ut, dictum faucibus eros. Vivamus malesuada eleifend tellus at posuere.
                            </p>
                        </section>
                        <section>
                            {/*Row*/}
                            <div className="row">
                            {/*Bedrooms*/}
                            <div className="col-sm-4">
                                <label></label>
                                <p></p>
                            </div>
                            {/*Bathrooms*/}
                            <div className="col-sm-4">
                                <label></label>
                                <p></p>
                            </div>
                            {/*Garages*/}
                            <div className="col-sm-4">
                                <label></label>
                                <p></p>
                            </div>
                            </div>
                        {/*</section>
                        <section id="features-checkboxes">
                            <h6 className="mb-3">Features</h6>
                            {/*Checkboxes*/}
                            
                            {/*end ts-column-count-3*/}
                        </section>
                        </section>
                        {/*end #additional-information}
                        <hr />
                        <section className="py-3">
                        <a href="edit-property.html" className="btn btn-outline-secondary btn-lg float-left">
                            <i className="fa fa-pencil-alt mr-2" />
                            Edit Property
                        </a>
                        <button type="submit" onclick="window.location='submitted.html'" className="btn btn-primary ts-btn-arrow btn-lg float-right">Submit Property </button>
                        </section>*/}
                    </div>
                    {/*end offset-lg-1 col-lg-10*/}
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

export default FamilyServiceInfo;