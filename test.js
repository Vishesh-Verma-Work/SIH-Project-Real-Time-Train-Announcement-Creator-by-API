let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    const url = 'https://trains.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '57c1c13a5fmshc16294b1f5b318fp1e9442jsnb04442ccd003',
            'X-RapidAPI-Host': 'trains.p.rapidapi.com'
        },
        body: JSON.stringify({ search: 'Rajdhani' }) // Stringify the body
    };

    try {
        console.log("Not working :(");
        const response = await fetch(url, options);
        
        const result = await response.json();

        for(let i=0; i<result.length; i++){
            try {
                console.log("Train : ",i+1);
                console.log("Train Name : ", result[i].name);
                console.log("Train Number : ", result[i].train_num);
                console.log("From : ", result[i].train_from);
                console.log("To : ", result[i].train_to);
                console.log("");
            }
            catch(e){
                console.log(e);
            }
        } 
        

    } catch (error) {
        console.error(error);
    }
});

