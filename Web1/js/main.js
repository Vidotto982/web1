let butTest = document.getElementById("sumbit").addEventListener("click", getTest);
let spTitle = document.getElementById("sptitle1");
let spTitle2 = document.getElementById("sptitle2");

function getTest() {
    let inputId = document.getElementById("idPost").value;
    const getDataAsync = async(idPost) => {
        try {
            if (inputId >= 1 & inputId < 899) {
                const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPost}`);
                const post = await resPost.json();
                console.log(post);
                // const resUser = await fetch(`https://pokeapi.co/api/v2/pokemon/${post.userId}`)
                // const user = await resUser.json();
                spTitle.innerHTML = post.name;
            }
            if (inputId < 1 || inputId == '') {
                console.log("If 2")
                idPost = 1;
                const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPost}`);
                const post = await resPost.json();
                console.log("post" + " " + post)
                spTitle2.innerHTML = post.name;
                for (let i = 0; i < post.id; post.id++) {
                    console.log("entro for")
                    const resUser = await fetch(`https://pokeapi.co/api/v2/pokemon/${post.id}`)
                    const user = await resUser.json();
                    spTitle2.innerHTML = user.name;
                }
            }
        } catch (error) {
            console.log("error" + " " + error);
        }

    }
    getDataAsync(inputId);
}