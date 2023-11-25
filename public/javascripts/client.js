document.getElementById("add-instruction").addEventListener("click", addInstruction)
document.getElementById("add-ingredient").addEventListener("click", addIngredient)
document.getElementById("submit").addEventListener("click", submitRecipe)

let recipe = {
    name: "",
    instructions: [],
    ingredients: []
}

getRecipe("burnt cookies")

function submitRecipe() {
    recipe.name = document.getElementById("name-text").value
    fetch("/recipe/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe)
    })

    const imgInput = document.getElementById("image-input")
    let imgData = new FormData();
    
    for (img of imgInput.files) {
        imgData.append("images", img)
    }

    console.log(imgData)

    fetch("/images", {
        method: "POST",
        body: imgData
    })
}

function addInstruction() {
    const insText = document.getElementById("instructions-text")
    recipe.instructions.push(insText.value)
    insText.value = ""
}

function addIngredient() {
    const ingText = document.getElementById("ingredients-text")
    recipe.ingredients.push(ingText.value)
    ingText.value = ""
}

function getRecipe(recipe) {
    const nameElem = document.getElementById("recipeName")
    const insList = document.getElementById("instructionList")
    const ingList = document.getElementById("ingredientList")

    fetch("/recipe/" + recipe)
    .then(response => response.json())
    .then(data => {
        nameElem.textContent = data.name

        for (ins of data.instructions) {
            let item = document.createElement("li")
            item.textContent = ins
            insList.append(item)
        }

        for (ing of data.ingredients) {
            let item = document.createElement("li")
            item.textContent = ing
            ingList.append(item)
        }
    })
}