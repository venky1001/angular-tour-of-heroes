import { reject } from "q";

function getName(name){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },3000);
    });
    return promise;
}

getName('ksrao').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


let emps=[
    {eno:1,name:'suresh',address:'chennai'},
    {eno:2,name:'ramesh',address:'hyderabad'},
    {eno:3,name:'varun',address:'cheennai'}
];

function getEmployee(id){
    const promise=new Promise((resolve,reject)=>{
        setTimeOut(()=>{let emp=emps.find((e)=>{
            return e.eno===eno;
        });
    },5000);
});
return promise;
}

function filterByName(name){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let filteredEmps=emps.filter((emp)=>{
                return emp.name.includes(name);
            })
        },5000);
    });
    return promise;
}
filterByName('s').then((emps)=>{
    for(emp of emps){
        console.log(emp);
    }}).catch((err)=>{
        console.log(err);
    });
