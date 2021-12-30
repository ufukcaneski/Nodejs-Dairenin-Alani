const arguments = process.argv.slice(2);
function calculationcircle(radius) {
    area = Math.PI * radius * radius;
    console.log(area);
}

calculationcircle(arguments[0] * 1);