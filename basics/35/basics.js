//PROMISE

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve is a method that returns data that we can later on catch with
        //"then" (when running our method), method reject produces an error data
        //(we can pass some log etc.) that we can then catch with "catch" method
        //when running a function with promise
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

//consuming promises
getIds
    .then(ids => {
        console.log(ids);
        //we can chain our promise calls by running promise based function inside
        //"then" and later call then for this promise
        return getRecipe(ids[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated("Jonas Brothers");
    })
    .then(recipe => {
        console.log(recipe);
    })
    .catch(error => {
        console.log(error);
    });
