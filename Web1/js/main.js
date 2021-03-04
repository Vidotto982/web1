let butTest = document.getElementById("sumbit").addEventListener("click", getTest);
// let allPoke = document.getElementById("allPoke");
let onePoke = document.getElementById("onePoke");

function getTest() {
    let idPoke = document.getElementById("idPost").value;
    const getDataAsync = async(idpoke) => {
        try {
            if (idPoke >= 1 & idPoke < 899) {
                const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}`);
                const poke = await resPoke.json();
                console.log(poke);
                // const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.allPokeId}`)
                // const allPoke = await resAllPoke.json();
                onePoke.innerHTML = poke.name;
            }
            if (idPoke < 1 || idPoke == '') {
                console.log("If 2")
                const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}`);
                const poke = await resPoke.json();
                for (let i = 0; i < poke.id; i++) {
                    console.log("for")
                    const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`)
                    const allPoke = await resAllPoke.json();

                    function createP() {
                        let divAll = document.getElementById("allPoke");
                        let p = document.createElement("p");
                        p.innerHTML = allPoke;
                        divAll.appendChild(p)
                    }
                }
            }
        } catch (error) {
            console.log("error" + " " + error);
        }

    }
    getDataAsync(idPoke);
}