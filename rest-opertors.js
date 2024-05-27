
// rest-operators : it is used to collect individual elements into array or object

const Emp={
    name:"vijay",
    age:25,
    mobile:5559942644
}
const{name,...userinfo}=Emp;

console.log(userinfo)