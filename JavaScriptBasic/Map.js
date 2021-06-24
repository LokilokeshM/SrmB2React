const mf = new Map();

mf.set(1,"Lokiii");
mf.set(2,"fgh");
mf.set(4,"fgdhfgh");
mf.set(3,"ghgh");
mf.set(5,"hjjjj");
mf.set(6,"jdrrr");

mf.forEach((k,v)=>{
    console.log(k +" "+ v);
})

//Weak Map
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object