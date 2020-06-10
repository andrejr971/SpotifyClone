import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LayoutAuth from '../pages/_layouts/auth';
import LayoutDefault from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivite,
  isAdmin,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { administrator } = store.getState().user.profile;

  if (!signed && isPrivite) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivite) {
    return <Redirect to="/home" />;
  }

  if (!administrator && isAdmin) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? LayoutDefault : LayoutAuth;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivite: PropTypes.bool,
  isAdmin: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivite: false,
  isAdmin: false,
};
