let butTest = document.getElementById("sumbit").addEventListener("click", getTest);
let spTitle = document.getElementById("sptitle1");
let spTitle2 = document.getElementById("sptitle2");

function getTest() {
    let inputId = document.getElementById("idPost").value;
    const getDataAsync = async(idPost) => {
        try {
            if (inputId < 5 & inputId >= 1) {
                const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPost}`);
                const post = await resPost.json();
                console.log(post);
                // const resUser = await fetch(`https://pokeapi.co/api/v2/pokemon/${post.userId}`)
                // const user = await resUser.json();
                spTitle.innerHTML = post.name;
            }
            if (inputId == 0 || inputId == '') {
                idPost = 1;
                const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPost}`);
                for (let i = 1; i < resPost.length; i++) {
                    const user = await resUser.json();
                    const post = await resPost.json();
                    const resUser = await fetch(`https://pokeapi.co/api/v2/pokemon/${post.name}`)
                    spTitle2.innerHTML = post.name;
                    console.log("For id " + i)

                }
            }
        } catch (error) {
            console.log("error" + " " + error);
        }

    }
    getDataAsync(inputId);
}