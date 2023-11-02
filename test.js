let btn = document.querySelector("#btn");

btn.addEventListener("click", async()=>{
    const url = 'https://trains.p.rapidapi.com/';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '57c1c13a5fmshc16294b1f5b318fp1e9442jsnb04442ccd003',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: {search: 'Rajdhani'}
};

try {
    console.log("Not working :(");
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})
