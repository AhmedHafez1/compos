import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

  const classes = classNames('text-blue-500');

  const onNavigate = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={onNavigate} href="to">
      {children}
    </a>
  );
};

export default Link;
