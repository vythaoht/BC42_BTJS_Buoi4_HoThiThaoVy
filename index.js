// ----------------Bài tập 1-----------------------------
// Nhập vào 3 số nguyên, xuất 3 số theo thứ tự tăng dần
// input: nhập vào số nguyên dương
// progress:
// 1. Lấy input (UI)
// 2. làm sao thì biết nào bé, nào lớn?
// output: xuất 3 số theo tt tăng dần
document.getElementById('arrange').onclick = function () {
    let integer1 = +document.getElementById('integer1').value;
    let integer2 = +document.getElementById('integer2').value;
    let integer3 = +document.getElementById('integer3').value;
    let temp = 0;
    // 2 5 3
    if (integer1 > integer2) {
        temp = integer1;
        integer1 = integer2;
        integer2 = temp;
    }

    if (integer1 > integer3) {
        temp = integer1;
        integer1 = integer3;
        integer3 = temp;
    }
    if (integer2 > integer3) {
        temp = integer2;
        integer2 = integer3;
        integer3 = temp;
    }

    document.getElementById('showArrange').innerHTML = integer1 + " ; " + integer2 + " ; " + integer3;
}

// --------------Bài tập 2-------------------
document.getElementById('sayHi').onclick = function () {
    let who = document.getElementById('who').value;
    let sayHi = "";
    switch (who) {
        case "B":
            sayHi = "Chào Bố!";
            break;
        case "M":
            sayHi = "Chào Mẹ!";
            break;
        case "A":
            sayHi = "Chào Anh!";
            break;
        case "E":
            sayHi = "Chào Em!";
            break;
        default:
            sayHi = "Nhập chưa đúng!";
            break;
    }
    document.getElementById('showSayHi').innerHTML = sayHi;
}

// --------Bài tập 3---------------------------
document.getElementById('export').onclick = function () {
    let int1 = document.getElementById('int1').value;
    let int2 = document.getElementById('int2').value;
    let int3 = document.getElementById('int3').value;
    let even = 0;
    let odd = 0;

    if (int1 % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }

    if (int2 % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }

    if (int3 % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }

    document.getElementById('showExport').innerHTML = "Có " + even + " số chẳn";
    document.getElementById('showExport').innerHTML += " - Có " + odd + " số lẻ";
}

// --------------Bài tập 4-----------------------
document.getElementById('triangle').onclick = function () {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    if (a === b && a === c && b === c) {
        document.getElementById('showTriangle').innerHTML = "Đây là tam giác đều"
    } else if (a === b || a === c || b === c) {
        document.getElementById('showTriangle').innerHTML = "Đây là tam giác cân"
    } else if
        (a * a === b * b + c * c ||
        b * b === a * a + c * c ||
        c * c === a * a + b * b) {
        document.getElementById('showTriangle').innerHTML = "Đây là tam giác vuông"
    } else {
        document.getElementById('showTriangle').innerHTML = "Đây là tam giác thường"
    }
}