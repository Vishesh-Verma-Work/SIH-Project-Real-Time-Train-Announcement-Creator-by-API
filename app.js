let btn = document.querySelector("#btn");
// let jsnname = document.querySelector(".jsname");
let jsnum = document.querySelector(".jsnum");
let jsfrom = document.querySelector(".jsfrom");
let jsto = document.querySelector(".jsto");


let trainChoice = document.querySelector("#trainChoice");
let trainChoiceForm = document.querySelector("#trainChoiceForm");
let MainTable = document.querySelector("#mainTable");

// trainChoiceForm.addEventListener("submit", function (event) {
//     event.preventDefault();
    // ch = trainChoice.value;
//     console.log(ch);

// });

trainChoiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = 'https://trains.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '57c1c13a5fmshc16294b1f5b318fp1e9442jsnb04442ccd003',
            'X-RapidAPI-Host': 'trains.p.rapidapi.com'
        },
        body: JSON.stringify({ search: trainChoice.value}) // Stringify the body
    };

    try {
        
        MainTable.style.display = "flex";
        

        const response = await fetch(url, options);

        const result = await response.json();

        for (let i = 0; i < result.length; i++) {
            try {
                console.log("Train : ", i + 1);
                console.log("Train Name : ", result[i].name);
                console.log("Train Number : ", result[i].train_num);
                console.log("From : ", result[i].train_from);
                console.log("To : ", result[i].train_to);
                console.log("ar : ", result[i].data.arriveTime);
                console.log("dep : ", result[i].data.departTime);
                console.log("");

                const jsname = document.querySelector(`.jsname${i}`);
                jsname.innerText = result[i].name;
                const jsnum = document.querySelector(`.jsnum${i}`);
                jsnum.innerText = result[i].train_num;
                const jsfrom = document.querySelector(`.jsfrom${i}`);
                jsfrom.innerText = result[i].train_from;
                const jsto = document.querySelector(`.jsto${i}`);
                jsto.innerText = result[i].train_to;
                const jsarv = document.querySelector(`.jsarv${i}`);
                jsarv.innerText = result[i].data.arriveTime;
                const jsdep = document.querySelector(`.jsdep${i}`);
                jsdep.innerText = result[i].data.departTime;

            }
            catch (e) {
                console.log(e);
            }
        }

    } catch (error) {
        console.error(error);
    }
});

