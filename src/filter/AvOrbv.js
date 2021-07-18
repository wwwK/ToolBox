const table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
const tr = {}
for (let i = 0; i < 58; i++) {
    tr[table[i]] = i
}
const s = [11, 10, 3, 8, 4, 6]
const xor = 177451812
const add = 8728348608

// bv转换av
function BVturnAV(x) {
    let r = 0;
    for (let i = 0; i < 6; i++) {
        r += tr[x[s[i]]] * 58 ** i
    }
    return (r - add) ^ xor
}

// av转换bv
function AVturnBV(x) {
    let r = "";
    x = (x ^ xor) + add
    r = 'BV1  4 1 7  '.split('')
    for (let i = 0; i < 6; i++) {
        r[s[i]] = table[parseInt(x / 58 ** i) % 58]
    }
    return r.join('')
}

export {
    BVturnAV,
    AVturnBV
}