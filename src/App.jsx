import {countries} from '../public/assets/data/countries.jsx'

function App() {
  return (
    <div className="container">

      <div className="header">

        <div className="leftPart">
          <h1 className='headerText'>Where in the world?</h1>
        </div>

        <div className="rightPart" onClick={ChangeTheme}>
          <img src="/public/assets/img/dark-mode-icon.svg" alt="" />
          <p>Dark Mode</p>
        </div>
      </div>

      <div className="innerContainer">
        
        <div className="innerFilter">

          <div className="filterArea">
            <input class="filterInput" type="text" placeholder='Search for a country...' />
            <img class="searchIcon" src="../public/assets/img/search-icon.svg" alt="" />
          </div>

          <div className="continentSelect">

              <select name="continent" id="continent-select" >
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Ocenia">Ocenia</option>

              </select>
          </div>

      </div>
        <Countries /> 
      </div>
    </div>
  )
}

function Countries() {
  const country =  countries.map( x => <Country key = {x.cca3} name = {x.name.common}
    population = {x.population} region = {x.region} capital = {x.capital} image = {x.flags.svg} />)
  return (
    <>
      <div className="countryList">{country}</div>
    </>
  )
}

function Country ({name, population, region, capital, image}) {
  return(
    <div className="countryCard">
      <div className="flagArea">
        <img className='countryFlag' src={image} alt={name} />
      </div>
      <p className='countryName'>{name}</p>
      <p class="info"><span>Population : </span>  <span className='infoText'>{population}</span></p>
      <p class="info"><span>Region :</span>       <span className='infoText'>{region}</span></p>
      <p class="info"><span>Capital : </span>     <span className='infoText'>{capital}</span></p>
    </div>
  )
}


function ChangeTheme() {
  if(document.body.classList.contains('darkMode')) {
    document.body.classList.remove('darkMode');
  }
  else {
  document.body.classList.add('darkMode');
  }
}


export default App;
