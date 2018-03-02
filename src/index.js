module.exports = function getZerosCount(number, base) {
    let delitel = base;
    let arrey = [1, 2, 3, 5, 7, 9, 11, 13];
    let arrey2 = [];
    let obj = {};
    for (let i = 1; i < arrey.length; i++) {

        if (base / arrey[i] == Math.floor(base / arrey[i])) {
            base /= arrey[i];
            arrey2.push(arrey[i]);
            i = 0;
        }
        else if (i == arrey.length - 1) {
            arrey2.push(base);
        }
        else if (base == delitel && i == arrey.length - 1)
            break;

        else if (base == 1) {
            break;
        }

    }
    let count = 1;
    let num = 0;
    if (arrey2.length == 1) {
        obj[arrey2[0]] = 1;
    }
    else
        for (let i = 1; i < arrey2.length + 1; i++) {
            if (arrey2[num] == arrey2[i]) {
                count++;
                continue;
            }
            else {
                obj[arrey2[num]] = count;
                num = i;
                count = 1;
            }


        }
    let end = [];
    let result = 0;
    for (key in obj) {
        delitel = +key;
        while (true) {
            let perem = number / delitel;
            perem = Math.floor(perem);
            result += perem;
            delitel *= +key;
            if (delitel > number) {
                break;
            }
        }
        end.push(Math.floor(result / obj[key]));
        result = 0;
    }
    if (end.length == 1) {
        return end[0]
    }
    else
        for (let i = 0; i < end.length - 1; i++) {
            if (end[i] < end[i + 1])
                result = end[i];
            else result = end[i + 1];
        }
    return result;
}