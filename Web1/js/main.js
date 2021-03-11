//let butOnePoke = document.getElementById("sumbit").addEventListener("click", getTest);
//let butAllPoke = document.getElementById("fullList").addEventListener("click", getAllPoke);
//let butPokeClass = document.getElementById("obtPokeByClass").addEventListener("click", getPokeClass);
//let onePoke = document.getElementById("onePoke").value;
//let idPoke = document.getElementById("idPost").value;
//let namePoke = document.getElementById("namePoke").value;
let butPost = document.querySelector('#butTienda').addEventListener("click", post);
let getPost = document.getElementById("getTienda").addEventListener("click", getItems);


function getTest() {
    const getDataAsync = async(idPoke) => {
        try {
            if (idPoke >= 1 & idPoke < 899) {
                const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
                const poke = await resPoke.json();
                console.log(poke);
                // const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.allPokeId}`)
                // const allPoke = await resAllPoke.json();
                onePoke.innerHTML = poke.name;
            }
            if (idPoke < 1 || idPoke == '') {
                idPoke = 1;
                console.log("If 2")
                const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
                const poke = await resPoke.json();
                for (let i = 0; i < poke.id; poke.id++) {
                    console.log("for" + " " + poke.name);
                    const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`);
                    const allPoke = await resAllPoke.json();

                    function createP() {
                        let divAll = document.getElementById("allPoke");
                        let p = document.createElement("p");
                        p.innerHTML = allPoke.name;
                        divAll.appendChild(p)
                    }
                    createP();
                }

            }
            //  if para treaer a los pokemons si el usuario ponia 0 o dejaba vacio.
        } catch (error) {
            console.log("error" + " " + error);
        }
    }
    getDataAsync(idPoke);
}

function getAllPoke() {
    const getDataAsync = async(idPoke) => {
        try {
            idPoke++;
            console.log("If 2")
            const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
            const poke = await resPoke.json();
            for (let i = 0; i < poke.id; poke.id++) {
                console.log("for" + " " + poke.name);
                const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`);
                const allPoke = await resAllPoke.json();

                function createP() {
                    let divAll = document.getElementById("allPoke");
                    let p = document.createElement("p");
                    p.innerHTML = allPoke.name;
                    divAll.appendChild(p)
                }
                createP();
            }
        } catch (error) {
            console.log("error" + " " + error);
        }
    }
    getDataAsync(idPoke)
}

function getPokeClass() {
    const getDataAsync = async(idPoke) => {
        try {
            idPoke = 1;
            const resPoke = await fetch(`https://pokeapi.co/api/v2/type/${idPoke}`);
            const poke = await resPoke.json();
            console.log(namePoke);
            for (let i = 0; i < poke.id; poke.id++) {
                const resAllPoke = await fetch(`https://pokeapi.co/api/v2/type/${poke.id}`);
                const allPoke = await resAllPoke.json();
                console.log(allPoke.name);
                console.log(namePoke);
                if (namePoke == allPoke.name || namePoke != '') {
                    function createP() {
                        let divAll = document.getElementById("allPokeByName");
                        let p = document.createElement("p");
                        p.innerHTML = allPoke.name;
                        divAll.appendChild(p)
                    }
                    createP();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    getDataAsync(idPoke)
}
async function post() {
    let div = document.querySelector(".seGuardo");
    div.innerHTML = "Guardando...*";
    let url = `https://jsonplaceholder.typicode.com/posts`;
    let title = {
        "thing": {
            "userId": 1,
            "id": 2,
            "title": "mira como está la vagancia",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    };
    try {
        let r = await fetch(url, {
            'method': "POST",
            'headers': {
                'Content-Type': 'aplication-json'
            },
            'body': JSON.stringify(title),
        });
        let json = r.json();
        console.log(json);
        console.log(title);
        div.innerHTML = "se guardo :)";
    } catch {
        (error);
        div.innerHTML = "no se guardo :c";
    }
}
async function getItems() {
    let div = document.querySelector(".getItems");
    let url = `https://jsonplaceholder.typicode.com/posts`;
    try {
        let r = await fetch(url);
        let json = r.json();
        let html = "";
        for (const elem of json) {
            html += "<p>" + elem.thing.title + "</p>";
        }
        div.innerHTML = html;
    } catch {
        (error);
    }
}