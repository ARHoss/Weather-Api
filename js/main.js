//fetch using Acu Weahter API
// Location code: 52479
// API key: XGx4uzId8sWj8ylpHQKFFxHE8DFoHcxx

let weather = {
  'cloudy':'https://media.giphy.com/media/CsX2sqtFlV55e/giphy.gif',
  'sunny':'https://i.gifer.com/CZx.gif',
  'rainy':'https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif',
  'snow':'https://i.pinimg.com/originals/56/73/6e/56736e99269e9e1fe8eed4b8b911644e.gif'
}

// Default
currentWeather();
// Current
document.querySelector('#current').addEventListener('click', currentWeather);
// Snow
document.querySelector('#snow').addEventListener('click', () => {
  document.querySelector('body').style.backgroundImage=`url(${weather.snow})`;
});
// Rainy
document.querySelector('#rainy').addEventListener('click', () => {
  document.querySelector('body').style.backgroundImage=`url(${weather.rainy})`;
});
// Sunny
document.querySelector('#sunny').addEventListener('click', () => {
  document.querySelector('body').style.backgroundImage=`url(${weather.sunny})`;
});
// Cloudy
document.querySelector('#cloudy').addEventListener('click', () => {
  document.querySelector('body').style.backgroundImage=`url(${weather.cloudy})`;
});


function currentWeather(){

  // Current Weather
  const url = 'https://dataservice.accuweather.com/currentconditions/v1/52479?apikey=XGx4uzId8sWj8ylpHQKFFxHE8DFoHcxx'


  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    
    let currentConditions = data[0].WeatherText.split(' ');
    currentConditions = currentConditions[currentConditions.length-1].toLowerCase();
    
    let temp = data[0].Temperature.Metric.Value+' C'
    

    if(currentConditions == 'cloudy'){
      document.querySelector('body').style.backgroundImage=`url(${weather.cloudy})`;
    }else if(currentConditions == 'sunny'){
      document.querySelector('body').style.backgroundImage=`url(${weather.sunny})`;
    }else if(currentConditions == 'rainy'){
      document.querySelector('body').style.backgroundImage=`url(${weather.rainy})`;
    }else if(currentConditions == 'snow'){
      document.querySelector('body').style.backgroundImage=`url(${weather.snow})`;
    }

    document.querySelector('#temp').innerText = temp


    console.log(currentConditions)
    console.log(data[0].Temperature.Metric.Value);
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}
 
