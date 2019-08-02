import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    position: 'relative',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
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

export default function LanguageSelect() {
  const nativeSelectStyles = useNativeSelectStyles();
  const styles = useStyles();
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
      className={styles.navLink}
      inputProps={{ 'aria-label': 'language' }}
    >
      <option className={styles.bgOption} value="EN">EN</option>
      <option className={styles.bgOption} value="RU">RU</option>
      <option className={styles.bgOption} value="BY">BY</option>
    </NativeSelect>
  );
}
