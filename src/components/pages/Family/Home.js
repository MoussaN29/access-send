import React from 'react';
import Header from '../../../common/Header';
import Navigation from '../../../common/Navigation';

const FamilyHome = () => {
  return (
    <div>
      <Navigation />
      <div className="ts-page-wrapper ts-homepage" id="page-top">
        <section id="ts-hero" className="mb-0 ts-center__vertical ts-separate-bg-element" data-bg-image="assets/img/bg-apartment-table.jpg" data-bg-image-opacity=".4" data-bg-color="black">
          <div className="ts-full-screen ts-center__both">
            <div className="container">
              {/*<h1 className="mb-2 text-white">Find a Nice Place To Live</h1>
              <h4 className="ts-opacity__50 text-white mb-3 pb-3 mb-lg-5">Buy or Rent Properties at Great Prices</h4>*/}
              <form id="form-search" className="ts-form">
                <section className="p-0">
                  <div className="form-row p-3 mx-0 rounded-top bg-white">
                    <div className="col-sm-12 col-md-4">
                      <div className="form-group my-2">
                        <input type="text" className="form-control" id="keyword" name="keyword" placeholder="Address, City or ZIP" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="col-sm-3">
                          <select className="custom-select my-2" id="type" name="type">
                            <option value>Type</option>
                            
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <select className="custom-select my-2" id="status" name="status">
                            <option value>Status</option>
                            <option value={1}></option>
                            <option value={2}></option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <div className="input-group my-2">
                            <input type="text" className="form-control border-right-0" id="price" placeholder="" />
                            <div className="input-group-append">
                              <span className="input-group-text bg-white border-left-0">$</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group my-2">
                            <button type="submit" className="btn btn-dark w-100" id="search-btn">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 mb-3 border-top rounded-bottom" data-bg-color="rgba(0,0,0,.6)">
                    {/*<a href="#more-options-collapse" className="text-white collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="more-options-collapse">
                      <i className="fa fa-plus-circle text-white mr-2 ts-opacity__50 ts-visible-on-collapsed" />
                      <i className="fa fa-minus-circle text-white mr-2 ts-opacity__50 ts-visible-on-uncollapsed" />
                      More Options
                    </a>*/}
                    <div className="collapse text-white" id="more-options-collapse">
                      <div className="py-4">
                        <div className="form-row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label htmlFor="bedrooms">Bedrooms</label>
                              <input type="number" className="form-control" id="bedrooms" name="bedrooms" min={0} />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label htmlFor="bathrooms">Bathrooms</label>
                              <input type="number" className="form-control" id="bathrooms" name="bathrooms" min={0} />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label htmlFor="garages">Garages</label>
                              <input type="number" className="form-control" id="garages" name="garages" min={0} />
                            </div>
                          </div>
                        </div>
                        <div id="features-checkboxes" className="w-100">
                          <h6 className="mb-3">Features</h6>
                          <div className="ts-column-count-3">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_1" name="features[]" defaultValue="ch_1" />
                              <label className="custom-control-label" htmlFor="ch_1">Air conditioning</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_2" name="features[]" defaultValue="ch_2" />
                              <label className="custom-control-label" htmlFor="ch_2">Bedding</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_3" name="features[]" defaultValue="ch_3" />
                              <label className="custom-control-label" htmlFor="ch_3">Heating</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_4" name="features[]" defaultValue="ch_4" />
                              <label className="custom-control-label" htmlFor="ch_4">Internet</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_5" name="features[]" defaultValue="ch_5" />
                              <label className="custom-control-label" htmlFor="ch_5">Microwave</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_6" name="features[]" defaultValue="ch_6" />
                              <label className="custom-control-label" htmlFor="ch_6">Smoking allowed</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_7" name="features[]" defaultValue="ch_7" />
                              <label className="custom-control-label" htmlFor="ch_7">Terrace</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_8" name="features[]" defaultValue="ch_8" />
                              <label className="custom-control-label" htmlFor="ch_8">Balcony</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_9" name="features[]" defaultValue="ch_9" />
                              <label className="custom-control-label" htmlFor="ch_9">Iron</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_10" name="features[]" defaultValue="ch_10" />
                              <label className="custom-control-label" htmlFor="ch_10">Hi-Fi</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_11" name="features[]" defaultValue="ch_11" />
                              <label className="custom-control-label" htmlFor="ch_11">Beach</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="ch_12" name="features[]" defaultValue="ch_12" />
                              <label className="custom-control-label" htmlFor="ch_12">Parking</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </section>

        <main id="ts-main">
          <section id="featured-properties" className="ts-block pt-5">
            <div className="container">
              <div className="ts-title text-center">
                <h2>Featured Services</h2>
              </div>
              <div className="row">
              <div className="col-sm-6 col-lg-4">
                  <div className="card ts-item ts-card ts-item__lg">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-03.jpg">
                      <figure className="ts-item__info">
                        <h4></h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4127 Winding Way
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge"></div>
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card ts-item ts-card ts-item__lg">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-03.jpg">
                      <figure className="ts-item__info">
                        <h4></h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4127 Winding Way
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge"></div>
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card ts-item ts-card ts-item__lg">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-03.jpg">
                      <figure className="ts-item__info">
                        <h4></h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          4127 Winding Way
                        </aside>
                      </figure>
                      <div className="ts-item__info-badge"></div>
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*<div className="text-center mt-3">
                <a href="listing-category-icons.html" className="btn btn-outline-dark ts-btn-border-muted">Show All Properties</a>
              </div>*/}
            </div>
          </section>

          <section className="ts-block bg-white">
            <div className="container py-4">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="ts-feature">
                    <figure className="ts-feature__icon p-2">
                      <span className="ts-circle">
                        <i className="fa fa-check" />
                      </span>
                      <img src="assets/img/icon-house.png" alt="" />
                    </figure>
                    <h4>Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="ts-feature">
                    <figure className="ts-feature__icon p-2">
                      <span className="ts-circle">
                        <i className="fa fa-check" />
                      </span>
                      <img src="assets/img/icon-pin.png" alt="" />
                    </figure>
                    <h4>Services</h4>
                    <p>In dictum ac augue et suscipit. Vivamus ac tellus ut massa</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="ts-feature">
                    <figure className="ts-feature__icon p-2">
                      <span className="ts-circle">
                        <i className="fa fa-check" />
                      </span>
                      <img src="assets/img/icon-agent.png" alt="" />
                    </figure>
                    <h4>Services</h4>
                    <p>Vivamus ac tellus ut massa bibendum aliquam vitae ac diam. </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="ts-feature">
                    <figure className="ts-feature__icon p-2">
                      <span className="ts-circle">
                        <i className="fa fa-check" />
                      </span>
                      <img src="assets/img/icon-calculator.png" alt="" />
                    </figure>
                    <h4>Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="subscribe" className="ts-block" data-bg-pattern="assets/img/bg-pattern-topo.png" data-bg-color="#f4f4f4">
            <div className="container">
              <div className="offset-lg-1 col-lg-10">
                {/*<h3>Subscribe for great offers!</h3>
                <form className="ts-form ts-form-email" data-php-path="assets/php/email.php">
                  <div className="row">
                    <div className="col-sm-8 col-md-10">
                      <div className="form-group mb-0">
                        <input type="email" className="form-control" id="email-subscribe" aria-describedby="subscribe" name="email" placeholder="Email Address" required />
                        <small className="form-text mt-2 ts-opacity__50">*You’ll get only relevant news once a week </small>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                      <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                    </div>
                  </div>
                </form>*/}
              </div>
            </div>
          </section>

          <section id="latest-listings" className="ts-block">
            <div className="container">
              <div className="ts-title">
                <h2>Latest Services</h2>
              </div>
              <div className="row">
              <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card ts-item ts-card">
                    <a href="detail-01.html" className="card-img ts-item__image" data-bg-image="assets/img/img-item-thumb-06.jpg">
                      {/*<div className="ts-item__info-badge">
                        $1,245,000
                      </div>
                      <figure className="ts-item__info">
                        <h4>Big Luxury House</h4>
                        <aside>
                          <i className="fa fa-map-marker mr-2" />
                          1350 Arbutus Drive
                        </aside>
                      </figure>*/}
                    </a>
                    <div className="card-body ts-item__body">
                      <div className="ts-description-lists">
                        {/*<dl>
                          <dt>Area</dt>
                          <dd>325m<sup>2</sup></dd>
                        </dl>
                        <dl>
                          <dt>Bedrooms</dt>
                          <dd>2</dd>
                        </dl>
                        <dl>
                          <dt>Bathrooms</dt>
                          <dd>1</dd>
                        </dl>*/}
                      </div>
                    </div>
                    <a href="detail-01.html" className="card-footer">
                      <span className="ts-btn-arrow">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                {/*<a href="listing-category-icons.html" className="btn btn-outline-dark ts-btn-border-muted">Show All Properties</a>*/}
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default FamilyHome;

