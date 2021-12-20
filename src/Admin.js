import React, { Component } from 'react';

import Event from './Event';
import LeftBar from './LeftBar';
import TopBar from './TopBar';

const events = [
    {
        title: 'Raiders-Browns shifts to Mon.; 2 games on Tues.',
    },
    {
        title: 'Saints coach Payton again tests positive for virus',
    },
    {
        title: 'TE Parham suffered concussion, to leave hospital',
    },
    {
        title: 'Pats RB Harris out vs. Colts with hamstring injury',
    },
    {
        title: 'Harbaugh: Lamar may play, but still no practice',
    },
    {
        title: "Packers Rodgers not practicing but 'ready to go'",
    },
    {
        title: 'Sportsbooks scramble as COVID alters NFL lines',
    },
    {
        title: 'Arians: Decision on suspensions not "distacting"',
    },
];

const leftBar = [
    {
        list: 'Man In The Arena: Tom Brady'
    },
    {
        list: 'NFL PrimeTime'
    },
    {
        list: 'NFL Turning Point'
    },
    {
        list: 'NFL Matchup'
    },
    {
        list: 'The Fantasy Show w/ Matthew Berry'
    },
    {
        list: 'Detail, Super Bowl Archives, NFL Films and more'
    },
    {
        list: 'PickCenter: Betting Guide'
    }
];

const directory = [
    {
        link: 'Home'
    },
    {
        link: 'Scores'
    },
    {
        link: 'Schedule'
    },
    {
        link: 'Standings'
    },
    {
        link: 'Stats'
    },
    {
        link: 'Teams'
    },
    {
        link: 'Fantacy Football'
    },
    {
        link: 'NFL Daily Lines'
    },
    {
        link: "Pigskin Playoff Pick'em"
    },
    {
        link: 'Depth Charts'
    },
    {
        link: 'More'
    },

];

const displayTopBar = directory.map((item, idx) => {
    return (
        <TopBar key={idx} index={idx} link={item.link} />
    );
})

const displayEvents = events.map((event, idx) => {
    return (
        <Event key={idx} index={idx} title={event.title} />
    );
});

const displayLeftBar = leftBar.map((item, idx) => {
    return (
        <LeftBar key={idx} index={idx} list={item.list} />
    );
});

class Admin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item brand-text" title="logo" href="../index.html">
                                NFL
                            </a>
                            <div className="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navMenu" className="navbar-menu">
                            <div className="navbar-start">
                                {displayTopBar}
                            </div>

                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 ">
                            <aside className="menu is-hidden-mobile" title="leftBar">
                                <p className="menu-label">
                                    ESPN+
                                </p>
                                <ul className="menu-list">
                                    {displayLeftBar}
                                </ul>
                            </aside>
                        </div>
                        <div className="column is-9">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    <li><a href="../">Bulma</a></li>
                                    <li><a href="../">Templates</a></li>
                                    <li><a href="../">Examples</a></li>
                                    <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                                </ul>
                            </nav>
                            <section className="hero is-info welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">
                                            Hello, Admin.
                                        </h1>
                                        <h2 className="subtitle">
                                            I hope you are having a great day!
                                        </h2>
                                    </div>
                                </div>
                            </section>
                            <section className="info-tiles">
                                <div className="tile is-ancestor has-text-centered">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">439k</p>
                                            <p className="subtitle">Users</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">59k</p>
                                            <p className="subtitle">Products</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">3.4k</p>
                                            <p className="subtitle">Open Orders</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">19</p>
                                            <p className="subtitle">Exceptions</p>
                                        </article>
                                    </div>
                                </div>
                            </section>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card events-card">
                                        <header className="card-header">
                                            <p className="card-header-title" title="events">
                                                Events
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-table">
                                            <div className="content">
                                                <table className="table is-fullwidth is-striped">
                                                    <tbody>
                                                        {displayEvents}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <footer className="card-footer">
                                            <a href="#" className="card-footer-item">View All</a>
                                        </footer>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Inventory Search
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-large" type="text" placeholder="" />
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                User Search
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-large" type="text" placeholder="" />
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;