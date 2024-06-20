import React from 'react';
import styles from '../../assets/css/style1.module.css';

function Header() {
    return (
        <div>
            <div className={`${styles['ts-page-wrapper']} ${styles['ts-has-bokeh-bg']}`} id="page-top">
                {/***********************************************************************************************************/}
                {/*HEADER ***************************************************************************************************/}
                {/***********************************************************************************************************/}
                <header id="ts-header" className={styles['fixed-top']}>
                    {/* SECONDARY NAVIGATION
                    =============================================================================================================*/}
                    <nav id="ts-secondary-navigation" className={`navbar p-0 ${styles['navbar']} ${styles['p-0']}`}>
                    <div className="container justify-content-end justify-content-sm-between">
                        {/*Left Side*/}
                        <div className={`navbar-nav d-none d-sm-block ${styles['navbar-nav']} ${styles['d-none']} ${styles['d-sm-block']}`}>
                        {/*Phone*/}
                        <span className="mr-4">
                            <i className="fa fa-phone-square mr-1" />
                            +1 123 456 789
                        </span>
                        {/*Email*/}
                        <a href="/#">
                            <i className="fa fa-envelope mr-1" />
                            hello@example.com
                        </a>
                        </div>
                        {/*Right Side*/}
                        <div className={`navbar-nav flex-row ${styles['navbar-nav']} ${styles['flex-row']}`}>
                        {/*Search Input*/}
                        <input type="text" className={`form-control p-2 border-left bg-transparent w-auto ${styles['form-control']} ${styles['p-2']} ${styles['border-left']} ${styles['bg-transparent']} ${styles['w-auto']}`} placeholder="Search" />
                        {/*Currency Select*/}
                        <select className={`custom-select bg-transparent ts-text-small border-left ${styles['custom-select']} ${styles['bg-transparent']} ${styles['ts-text-small']} ${styles['border-left']}`} id="currency" name="currency">
                            <option value={1}>GBP</option>
                            <option value={2}>USD</option>
                            <option value={3}>EUR</option>
                        </select>
                        {/*Language Select*/}
                        <select className={`custom-select bg-transparent ts-text-small border-left border-right ${styles['custom-select']} ${styles['bg-transparent']} ${styles['ts-text-small']} ${styles['border-left']} ${styles['border-right']}`} id="language" name="language">
                            <option value={1}>EN</option>
                            <option value={2}>FR</option>
                            <option value={3}>DE</option>
                        </select>
                        </div>
                        {/*end navbar-nav*/}
                    </div>
                    {/*end container*/}
                    </nav>
                    {/*PRIMARY NAVIGATION
                    =============================================================================================================*/}
                    <nav id="ts-primary-navigation" className={`navbar navbar-expand-md navbar-light ${styles['navbar']} ${styles['navbar-expand-md']} ${styles['navbar-light']}`}>
                    <div className="container">
                        {/*Brand Logo*/}
                        <a className="navbar-brand" href="index-map-leaflet-fullscreen.html">
                        <img src="assets/img/logo.png" alt="" />
                        </a>
                        {/*Responsive Collapse Button*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        {/*Collapsing Navigation*/}
                        <div className="collapse navbar-collapse" id="navbarPrimary">
                        {/*LEFT NAVIGATION MAIN LEVEL
                        =================================================================================================*/}
                        <ul className={`navbar-nav ${styles['navbar-nav']}`}>
                            {/*HOME (Main level)
                            =============================================================================================*/}
                            <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                            {/*Main level link*/}
                            <a className="nav-link active" href="/#">
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                            {/* List (1st level) */}
                            <ul className={`ts-child ${styles['ts-child']}`}>
                                {/* MAP (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Map</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    {/* OPENSTREETMAP (2nd level level)
                                            =============================================================================*/}
                                    <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                    <a href="/#" className="nav-link">OpenStreetMap</a>
                                    {/*List (3rd level) */}
                                    <ul className={`ts-child ${styles['ts-child']}`}>
                                        <li className="nav-item">
                                        <a href="index-map-leaflet-fullscreen.html" className="nav-link">Full Screen</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-leaflet-form-bottom.html" className="nav-link">Form Bottom</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-leaflet-half-map.html" className="nav-link">Half Map</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-leaflet-left-results.html" className="nav-link">Left Results</a>
                                        </li>
                                    </ul>
                                    </li>
                                    {/*end OpenStreetMap*/}
                                    {/* MAPBOX (2nd level level)
                                            =============================================================================*/}
                                    <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                    <a href="/#" className="nav-link">MapBox</a>
                                    {/*List (3rd level) */}
                                    <ul className={`ts-child ${styles['ts-child']}`}>
                                        <li className="nav-item">
                                        <a href="index-map-mapbox-fullscreen.html" className="nav-link">Full Screen</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-mapbox-form-bottom.html" className="nav-link">Form Bottom</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-mapbox-half-map.html" className="nav-link">Half Map</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-mapbox-left-results.html" className="nav-link">Left Results</a>
                                        </li>
                                    </ul>
                                    </li>
                                    {/*end MapBox*/}
                                    {/* GOOGLE (2nd level level)
                                            =============================================================================*/}
                                    <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                    <a href="/#" className="nav-link">Google</a>
                                    {/*List (3rd level) */}
                                    <ul className={`ts-child ${styles['ts-child']}`}>
                                        <li className="nav-item">
                                        <a href="index-map-google-fullscreen.html" className="nav-link">Full Screen</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-google-form-bottom.html" className="nav-link">Form Bottom</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-google-half-map.html" className="nav-link">Half Map</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-google-left-results.html" className="nav-link">Left Results</a>
                                        </li>
                                    </ul>
                                    </li>
                                    {/*end Google*/}
                                    {/* HERE (2nd level level)
                                            =============================================================================*/}
                                    <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                    <a href="/#" className="nav-link">Here</a>
                                    {/*List (3rd level) */}
                                    <ul className={`ts-child ${styles['ts-child']}`}>
                                        <li className="nav-item">
                                        <a href="index-map-here-fullscreen.html" className="nav-link">Full Screen</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-here-form-bottom.html" className="nav-link">Form Bottom</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-here-half-map.html" className="nav-link">Half Map</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-here-left-results.html" className="nav-link">Left Results</a>
                                        </li>
                                    </ul>
                                    </li>
                                    {/*end Here*/}
                                    {/* BING (2nd level level)
                                            =============================================================================*/}
                                    <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                    <a href="/#" className="nav-link">Bing</a>
                                    {/*List (3rd level) */}
                                    <ul className={`ts-child ${styles['ts-child']}`}>
                                        <li className="nav-item">
                                        <a href="index-map-bing-fullscreen.html" className="nav-link">Full Screen</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-bing-form-bottom.html" className="nav-link">Form Bottom</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-bing-half-map.html" className="nav-link">Half Map</a>
                                        </li>
                                        <li className="nav-item">
                                        <a href="index-map-bing-left-results.html" className="nav-link">Left Results</a>
                                        </li>
                                    </ul>
                                    </li>
                                    {/*end Bing*/}
                                </ul>
                                {/*end List (2nd level)*/}
                                </li>
                                {/*end MAP (1st level)*/}
                                {/* SLIDER (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Slider</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="index-slider.html" className="nav-link">Slider Default</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-slider-fullscreen.html" className="nav-link">Full Screen</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-slider-form-vertical.html" className="nav-link">Vertical Form</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-slider-form-horizontal.html" className="nav-link">Horizontal Form</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end SLIDER (1st level)*/}
                                {/* IMAGE (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Image</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="index-image-form-horizontal-dark.html" className="nav-link">Horizontal Form</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-image-form-vertical-light.html" className="nav-link">Vertical Form</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-image-fullscreen.html" className="nav-link">Full Screen</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="index-video-background.html" className="nav-link">Video Background</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end SLIDER (1st level)*/}
                            </ul>
                            {/*end List (1st level) */}
                            </li>
                            {/*end HOME nav-item*/}
                            {/*LISTING (Main level)
                            =============================================================================================*/}
                            <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                            {/*Main level link*/}
                            <a className="nav-link" href="/#">Listing</a>
                            {/* List (1st level) */}
                            <ul className={`ts-child ${styles['ts-child']}`}>
                                {/* CATEGORY ICONS (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="listing-category-icons.html" className="nav-link">Category Icons</a>
                                </li>
                                {/*end CATEGORY ICONS (1st level)*/}
                                {/* GRID (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Grid</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="listing-grid-3-columns.html" className="nav-link">Grid 3 Columns</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-grid-4-columns.html" className="nav-link">Grid 4 Columns</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-grid-mixed.html" className="nav-link">Mixed</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-grid-sidebar-left.html" className="nav-link">Sidebar Left</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-grid-sidebar-right.html" className="nav-link">Sidebar Right</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end GRID (1st level)*/}
                                {/* LIST (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">List</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="listing-list-sidebar-left.html" className="nav-link">Sidebar Left</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-list-sidebar-right.html" className="nav-link">Sidebar Right</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="listing-list-compact-sidebar.html" className="nav-link">Compact with Sidebar</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end LIST (1st level)*/}
                                {/* PROPERTY (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Property</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="detail-01.html" className="nav-link">Property Detail v1</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="detail-02.html" className="nav-link">Property Detail v2</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="detail-03.html" className="nav-link">Property Detail v3</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end PROPERTY (1st level)*/}
                            </ul>
                            {/*end List (1st level) */}
                            </li>
                            {/*end LISTING nav-item*/}
                            {/*PAGES (Main level)
                            =============================================================================================*/}
                            <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                            {/*Main level link*/}
                            <a className="nav-link" href="/#">Pages</a>
                            {/* List (1st level) */}
                            <ul className={`ts-child ${styles['ts-child']}`}>
                                {/* AGENCY (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Agency</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="agencies-list.html" className="nav-link">Agencies List</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="agency-detail.html" className="nav-link">Agency Detail</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end AGENCY (1st level)*/}
                                {/* AGENTS (1st level)
                                    =====================================================================================*/}
                                <li className={`nav-item ts-has-child ${styles['nav-item']} ${styles['ts-has-child']}`}>
                                <a href="/#" className="nav-link">Agents</a>
                                {/*List (2nd level) */}
                                <ul className={`ts-child ${styles['ts-child']}`}>
                                    <li className="nav-item">
                                    <a href="agencies-list.html" className="nav-link">Agents List</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="agent-detail-01.html" className="nav-link">Agent Detail v1</a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="agent-detail-02.html" className="nav-link">Agent Detail v2</a>
                                    </li>
                                </ul>
                                {/*end List (2nd level) */}
                                </li>
                                {/*end LIST (1st level)*/}
                                {/* EDIT PROPERTY (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="edit-property.html" className="nav-link">Edit Property</a>
                                </li>
                                {/*end EDIT PROPERTY (1st level)*/}
                                {/* FAQ (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="faq.html" className="nav-link">FAQ</a>
                                </li>
                                {/*end FAQ (1st level)*/}
                                {/* LOGIN (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="login.html" className="nav-link">Login</a>
                                </li>
                                {/*end LOGIN (1st level)*/}
                                {/* PRICING (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="pricing.html" className="nav-link">Pricing</a>
                                </li>
                                {/*end PRICING (1st level)*/}
                                {/* REGISTER (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="register.html" className="nav-link">Register</a>
                                </li>
                                {/*end REGISTER (1st level)*/}
                                {/* SUBMIT (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="submit.html" className="nav-link">Submit Property</a>
                                </li>
                                {/*end SUBMIT (1st level)*/}
                                {/* SUBMIT PREVIEW (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="preview.html" className="nav-link">Submit Preview</a>
                                </li>
                                {/*end SUBMIT PREVIEW (1st level)*/}
                                {/* SUBMITTED (1st level)
                                    =====================================================================================*/}
                                <li className="nav-item">
                                <a href="submitted.html" className="nav-link">Submitted</a>
                                </li>
                                {/*end SUBMITTED(1st level)*/}
                            </ul>
                            {/*end List (1st level) */}
                            </li>
                            {/*end PAGES nav-item*/}
                            {/*ABOUT US (Main level)
                            =============================================================================================*/}
                            <li className="nav-item">
                            <a className="nav-link" href="about-us.html">About Us</a>
                            </li>
                            {/*end ABOUT US nav-item*/}
                            {/*CONTACT (Main level)
                            =============================================================================================*/}
                            <li className="nav-item">
                            <a className="nav-link mr-2" href="contact.html">Contact</a>
                            </li>
                            {/*end CONTACT nav-item*/}
                        </ul>
                        {/*end Left navigation main level*/}
                        {/*RIGHT NAVIGATION MAIN LEVEL
                        =================================================================================================*/}
                        <ul className={`navbar-nav ml-auto ${styles['navbar-nav']} ${styles['ml-auto']}`}>
                            {/*LOGIN (Main level)
                            =============================================================================================*/}
                            <li className="nav-item">
                            <a className="nav-link" href="login.html">Login</a>
                            </li>
                            {/*REGISTER (Main level)
                            =============================================================================================*/}
                            <li className="nav-item">
                            <a className="nav-link text-dark" href="register.html">Register</a>
                            </li>
                            {/*SUBMIT (Main level)
                            =============================================================================================*/}
                            <li className="nav-item">
                            <a className="btn btn-outline-primary btn-sm m-1 px-3" href="submit.html">
                                <i className="fa fa-plus small mr-2" />
                                Add Property
                            </a>
                            </li>
                        </ul>
                        {/*end Right navigation*/}
                        </div>
                        {/*end navbar-collapse*/}
                    </div>
                    {/*end container*/}
                    </nav>
                    {/*end #ts-primary-navigation.navbar*/}
                </header>
                {/*end Header*/}
                {/***********************************************************************************************************/}
                {/************* MAIN ****************************************************************************************/}
                {/***********************************************************************************************************/}
                
                </div>
        </div>
    );
}

export default Header;
