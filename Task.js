
// Get all the countries from Asia continent /region using Filter function
console.log("\n countries from Asia continent /region \n")
console.log("\n")

//  I'm using this https://restcountries.com/v2/all link
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);
    data.filter((update) => {
        if (update.region=="Asia"){
            console.log("countries from Asia continent /region",update.name)
        }   
})
// // Get all the countries with a population of less than 2 lakhs using Filter function
console.log("\n countries with a population of less than 2 lakhs\n")
console.log("\n")
var data2 = JSON.parse(request.response);
    data2.filter((update) => {
        if(update.population<200000){
            console.log("countries with a population of less than 2 lakhs",update.name)
        }    
})

// //     Print the following details name, capital, flag using forEach function
console.log("\n details of name, capital, flag\n")
console.log("\n")
    var data3 = JSON.parse(request.response);
    data3.forEach(name_flag_capital);
    function name_flag_capital(out){
        console.log(" country name:-",out.name,"\n capital:-",out.region,"\n country flag:-",out.flags)
    }
// // Print the total population of countries using reduce function
console.log("\n total population of countries\n")
console.log("\n")
    var data4 = JSON.parse(request.response);
    var population = []
    data4.filter((update) => {
        population.push(update.population)           
})
console.log(population)
var addition_population = population.reduce((acc,curr)=>{
    ad = acc+curr
    return ad
})
console.log("Total population of countries using reduce function",addition_population)

// //     Print the country which uses US Dollars as currency.
console.log("\n country which uses US Dollars as currency\n")
console.log("\n")
    var data5 = JSON.parse(request.response);
    data5.filter((update) => {
        for(let key in update.currencies){
        if (update.currencies[key].symbol=="$"){
            console.log("\n")
            console.log("\n country which uses US Dollars as currency",update.name)
                }
            }    
        })
}