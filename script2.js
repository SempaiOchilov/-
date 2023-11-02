// let cars = [{
//     model: "ВАЗ 2106",
//     company: "ВАЗ", 
//     color: "dry asphalt",
//     engine: 1.5 ,
//     price: 3000,
//     beaten: true,
//     year: 1995,
//     mileage: 100000,
//     tech_passport: {
//         date: 1996,
//         exp_date: 2026,
//     }
// }
// ]

let cars = 
[

{
model: 'traverse',
company: 'chevrolet',
color: 'black',
engine: 3.6,
price: 60000,
beaten: false,
year: 2023,
mileage: 500,
tech_passport: {
    date: 2023,
    exp_date: 2033
}
},
{
model: "volga",
company: "uaz",
color: "white",
engine: 0.4,
price: 700000,
beaten: true,
year: 1964,
mileage: 3000000,
tech_passport: {
    date: 1964,
    exp_date: 2023,
}
},
{
model: "ВАЗ 2106",
company: "ВАЗ",
color: "dry asphalt",
engine: 1.5,
price: 3000,
beaten: true,
year: 1995,
mileage: 100000,
tech_passport: {
    date: 1996,
    exp_date: 2026,
}
},
{
model: "velik",
company: "Philips",
color: "red",
engine: "v12",
price: 12000,
beaten: false,
year: 2009,
mileage: 0,
tech_passport: {
    date: 2022,
    exp_date: 2032,
}
},
{
model: 'Tahoe',
company: 'CHEVROLET',
color: 'black',
engine: 5.3,
price: 110000,
beaten: false,
year: 2022,
mileage: 0,
tech_passport: {
    date: 2022,
    expDate: 2032
}
},
{
model: "Mercedes-Benz CLS",
company: "Mercedes-Benz",
color: "black",
engine: 3.0,
price: 110000,
beaten: false,
year: 2023,
mileage: 200,
tech_passport: {
    date: 2023,
    exp_date: 2033,
}
},
{
model: "malibu",
company: "Chevrolet",
color: "sky rim",
engine: 2.4,
price: 15000,
year: 2022,
clash: false,
mileage: 1500,
tech_passport: {
    date: 2022,
    exp_date: 2054
}
},
{
model: "matiz",
company: "general motors",
color: "yellow",
engine: 0.8,
price: 4000,
beaten: false,
year: 2018,
mileage: 5000,
tech_passport: {
    date: 2018,
    exp_date: 2028,
}
},
{
model: "porter",
company: "hyundai",
color: "blue",
engine: 2.5,
price: 31000,
beaten: false,
year: 2023,
mileage: 100,
tech_passport: {
    date: 2023,
    exp_date: 2033,
}
},

]


let from = prompt('from')
let up = prompt('up')


let result = []

cars.forEach(car => {
if(car.price >= from && car.price <= up) {
result.push(`  ${car.model}  ${car.price}  `)
}
})


let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")


let i = []

car.forEach((item) => {
if(item.model === oneOfThem){
     i = item
}
})
console.log(i);


let price = confirm( "цена" + i.price )

let money = +prompt("заплати")

if ( money - i.price > 0 ){
alert("вот здача")

}
else if( money - i.price === 0){
    alert("поздравляю вас")
}
else if( money - i.price < 0){
    alert("поздравляю вас тут нехватает")
}
