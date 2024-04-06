export function colorPicker(value) {
    if (value > 50) {
        return "progress-green";
    } else if (value > 30) {
        return "progress-yellow";
    } else {
        return "progress-red";
    }
}
