// reference:
// https://stackoverflow.com/questions/43208012/how-do-i-format-currencies-in-a-vue-component
function formatPrice(value) {
    let val = (value/1).toFixed(0); // belakang koma
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
