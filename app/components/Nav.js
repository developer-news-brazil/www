import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
  render() {
    const selected = this.props.currentRoute;
    const links = this.props.links;

    const linkHTML = Object.keys(links).map((name) => {
      var className = 'navigation-item';
      var link = links[name];

      if (selected && selected.get('name') === name) {
        className += ' active';
      }

      return (
        <li className={className} key={link.path}>
          <NavLink routeName={ link.page }>{link.title}</NavLink>
        </li>
      );
    });

    return (
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img className="img" src="/public/img/logo.png" />
          </a>
          <nav className="navigation">
            {linkHTML}
          </nav>
        </div>
      </header>
    );
  }
}

Nav.defaultProps = {
  selected: null,
  links: {}
};

export default Nav;
