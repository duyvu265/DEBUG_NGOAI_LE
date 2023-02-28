let num:number=5;
let num2:number=0;
// try {
//     if (num2==0){
//         throw "Divede by error ";
//     }else {
//         let sol=num/num2;
//     }
// }catch (e){
//     console.log("Error :"+ e)
// }
//
// try{
//     ab();
//
// } catch(e){
//     console.log("Error : "+ e.name);
// }

try {
    eval("alert('ES6 Exception Handling')");
} catch(e){
    console.log("Error : " + e.name)
}