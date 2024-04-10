const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((word) => word === "черный" || word === "красный" || word === "желтый").join('-')
}

console.log(createColorString());
