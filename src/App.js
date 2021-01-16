import './App.css';
import Background from './components/Background';
import { makeStyles,  createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import Profile from './components/Profile';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Background />
        <div className="Container">
          <Profile  />
        </div> 
      </ThemeProvider>
    </div>
  );
}

export default App;
