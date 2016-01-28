import debugLib from 'debug';
import serialize from 'serialize-javascript';

import React from 'react';
import ReactDOM from 'react-dom/server';

import { createElementWithContext } from 'fluxible-addons-react';
import { navigateAction } from 'fluxible-router';

import app from 'app/app';
import HtmlComponent from 'app/components/Html';

const env = process.env.NODE_ENV;
const debug = debugLib('developers-brasil');

export default (req, res, next) => {
  const context = app.createContext();

  debug('Executing navigate action');
  context.getActionContext().executeAction(navigateAction, {
    url: req.url
  }, (err) => {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        // Pass through to next middleware
        next();
      } else {
        next(err);
      }
      return;
    }

    debug('Exposing context state');
    const exposed = `window.App=${serialize(app.dehydrate(context))};`;

    debug('Rendering Application component into html');
    const markup = ReactDOM.renderToString(createElementWithContext(context));

    const htmlElement = React.createElement(HtmlComponent, {
      clientFile: env === 'production' ? 'main.min.js' : 'main.js',
      context: context.getComponentContext(),
      state: exposed,
      markup: markup
    });

    const html = ReactDOM.renderToStaticMarkup(htmlElement);

    debug('Sending markup');
    res.type('html');
    res.write(`<!DOCTYPE html>${html}`);
    res.end();
  });
};
