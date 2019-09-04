//example of callback hell
function getRecipe() {
    setTimeout(() => {
        const recipeIds = [1, 22, 33, 55, 11, 31, 32];
        console.log(recipeIds);
        setTimeout(
            id => {
                const recipe = {
                    title: "Tomato pasta",
                    publisher: "Jonas Brothers"
                };
                console.log(`${id}: ${recipe.title}`);
                setTimeout(
                    publisher => {
                        const recipe2 = {
                            title: "Italian pasta",
                            publisher: "Tom Hardy"
                        };
                        console.log(recipe2);
                    },
                    1500,
                    recipe.publisher
                );
            },
            1000,
            recipeIds[2]
        );
    }, 1500);
}

getRecipe();
