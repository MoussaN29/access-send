import React from 'react';
import Navigation from '../../../common/Navigation';

function FamilyProfile() {
    return (
        <div>
            <Navigation />
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
                
                {/***********************************************************************************************************/}
                {/************* MAIN ****************************************************************************************/}
                {/***********************************************************************************************************/}
                
                </div>

                <div className="page-title">
                    <div className="container">
                        <h2> </h2>
                        <h1>My Profile</h1>
                    </div>
                    {/*end container*/}
                </div>


                <section className="content">
                    <section className="block">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <nav className="nav flex-column side-nav">
                                <a className="nav-link active icon" href="my-profile.html">
                                <i className="fa fa-user" />My Profile
                                </a>
                                <a className="nav-link icon" href="my-ads.html">
                                <i className="fa fa-heart" />Favorites
                                </a>
                                <a className="nav-link icon" href="bookmarks.html">
                                <i className="fa fa-star" />Bookmarks
                                </a>
                                <a className="nav-link icon" href="change-password.html">
                                <i className="fa fa-recycle" />Change Password
                                </a>
                                <a className="nav-link icon" href="sold-items.html">
                                <i className="fa fa-check" />Attended Services
                                </a>
                            </nav>
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-9">
                            <form className="form">
                                <div className="row">
                                <div className="col-md-8">
                                    <h2>Personal Information</h2>
                                    <section>
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="title" className="col-form-label">Title</label>
                                            <select name="title" id="title" data-placeholder="Title">
                                            <option value>Title</option>
                                            <option value={1} selected>Mrs</option>
                                            <option value={2}>Mr</option>
                                            </select>
                                        </div>
                                        {/*end form-group*/}
                                        </div>
                                        <div className="col-md-8">
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-form-label required">Your Name</label>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" defaultValue="Jane Doe" required />
                                        </div>
                                        {/*end form-group*/}
                                        </div>
                                        {/*end col-md-8*/}
                                    </div>
                                    {/*end row*/}
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">Your Location</label>
                                        <input name="location" type="text" className="form-control" id="input-location2" placeholder="Your Location" defaultValue="Manhattan, NY" required />
                                    </div>
                                    {/*end form-group*/}
                                    <div className="form-group">
                                        <label htmlFor="about" className="col-form-label">More About You</label>
                                        <textarea name="about" id="about" className="form-control" rows={4} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."} />
                                    </div>
                                    {/*end form-group*/}
                                    </section>
                                    <section>
                                    <h2>Contact</h2>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="col-form-label">Phone</label>
                                        <input name="phone" type="text" className="form-control" id="phone" placeholder="Your Phone" defaultValue="312-238-3329" />
                                    </div>
                                    {/*end form-group*/}
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label">Email</label>
                                        <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" defaultValue="jane.doe@example.com" />
                                    </div>
                                    {/*end form-group*/}
                                    </section>
                                    <section>
                                    <h2>Social</h2>
                                    <div className="form-group">
                                        <label htmlFor="twitter" className="col-form-label">Twitter</label>
                                        <input name="twitter" type="text" className="form-control" id="twitter" placeholder="http://" defaultValue="http://www.twitter.com/jane.doe" />
                                    </div>
                                    {/*end form-group*/}
                                    <div className="form-group">
                                        <label htmlFor="facebook" className="col-form-label">Facebook</label>
                                        <input name="facebook" type="text" className="form-control" id="facebook" placeholder="http://" defaultValue="http://www.facebook.com/jane.doe" />
                                    </div>
                                    {/*end form-group*/}
                                    </section>
                                    <section className="clearfix">
                                    <button type="submit" className="btn btn-primary float-right">Save Changes</button>
                                    </section>
                                </div>
                                {/*end col-md-8*/}
                                <div className="col-md-4">
                                    
                                </div>
                                {/*end col-md-3*/}
                                </div>
                            </form>
                            </div>
                        </div>
                        {/*end row*/}
                        </div>
                        {/*end container*/}
                    </section>
                    {/*end block*/}
                    </section>
                    {/*end content*/}

        </div>
    );
}

export default FamilyProfile;