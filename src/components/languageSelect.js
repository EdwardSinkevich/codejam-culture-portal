import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Language } from 'gatsby-plugin-i18next';


const useStyles = makeStyles(() => ({
  bgOption: {
    color: 'black',
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
}

export default props => (
  <Language>{lngProps => <LanguageSelect {...props} {...lngProps} />}</Language>
);
