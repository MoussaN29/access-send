import React from 'react';
import Navigation from '../../../common/Navigation';

function FamilyMessage() {
    return (
        <div>
            <Navigation />
            <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
                
                {/***********************************************************************************************************/}
                {/************* MAIN ****************************************************************************************/}
                {/***********************************************************************************************************/}
                
                </div>

                <section className="content">
                    <section className="block">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4">
                            {/*============ Section Title===========================================================*/}
                            <div className="section-title clearfix">
                                <h3>People</h3>
                            </div>
                            <div id="messaging__chat-list" className="messaging__box">
                                <div className="messaging__header">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                    <a className="nav-link active" href="/#">All</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#">1</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#">2</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/#">3</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="messaging__content">
                                <ul className="messaging__persons-list">
                                    <li>
                                    <a href="/#" className="messaging__person">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-01.jpg" />
                                        <figure className="content">
                                        <h5>Jane Brown</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</p>
                                        <small>24 Hour Ago</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-01.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                    <li>
                                    <a href="/#" className="messaging__person active">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-03.jpg" />
                                        <figure className="content">
                                        <h5>Rosina Warner</h5>
                                        <p>Fusce consectetur nibh ac euismod vestibulum. Sed sit amet elit tellus</p>
                                        <small>48 Hour Ago</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-02.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                    <li>
                                    <a href="/#" className="messaging__person">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-05.jpg" />
                                        <figure className="content">
                                        <h5>George A. Stevens</h5>
                                        <p>Nam vel egestas lacus, eget rutrum justo. Fusce eleifend, magna ac venenatis</p>
                                        <small>28.03.2017</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-03.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                    <li>
                                    <a href="/#" className="messaging__person">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-06.jpg" />
                                        <figure className="content">
                                        <h5>Renee Williams</h5>
                                        <p>Donec consequat lobortis erat non tempus. Quisque id accumsan velit.</p>
                                        <small>05.03.2017</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-04.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                    <li>
                                    <a href="/#" className="messaging__person">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-07.jpg" />
                                        <figure className="content">
                                        <h5>Nicola Armstrong</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</p>
                                        <small>11.01.2017</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-05.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                    <li>
                                    <a href="/#" className="messaging__person">
                                        <figure className="messaging__image-item" data-background-image="assets2/img/image-08.jpg" />
                                        <figure className="content">
                                        <h5>Ruby Manuel</h5>
                                        <p>Suspendisse potenti. Quisque vel ipsum in purus pretium malesuada. </p>
                                        <small>24.08.2016</small>
                                        </figure>
                                        <figure className="messaging__image-person" data-background-image="assets2/img/author-06.jpg" />
                                    </a>
                                    {/*messaging__person*/}
                                    </li>
                                </ul>
                                {/*end messaging__persons-list*/}
                                </div>
                                {/*messaging__content*/}
                            </div>
                            {/*end section-title*/}
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-7 col-lg-7 col-xl-8">
                            {/*============ Section Title===========================================================*/}
                            <div className="section-title clearfix">
                                <h3>Message Window</h3>
                            </div>
                            {/*end section-title*/}
                            <div id="messaging__chat-window" className="messaging__box">
                                <div className="messaging__header">
                                <div className="float-left flex-row-reverse messaging__person">
                                    <h5 className="font-weight-bold">Rosina Warner</h5>
                                    <figure className="mr-4 messaging__image-person" data-background-image="assets2/img/author-02.jpg" />
                                </div>
                                <div className="float-right messaging__person">
                                    <h5 className="mr-4">You</h5>
                                    <figure id="messaging__user" className="messaging__image-person" data-background-image="assets2/img/author-06.jpg" />
                                </div>
                                </div>
                                <div className="messaging__content" data-background-color="rgba(0,0,0,.05)">
                                <div className="messaging__main-chat">
                                    <div className="messaging__main-chat__bubble">
                                    <p>
                                        Curabitur vel venenatis sem. Fusce suscipit pharetra nisl, sit amet blandit sem sollicitudin ac.
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                    <div className="messaging__main-chat__bubble">
                                    <p>
                                        Vivamus laoreet nisl a odio commodo varius. Donec arcu mauris, molestie a euismod at,
                                        mattis eu arcu. Cras volutpat, velit sit amet cursus molestie, ex ipsum sagittis urna,
                                        vitae auctor augue erat eget justo. Sed dignissim lacus risus, ut blandit nunc volutpat
                                        quis. Fusce porta semper nisi, quis lobortis nulla ultricies ac.
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                    <div className="messaging__main-chat__bubble user">
                                    <p>
                                        Cras volutpat, velit sit amet cursus molestie, ex ipsum sagittis urna,
                                        vitae auctor augue erat eget justo. Sed dignissim lacus risus, ut blandit nunc
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                    <div className="messaging__main-chat__bubble user">
                                    <p>
                                        Sed dignissim lacus risus, ut blandit nunc
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                    <div className="messaging__main-chat__bubble">
                                    <p>
                                        Donec consequat lobortis erat non tempus. Quisque id accumsan velit. Nullam mollis bibendum ex.
                                        Integer egestas nisi nulla, ut tempus mi euismod in
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                    <div className="messaging__main-chat__bubble user">
                                    <p>
                                        Quisque id accumsan velit. Nullam mollis bibendum ex.
                                        Integer egestas nisi nulla, ut tempus mi euismod in
                                        <small>24 hour ago</small>
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="messaging__footer">
                                <form className="form">
                                    <div className="input-group">
                                    <input type="text" className="form-control mr-4" placeholder="Your Message" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">Send <i className="fa fa-send ml-3" /></button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                            {/*end col-md-9*/}
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

export default FamilyMessage;