import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'react-rte__button';

export default class extends React.Component {
  render() {
    const { active, className, tooltip, ...props } = this.props;
    return (
      <button
        aria-label={tooltip}
        data-balloon-pos="up"
        className={classNames({ 'is-active': active }, CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
