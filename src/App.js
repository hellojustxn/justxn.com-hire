import './App.css';
import CloudBackground from './components/CloudBackground';
import { makeStyles,  createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
        <CloudBackground />
        <div className="Container">
          <Profile  />
        </div> 
      </ThemeProvider>
    </div>
  );
}

export default App;
