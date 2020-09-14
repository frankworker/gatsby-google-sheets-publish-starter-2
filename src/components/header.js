import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LanguageSwitcher from '@components/LanguageSwitcher';
import { getLocalizedPath } from '@/utils/i18n';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    flexGrow: 1,
  },
  toolBar: {
    padding: 0,
    margin: 0,
  },
  menuButton: {},
  title: {
      display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: 'block',
        flexGrow: 1,
    }
  },
  shortTitle:{
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
        display: 'none',
    }
  },
}));

export default function Header() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolBar}>
            <Typography
              variant="h1"
              className={`${classes.title} clickable`}
              onClick={() => {
                navigate(getLocalizedPath(i18n, '/'));
              }}
            >
                {t('index.title')}
            </Typography>
            <Typography
              variant="h1"
              className={`${classes.shortTitle} clickable`}
              onClick={() => {
                navigate(getLocalizedPath(i18n, '/'));
              }}
            >
                {t('index.shortTitle')}
            </Typography>
            <LanguageSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
      {/* render a second <Toolbar /> component to solve invisible content issue */}
      <Toolbar />
    </>
  );
}
