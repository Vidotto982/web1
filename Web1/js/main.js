let butOnePoke = document.getElementById("sumbit").addEventListener("click", getTest);
let butAllPoke = document.getElementById("fullList").addEventListener("click", getAllPoke);

let onePoke = document.getElementById("onePoke");
let idPoke = document.getElementById("idPost").value;

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
            // if (idPoke < 1 || idPoke == '') {
            //     idPoke = 1;
            //     console.log("If 2")
            //     const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
            //     const poke = await resPoke.json();
            //     for (let i = 0; i < poke.id; poke.id++) {
            //         console.log("for" + " " + poke.name);
            //         const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`);
            //         const allPoke = await resAllPoke.json();

            //         function createP() {
            //             let divAll = document.getElementById("allPoke");
            //             let p = document.createElement("p");
            //             p.innerHTML = allPoke.name;
            //             divAll.appendChild(p)
            //         }
            //         createP();
            //     }
            // }
        } catch (error) {
            console.log("error" + " " + error);
        }

    }
    getDataAsync(idPoke);
}

function getAllPoke() {
    const getDataAsync = async(idPoke) => {
        try {
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

        } catch (error) {
            console.log("error" + " " + error);
        }

    }
    getDataAsync(idPoke)
}