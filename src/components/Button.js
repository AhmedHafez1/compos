import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classNames = classnames(
    rest.classes,
    `px-3 py-1.5 flex items-center gap-1`,
    {
      'bg-blue-500 border border-blue-500': primary,
      'bg-gray-900 border border-gray-900': secondary,
      'bg-green-500 border border-green-green': success,
      'bg-yellow-400 border border-yellow-400': warning,
      'bg-red-500 border border-red-500': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-white': !outline,
      'text-blue-500': primary && outline,
      'text-blue-900': secondary && outline,
      'text-green-500': success && outline,
      'text-yellow-400': warning && outline,
      'text-red-500': danger && outline,
    }
  );
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  onlyOneType: ({ primary, secondary, success, warning, danger }) => {
    if (
      Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) >
      1
    ) {
      return new Error('Use Only one type for buttons');
    }
  },
};

export default Button;
