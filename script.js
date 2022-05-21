let vegList;

const vegiePromise = new Promise((resolve) => {
    vegList = ['tomato', 'eggplant', 'cucumber'];
    setTimeout(() => {resolve(vegList)}
    ,5000)

})


async function savlanut(){
    console.log("picking the fruit");
    let x = await vegiePromise;
    console.log(x);
    x.foreach((fruit)=> {
        console.log(fruit);
    })

}
savlanut()