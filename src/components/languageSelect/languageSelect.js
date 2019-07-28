import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(() => ({
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
  bgOption: {
    color: 'black',
  },
}));

export default function LanguageSelect() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('RU');

  const handleChange = () => (event) => {
    setLanguage(event.target.value);
  };

  return (
    <NativeSelect
      value={language}
      onChange={handleChange('language')}
      name="language"
      classes={classes}
      inputProps={{ 'aria-label': 'language' }}
    >
      <option className={classes.bgOption} value="EN">EN</option>
      <option className={classes.bgOption} value="RU">RU</option>
      <option className={classes.bgOption} value="BY">BY</option>
    </NativeSelect>
  );
}
