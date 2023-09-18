import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <>
    <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Originals" isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

    </>
  );
}

export default App;
