import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

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

export default function LanguageSelect() {
  const nativeSelectStyles = useNativeSelectStyles();
  const optionsStyles = useStyles();
  const [language, setLanguage] = React.useState('RU');

  const handleChange = () => (event) => {
    setLanguage(event.target.value);
  };

  return (
    <NativeSelect
      value={language}
      onChange={handleChange('language')}
      name="language"
      classes={nativeSelectStyles}
      inputProps={{ 'aria-label': 'language' }}
    >
      <option className={optionsStyles.bgOption} value="EN">EN</option>
      <option className={optionsStyles.bgOption} value="RU">RU</option>
      <option className={optionsStyles.bgOption} value="BY">BY</option>
    </NativeSelect>
  );
}
