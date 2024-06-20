import React from 'react';
import Navigation from '../../../common/Navigation';


function FamilyBlog() {
    return (
        <div>
            <Navigation />
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
                
                {/***********************************************************************************************************/}
                {/************* MAIN ****************************************************************************************/}
                {/***********************************************************************************************************/}
                
                </div>

                <section className="block">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8">
                            <article className="blog-post clearfix">
                            <a href="blog-post.html">
                                <img src="assets2/img/blog-image-01.jpg" alt="" />
                            </a>
                            <div className="article-title">
                                <h2><a href="blog-post.html">Example</a></h2>
                                <div className="tags framed">
                                <a href="/#" className="tag">Example</a>
                                <a href="/#" className="tag">Example</a>
                                </div>
                            </div>
                            <div className="meta">
                                <figure>
                                <a href="/#" className="icon">
                                    <i className="fa fa-user" />
                                    John Doe
                                </a>
                                </figure>
                                <figure>
                                <i className="fa fa-calendar-o" />
                                02.05.2017
                                </figure>
                            </div>
                            <div className="blog-post-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                risus mi euismod elit
                                </p>
                                <a href="blog-post.html" className="btn btn-primary btn-framed detail">Read more</a>
                            </div>
                            </article>
                            <article className="blog-post clearfix">
                            <a href="blog-post.html">
                                <img src="assets2/img/blog-image-02.jpg" alt="" />
                            </a>
                            <div className="article-title">
                                <h2><a href="blog-post.html">Example</a></h2>
                                <div className="tags framed">
                                <a href="/#" className="tag">Example</a>
                                <a href="/#" className="tag">Example</a>
                                </div>
                            </div>
                            <div className="meta">
                                <figure>
                                <a href="/#" className="icon">
                                    <i className="fa fa-user" />
                                    John Doe
                                </a>
                                </figure>
                                <figure>
                                <i className="fa fa-calendar-o" />
                                02.05.2017
                                </figure>
                            </div>
                            <div className="blog-post-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                risus mi euismod elit
                                </p>
                                <a href="blog-post.html" className="btn btn-primary btn-framed detail">Read more</a>
                            </div>
                            </article>
                            <article className="blog-post clearfix">
                            <a href="blog-post.html">
                                <img src="assets2/img/blog-image-06.jpg" alt="" />
                            </a>
                            <div className="article-title">
                                <h2><a href="blog-post.html">Example</a></h2>
                                <div className="tags framed">
                                <a href="/#" className="tag">Example</a>
                                <a href="/#" className="tag">Example</a>
                                </div>
                            </div>
                            <div className="meta">
                                <figure>
                                <a href="/#" className="icon">
                                    <i className="fa fa-user" />
                                    John Doe
                                </a>
                                </figure>
                                <figure>
                                <i className="fa fa-calendar-o" />
                                02.05.2017
                                </figure>
                            </div>
                            <div className="blog-post-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                risus mi euismod elit
                                </p>
                                <a href="blog-post.html" className="btn btn-primary btn-framed detail">Read more</a>
                            </div>
                            </article>
                            {/*end Articles*/}
                            <div className="page-pagination">
                            <nav aria-label="Pagination">
                                <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <i className="fa fa-chevron-left" />
                                    </span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="/#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <i className="fa fa-chevron-right" />
                                    </span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                </li>
                                </ul>
                            </nav>
                            </div>
                            {/*end page-pagination*/}
                        </div>
                        {/*end col-md-8*/}
                        <div className="col-md-4">
                            {/*============ Side Bar ===============================================================*/}
                            <aside className="sidebar">
                            <section>
                                <h2>Search Blog</h2>
                                {/*============ Side Bar Search Form ===========================================*/}
                                <form className="sidebar-form form">
                                <div className="form-group">
                                    <label htmlFor="what" className="col-form-label">What?</label>
                                    <input name="keyword" type="text" className="form-control" id="what" placeholder="Enter keyword and press enter" />
                                </div>
                                {/*end form-group*/}
                                </form>
                                {/*============ End Side Bar Search Form =======================================*/}
                            </section>
                            <section>
                                <h2>Popular Posts</h2>
                                <div className="sidebar-post">
                                <a href="blog-post.html" className="background-image">
                                    <img src="assets2/img/blog-image-03.jpg" />
                                </a>
                                {/*end background-image*/}
                                <div className="description">
                                    <h4>
                                    <a href="blog-post.html">Example</a>
                                    </h4>
                                    <div className="meta">
                                    <a href="/#">John Doe</a>
                                    <figure>02.05.2017</figure>
                                    </div>
                                    {/*end meta*/}
                                </div>
                                {/*end description*/}
                                </div>
                                {/*end sidebar-post*/}
                                <div className="sidebar-post">
                                <a href="blog-post.html" className="background-image">
                                    <img src="assets2/img/blog-image-04.jpg" />
                                </a>
                                {/*end background-image*/}
                                <div className="description">
                                    <h4>
                                    <a href="blog-post.html">Example</a>
                                    </h4>
                                    <div className="meta">
                                    <a href="/#">John Doe</a>
                                    <figure>02.05.2017</figure>
                                    </div>
                                    {/*end meta*/}
                                </div>
                                {/*end description*/}
                                </div>
                                {/*end sidebar-post*/}
                                <div className="sidebar-post">
                                <a href="blog-post.html" className="background-image">
                                    <img src="assets2/img/blog-image-05.jpg" />
                                </a>
                                {/*end background-image*/}
                                <div className="description">
                                    <h4>
                                    <a href="blog-post.html">Example</a>
                                    </h4>
                                    <div className="meta">
                                    <a href="/#">John Doe</a>
                                    <figure>02.05.2017</figure>
                                    </div>
                                    {/*end meta*/}
                                </div>
                                {/*end description*/}
                                </div>
                                {/*end sidebar-post*/}
                            </section>
                            <section>
                                <h2>Popular Post</h2>
                                <ul className="sidebar-list list-unstyled">
                                <li>
                                    <a href="/#">January 2017<span>4</span></a>
                                </li>
                                <li>
                                    <a href="/#">February 2017<span>12</span></a>
                                </li>
                                <li>
                                    <a href="/#">October 2016<span>8</span></a>
                                </li>
                                <li>
                                    <a href="/#">August 2016<span>3</span></a>
                                </li>
                                <li>
                                    <a href="/#">May 2016<span>11</span></a>
                                </li>
                                </ul>
                            </section>
                            </aside>
                            {/*============ End Side Bar ===========================================================*/}
                        </div>
                        {/*end col-md-3*/}
                        </div>
                    </div>
                    {/*end container*/}
                    </section>
                    {/*end block*/}


                <script src="assets2/js/jquery-3.3.1.min.js"></script>
                <script type="text/javascript" src="assets2/js/popper.min.js"></script>
                <script type="text/javascript" src="assets2/bootstrap/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyBEDfNcQRmKQEyulDN8nGWjLYPm8s4YB58&libraries=places"></script>
                <script src="assets2/js/selectize.min.js"></script>
                <script src="assets2/js/masonry.pkgd.min.js"></script>
                <script src="assets2/js/icheck.min.js"></script>
                <script src="assets2/js/jquery.validate.min.js"></script>
                <script src="assets2/js/readmore.min.js"></script>
                <script src="assets2/js/custom.js"></script>
        </div>
    );
}

export default FamilyBlog;