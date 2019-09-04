//ASYNC AWAIT

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 22, 33, 55, 11, 31, 32]);
    }, 1500);
});

const getRecipe = recipeId => {
    return new Promise((resolve, reject) => {
        setTimeout(
            id => {
                const recipe = {
                    title: "Tomato pasta",
                    publisher: "Jonas Brothers"
                };
                resolve(`${id}: ${recipe.title}`);
            },
            1500,
            recipeId
        );
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(
            pub => {
                const recipe2 = {
                    title: "Italian pasta",
                    publisher: "Tom Hardy"
                };
                resolve(`${pub}: ${recipe2.title}`);
            },
            1500,
            publisher
        );
    });
};

//await is a simpler way of resolving promises in es6, we just need to add async
//to function where we want to use await and then we can resolve promises with
//await instead of "then"
async function getRecipes() {
    const ids = await getIds;
    console.log(ids);
    const recipe = await getRecipe(ids[2]);
    console.log(recipe);
    const related = await getRelated("Jonas Brothers");
    console.log(related);
}

getRecipes();
