import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
  render() {
    const selected = this.props.currentRoute;
    const links = this.props.links;

    const linkHTML = Object.keys(links).map((name) => {
      var className = '';
      var link = links[name];

      if (selected && selected.get('name') === name) {
        className = 'active';
      }

      return (
        <li className={className} key={link.path}>
          <NavLink routeName={ link.page }>{link.title}</NavLink>
        </li>
      );
    });

    return (
      <nav className="nav-wrapper">
        <div className="container">
          <a className="heading-3">Developer News Brasil</a>

          <ul className="right hide-on-med-and-down">
            {linkHTML}
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.defaultProps = {
  selected: null,
  links: {}
};

export default Nav;
