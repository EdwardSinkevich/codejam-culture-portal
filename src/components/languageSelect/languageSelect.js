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
    padding: 0,
    color: 'white',
    fontSize: '17px',
    'margin-top': '14px',
  },
  icon: {
    display: 'none',
  },
}));

const LanguageSelect = ({ changeLng, lng, availableLngs }) => {
  const nativeSelectStyles = useNativeSelectStyles();
  const optionsStyles = useStyles();

  const handleChange = (event) => {
    changeLng(event.target.value);
    event.target.parentNode.value = lng;
  };

  const nativeSelect = (
    <NativeSelect
      value={lng}
      onChange={handleChange}
      name="language"
      classes={nativeSelectStyles}
      inputProps={{ 'aria-label': 'language' }}
    >
      {availableLngs.map((lang) => {
        return (<option className={optionsStyles.bgOption} value={lang}>{lang.toUpperCase()}</option>)
      })}

    </NativeSelect>
  );


  return nativeSelect;
};

export default props => (
  <Language>{lngProps => <LanguageSelect {...props} {...lngProps} />}</Language>
);
