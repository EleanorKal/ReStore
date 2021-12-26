// Where the name element value is the same, to enforce uniqueness you can specify a further parameter
// aside from the key unique identifier as follows where the index parameter has been added
// with the key parameters wrapped inside parentheses.
// {products.map((item, index) =>

// Within the ordered list, li - you can now wrap both key parameters in parenthese and reference them.
// the App function below uses React hook to main persistence via "useState"

// with the useEffect react hook we want the UI to do something as a result of a specified event
// here we specify the callback function which responds with fetching json data from the api/Products
// then updating our database with the new data. In order words - the useEffect shown here re-renders the UI

// Important!!!!
// as the array specified here [] is empty, this means that the dependency will only be called once.
// this is one-time specification is important, otherwise the useEffect will run infinitely or until 
// the program runs out of allocated memory space.

// the elipses is known as a 'spread operator' which indicates that a range will be declared




import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container> 
    </ThemeProvider>
  );
}

export default App;