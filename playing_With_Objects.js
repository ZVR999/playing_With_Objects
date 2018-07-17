var users = [ 
    {name: "Michael",
     age: 37},
    {name: "John",
     age: 30},
    {name: "David",
     age: 27}
];

document.write(users[0].name+"-"+users[0].age+"<br>");
console.log(users[0].name+"-"+users[0].age);

document.write(users[1].name+"-"+users[1].age+"<br>");
console.log(users[1].name+"-"+users[1].age);

document.write(users[2].name+"-"+users[2].age+"<br>");
console.log(users[2].name+"-"+users[2].age);

var bod = document.body;
for(var i=0;i<users.length;i++){
    bod.innerHTML += users[i].name+"-"+users[i].age+"<br>";
}