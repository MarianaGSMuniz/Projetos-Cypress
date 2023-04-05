//('nada no momento', function(){

    //function soma(a,b){
     //   return a+b;
   // }
 //})

//quando não vai alterar o valor usar const, quando for alterar o valor usar let

// uma forma de escrever
const soma = (a,b) => {
    return a+b
}

//uma forma mais simplificada
const soma1 = (a,b) => a+b

console.log((1,4))


//Function
it('a function test', function(){
    console.log('Function', this)
})

//Arrow
it('a function test', ()=>{
    console.log('Arrow', this)
})