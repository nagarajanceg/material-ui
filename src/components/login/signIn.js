import React, { Component } from 'react';
import { PropTypes, instanceOf } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { API } from '../common/ApiPath';
import { getMenu } from '../common/config';
import get from 'lodash/get';
import { I18n } from '../../i18n';
import { withNamespaces } from 'react-i18next';
import compose from 'recompose/compose';
import { withCookies, Cookies } from 'react-cookie';

const themes = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: teal[400]
    }
  }
});
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    // backgroundColor: theme.palette.primary.main
    backgroundColor: teal[400]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const getRouteFromUser = userType => {
  const userMenu = getMenu(userType);
  return userMenu[0].id;
};

class SignIn extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      email: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { cookies } = this.props;
    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });
    var self = this;
    /*Getting user browser language by default and try to set it our database
      if they don't have any language preference. Any how we are providing two language support as of now. Suppose their browser language preference doesn't match load the site in en.
    */
    var userLang =
      cookies.get('language') || navigator.language || navigator.userLanguage;
    fetch(`${API.url}/validateLogin?lang=${userLang}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(data => data.json())
      .then(res => {
        self.setState({
          response: res
        });
        //Check response language and if it is there set it to I18n
        const i18Instance = I18n();
        i18Instance.changeLanguage(res.user_vo.country_code, (err, t) => {
          if (err)
            return console.log(
              'something went wrong loading the language',
              err
            );
        });
        if (res && res.user_vo) {
          cookies.set('language', res.user_vo.country_code);
          cookies.set('user_email', res.user_email);
          self.props.onLogin(res);
          self.routeChange(getRouteFromUser(res.user_vo.type), res);
        }
        self.setState({ loading: false });
      });
  }

  routeChange = (path, data) => {
    this.props.history.push({ pathname: `/${path}`, state: { data } });
  };

  render() {
    const { classes, t } = this.props;
    return (
      <MuiThemeProvider theme={themes}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t('login_screen')}
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">{t('email_id')}</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">{t('password')}</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t('remember_me')}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                {t('login')}
              </Button>
            </form>
          </Paper>
        </main>
      </MuiThemeProvider>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withNamespaces(), withCookies)(
  SignIn
);
