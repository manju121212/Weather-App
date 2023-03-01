const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc381c1192mshe9bb1872752017bp163349jsnd9e21d743624',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct1.innerHTML = response.cloud_pct
        temp1.innerHTML= response.temp
        feels_like1.innerHTML= response.feels_like
        humidity1.innerHTML= response.humidity
        min_temp1.innerHTML=response.min_temp
        max_temp1.innerHTML= response.max_temp
       
      
		
		
		
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct2.innerHTML = response.cloud_pct
        temp2.inerHTML= response.temp
        feels_like2.innerHTML= response.feels_like
        humidity2.innerHTML= response.humidity
        min_temp2.innerHTML=response.min_temp
        max_temp2.innerHTML= response.max_temp
       
		
		
		
	})
	.catch(err => console.error(err));



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML= response.temp
        feels_like3.innerHTML= response.feels_like
        humidity3.innerHTML= response.humidity
        min_temp3.innerHTML=response.min_temp
        max_temp3.innerHTML= response.max_temp
     
      
		
		
		
	})
	.catch(err => console.error(err));



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML= response.temp
        feels_like4.innerHTML= response.feels_like
        humidity4.innerHTML= response.humidity
        min_temp4.innerHTML=response.min_temp
        max_temp4.innerHTML= response.max_temp
      
       
		
		
		
	})
	.catch(err => console.error(err));














const getWeather =(city)=>{
	cityname.innerHTML = city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML= response.temp
        feels_like.innerHTML= response.feels_like
        humidity.innerHTML= response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML= response.max_temp
        wind_speed.innerHTML= response.wind_speed
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML= response.sunset 

	})
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value);
})

getWeather("Delhi")