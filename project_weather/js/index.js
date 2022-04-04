document.querySelector('.btn_ok').addEventListener('click',btn_fun)
let loc_name
function btn_fun(){
    loc_name = document.querySelector('.text_field').value
    fetch(`https://goweather.herokuapp.com/weather/${loc_name}`)
    .then(response => response.json())
    .then(data => htmlrender(data))
    .catch(err => handleerror(err))
}

function handleerror(err){
    let html = `<div> Something Went Wrong </div>`
    document.querySelector('.container').insertAdjacentHTML('beforeend',html)
}

    
function htmlrender(data){

    let desp = data.description
    let temp = data.temperature
    let wind = data.wind
    let forecast_temp = data.forecast[0].temperature
    let forecast_wind = data.forecast[0].wind
    // let forecast_description = data.forecast[0].description
    console.log(forecast_temp)


    document.querySelector('.climate').innerHTML = desp
    document.querySelector('.wind_speed').innerHTML = wind
    document.querySelector('.temperature').innerHTML = temp
    document.querySelector('.location').innerHTML = `${loc_name}`
    document.querySelector('.fore_cast_temp').innerHTML = forecast_temp
    document.querySelector('.fore_  cast_wind').innerHTML = forecast_wind
    // document.querySelector('.fore_cast_description').innerHTML = forecast_description
 
    
}
 