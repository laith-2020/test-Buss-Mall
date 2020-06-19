"use strict";

var namesOfProduct = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg",
];


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var leftImage = document.querySelector('#leftImage');
var middleImage = document.querySelector('#middleImage');
var rightImage = document.querySelector('#rightImage');
var imageSection = document.querySelector('#imageSection');

var leftProduct, rightProduct, middleProduct;
var totalClick = 0;
var cli = [];
var viw = [];

function Product(name) {
    this.productName = name.split(".")[0];
    this.imagePath = `assets/${name} `;
    this.clicks = 0;
    this.views = 0;
    Product.all.push(this);
}
Product.all = [];


for (var i = 0; i < namesOfProduct.length; i++) {
    new Product(namesOfProduct[i]);
}
function renderImage() {

    leftProduct = Product.all[getRandomNumber(0, Product.all.length - 1)];
    rightProduct = Product.all[getRandomNumber(0, Product.all.length - 1)];
    middleProduct = Product.all[getRandomNumber(0, Product.all.length - 1)];

    leftImage.src = leftProduct.imagePath;
    middleImage.src = middleProduct.imagePath;
    rightImage.src = rightProduct.imagePath;

    if (leftProduct === rightProduct || leftProduct === middleProduct || rightProduct === middleProduct) {
        renderImage();

    }
}
renderImage();


function storeData(){
    var store = JSON.stringify(Product.all);
    localStorage.setItem('allProduct', store);
}

function getData(){
    var store = localStorage.getItem('allProduct');
    if (store){
        Product.all = JSON.parse(store);
        renderResult();
    }
}

imageSection.addEventListener('click', handleClick);
function handleClick(event) {

    if (totalClick < 25) {

        if (event.target.id !== 'imageSection') {
            totalClick++;

            if (event.target.id === 'leftImage') {
                leftProduct.clicks++;
                leftProduct.views++;
            }
            if (event.target.id === 'rightImage') {
                rightProduct.clicks++;
                rightProduct.views++;
            }
            if (event.target.id === 'middleImage') {
                middleProduct.clicks++;
                middleProduct.views++;
            }
            storeData()
            renderImage();

        }
    } else {
        renderResult();
        
        imageSection.removeEventListener('click', handleClick);
    }
}


function renderResult() {
    var ul1 = document.querySelector('#finalResult');
    for (var i = 0; i < Product.all.length; i++) {
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        li1.textContent = `${Product.all[i].productName} has ${Product.all[i].clicks} Clicks and ${Product.all[i].views} Views `;
    }
    renderChart();
}


function renderChart() {
    for (var i = 0; i < Product.all.length; i++) {
        viw.push(Product.all[i].views);
        cli.push(Product.all[i].clicks);
    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: namesOfProduct,
            datasets: [{
                label: '# of Clicks',
                data: cli,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: viw,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(75, 192, 192, 0.2)",

                ],
                borderColor: [
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

getData();