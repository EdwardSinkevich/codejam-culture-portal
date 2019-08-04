import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Language } from 'gatsby-plugin-i18next';


const useStyles = makeStyles(theme => ({
  bgOption: {
    color: 'black',
  },
  selectRoot: {
    fontSize: '20px',
    color: 'inherit',
  },
  navLink: {
    color: 'inherit',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
}));

const useNativeSelectStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  select: {
    padding: '17px',
    fontSize: '15px',
    fontWeight: '600',
  },
  icon: {
    display: 'none',
  },
}));

const LanguageSelect = ({ changeLng, lng, availableLngs }) => {
  const nativeSelectStyles = useNativeSelectStyles();
  const optionsStyles = useStyles();

  window.localStorage.lng = lng;

  const handleChange = (event) => {
    changeLng(event.target.value);
    event.target.parentNode.value = lng;

    window.localStorage.lng = event.target.value;

    const comp = new React.Component();

    comp.setState();
  };

  return (
    <NativeSelect
      disableUnderline
      value={lng}
      onChange={handleChange}
      name="language"
      classes={nativeSelectStyles}
      className={optionsStyles.navLink}
      inputProps={{ 'aria-label': 'language' }}
    >
      {availableLngs.map((lang, indx) => (<option key={indx} className={optionsStyles.bgOption} value={lang}>{lang.toUpperCase()}</option>))}
    </NativeSelect>
  );
};

export default props => (
  <Language>{lngProps => <LanguageSelect {...props} {...lngProps} />}</Language>
);
