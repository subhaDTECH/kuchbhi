const students=[
    {
    name:"suva duley",
    email:"suva@gmail.com"
   },
   {
       name:"ram",
       email:"suva@gmail.com"
   },
   {
    name:"ram1",
    email:"rama@gmail.com"
}

]

console.log("some new code added ");

const a=students.filter((student)=>{
     
    return student.email==="suva@gmail.com";
})
console.log(a);
