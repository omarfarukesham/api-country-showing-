const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCoutires(data))
}


const displayCoutires = (countries) => {
    const substractInfo = countries.slice(0,9)
    const seclectId = document.getElementById('countries')

    substractInfo.forEach(country => {        
        const div = document.createElement('div')
            div.classList.add('country-detail-design')
            div.innerHTML = `
            Name: ${country.name.common}<br>
            Capital: ${country.capital}  <br>
            <button onclick="loadDetailsByName('${country.name.common}')">Details</button>          
        `       
        seclectId.appendChild(div)

    });

}

const loadDetailsByName = (name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}'`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetailsInfo(data[0]))
}

const displayDetailsInfo = (data) =>{
    const detailsInfo = document.getElementById('country-details')

    
 
    // const div = document.createElement('div')
    detailsInfo.innerHTML = `
        <h3>Country Name: ${data.name.common}</h3>
      <h4>Total Population:${data.population}</h4>
      <img src="${data.flags.png}" alt="country image" >
    `
    // detailsInfo.appendChild(div)
  
  
}