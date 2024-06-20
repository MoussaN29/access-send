import React from 'react';

function Index() {
    return (
        <div>
            {/* WRAPPER
                =================================================================================================================*/}
            <div className="ts-page-wrapper ts-homepage">
            {/***********************************************************************************************************/}
            {/*HEADER ***************************************************************************************************/}
            {/***********************************************************************************************************/}
            <header id="ts-header" className="ts-shadow__none pb-3">
                {/*PRIMARY NAVIGATION
            =============================================================================================================*/}
                <nav id="ts-primary-navigation" className="navbar bg-transparent">
                <div className="container">
                    {/*Brand Logo*/}
                    <a className="navbar-brand" href="index-map-leaflet-fullscreen.html">
                    <img src="assets/img/logo.png" alt="" />
                    </a>
                    <a href className="ts-circle ts-bg-primary p-4 ts-shadow__md">
                    <i className="fa fa-shopping-cart text-white" />
                    </a>
                </div>
                {/*end container*/}
                </nav>
                {/*end #ts-primary-navigation.navbar*/}
            </header>
            {/*end Header*/}
            {/* HERO
                =================================================================================================================*/}
            <section id="ts-hero" data-bg-image="assets/img/index-images/logo-bg.png" className="py-5">
                <div className="w-100 ts-min-h__30vh ts-center__vertical">
                <div className="container text-center">
                    <h1 className="position-relative d-inline-block">
                    <span className="position-absolute ts-top__0 ts-right__0 h6 ts-opacity__50 ts-push-up__100">HTML</span>
                    The <abbr data-toggle="tooltip" data-placement="top" title="The First With 5 Map Providers">Most Advanced</abbr> <strong>Real Estate Template</strong>
                    </h1>
                    <div className="ts-group">
                    <a href="#demos" className="btn btn-secondary mx-1 ts-scroll">Demos</a>
                    <a href="/#" className="btn btn-primary mx-1">Buy Now</a>
                    </div>
                </div>
                </div>
            </section>
            {/*end ts-hero*/}
            {/***********************************************************************************************************/}
            {/* MAIN ****************************************************************************************************/}
            {/***********************************************************************************************************/}
            <main id="ts-main" className="bg-white py-5">
                <section id="icons" className="mt-4">
                <div className="container">
                    <h2>Features</h2>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="mt-3">
                        <img src="assets/img/index-images/icon-map-providers.png" alt="" />
                        <h4 className="my-3 pb-3 font-weight-bold border-bottom">5 Map Providers!</h4>
                        <p>
                            MyHouse is the first template that brings not just a Google Maps, but also OpenStreetMap,
                            MapBox, Here Maps and Bing Maps support.
                        </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mt-3">
                        <img src="assets/img/index-images/icon-pages.png" alt="" />
                        <h4 className="my-3 pb-3 font-weight-bold border-bottom">28 Homepage Variants</h4>
                        <p>
                            Choose between twenty map homepages, four slider or four static background image homepages.
                            Every with different form style.
                        </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mt-3">
                        <img src="assets/img/index-images/icon-headers.png" alt="" />
                        <h4 className="my-3 pb-3 font-weight-bold border-bottom">2 Header Versions</h4>
                        <p>
                            Light or dark header version will fit to your design. Also you can set if you want a
                            default header position or fixed, visible when you scroll.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <div className="container">
                <h2>Demos</h2>
                </div>
                <section id="demos" className="sticky-top pt-2 mb-5">
                <div className="container">
                    <div className="rounded p-3 ts-bg-light d-flex">
                    <span>
                        <strong>Map Homepage:</strong>
                        <span className="ts-opacity__50">
                        <a href="#osm" className="mx-1 ts-scroll">OpenStreetMap</a>
                        <a href="#mapbox" className="mx-1 ts-scroll">MapBox</a>
                        <a href="#google" className="mx-1 ts-scroll">Google</a>
                        <a href="#here" className="mx-1 ts-scroll">Here</a>
                        <a href="#bing" className="mx-1 ts-scroll">Bing</a>
                        </span>
                    </span>
                    <span className="ml-auto">
                        <a href="#slider" className="ts-scroll">Slider Homepage</a>
                        <a href="#image" className="ml-3 ts-scroll">Image Homepage</a>
                    </span>
                    </div>
                </div>
                </section>
                {/* OPEN STREET MAP
            =============================================================================================================*/}
                <section id="osm">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    OpenStreetMap
                    <span className="badge badge-primary">Free</span>
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-map-leaflet-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-osm-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Half Map</h6>
                        <a href="index-map-leaflet-half-map.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-osm-hm.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Form Bottom</h6>
                        <a href="index-map-leaflet-form-bottom.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-osm-fb.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Left Results</h6>
                        <a href="index-map-leaflet-left-results.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-osm-lr.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* MAPBOX
            =============================================================================================================*/}
                <section id="mapbox">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    MapBox
                    <span className="badge badge-primary">Free</span>
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-map-mapbox-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-mapbox-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Half Map</h6>
                        <a href="index-map-mapbox-half-map.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-mapbox-hm.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Form Bottom</h6>
                        <a href="index-map-mapbox-form-bottom.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-mapbox-fb.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Left Results</h6>
                        <a href="index-map-mapbox-left-results.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-mapbox-lr.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* GOOGLE
            =============================================================================================================*/}
                <section id="google">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    Google
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-map-google-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-google-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Half Map</h6>
                        <a href="index-map-google-half-map.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-google-hm.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Form Bottom</h6>
                        <a href="index-map-google-form-bottom.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-google-fb.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Left Results</h6>
                        <a href="index-map-google-left-results.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-google-lr.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* HERE
            =============================================================================================================*/}
                <section id="here">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    Here
                    <span className="badge badge-primary">Free</span>
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-map-here-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-here-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Half Map</h6>
                        <a href="index-map-here-half-map.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-here-hm.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Form Bottom</h6>
                        <a href="index-map-here-form-bottom.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-here-fb.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Left Results</h6>
                        <a href="index-map-here-left-results.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-here-lr.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* BING
            =============================================================================================================*/}
                <section id="bing">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    Bing
                    <span className="badge badge-primary">Free</span>
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-map-bing-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-bing-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Half Map</h6>
                        <a href="index-map-bing-half-map.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-bing-hm.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Form Bottom</h6>
                        <a href="index-map-bing-form-bottom.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-bing-fb.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Left Results</h6>
                        <a href="index-map-bing-left-results.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-bing-lr.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* SLIDER
            =============================================================================================================*/}
                <section id="slider">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    Slider Homepage
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Default</h6>
                        <a href="index-slider.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-slider-d.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-slider-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-slider-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Vertical Form</h6>
                        <a href="index-slider-form-vertical.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-slider-vf.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Horizontal Form</h6>
                        <a href="index-slider-form-horizontal.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-slider-hf.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* IMAGE
            =============================================================================================================*/}
                <section id="image">
                <div className="container">
                    <h2 className="border-bottom pb-4 mb-5">
                    Image Homepage
                    </h2>
                    <div className="row">
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Horizontal Form</h6>
                        <a href="index-image-form-horizontal-dark.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-image-hf.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Vertical Form</h6>
                        <a href="index-image-form-vertical-light.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-image-vf.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Full Screen</h6>
                        <a href="index-image-fullscreen.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-image-fs.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    {/* PREVIEW
                        =================================================================================================*/}
                    <div className="col-md-6">
                        <div className="ts-preview">
                        <h6>Video Background</h6>
                        <a href="index-video-background.html" className="ts-shadow__sm">
                            <img src="assets/img/index-images/home-image-video.jpg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="ts-block text-white" data-bg-color="#004efe">
                <div className="container">
                    <h2 className="mb-5">Header Variations</h2>
                    <h6 className="mb-4">Light Version</h6>
                    <img src="assets/img/index-images/header-light.jpg" alt="" className="mw-100 mb-5" />
                    <h6 className="mb-4">Dark Version</h6>
                    <img src="assets/img/index-images/header-dark.jpg" alt="" className="mw-100" />
                </div>
                </section>
                <section className="ts-block">
                <div className="container">
                    <h2 className="mb-5">Property Detail</h2>
                    <div className="row">
                    <div className="col-md-4">
                        <h6 className="mb-4">Version 1</h6>
                        <a href="detail-01.html">
                        <img src="assets/img/index-images/page-01.jpg" alt="" className="mw-100" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <h6 className="mb-4">Version 2</h6>
                        <a href="detail-02.html">
                        <img src="assets/img/index-images/page-02.jpg" alt="" className="mw-100" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <h6 className="mb-4">Version 3</h6>
                        <a href="detail-03.html">
                        <img src="assets/img/index-images/page-03.jpg" alt="" className="mw-100" />
                        </a>
                    </div>
                    </div>
                </div>
                </section>
            </main>
            {/*end #ts-main*/}
            {/***********************************************************************************************************/}
            {/************* FOOTER **************************************************************************************/}
            {/***********************************************************************************************************/}
            <footer id="ts-footer" className="mt-0 border-top">
                <div className="container py-5">
                <span className="small ts-opacity__50">(C) 2018 ThemeStarz, All Rights Reserved</span>
                </div>
            </footer>
            {/*end #ts-footer*/}
            </div>
            {/*end page*/}

            <script src="assets/js/jquery-3.3.1.min.js"></script>
            <script src="assets/js/popper.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/custom.js"></script>
            
        </div>
    );
}

export default Index;