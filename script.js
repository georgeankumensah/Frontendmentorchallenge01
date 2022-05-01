const company = document.querySelector("#company");
const feature = document.querySelector("#features");

company.addEventListener('mouseover',()=>{

    const companies = document.querySelector(".drop-down-company");
    companies.style.display="flex" ;
    checkStatus();
})
feature.addEventListener('mouseover',()=>{
    
    const features = document.querySelector(".drop-down-features");
    features.style.display="flex" ;
})

const checkStatus = (e) =>{
    const companies = document.querySelector(".drop-down-company");
    const features = document.querySelector(".drop-down-features");
    if(companies.style.display ==="flex"){
        features.style.display === "none";
    }else{
        companies.style.display === "flex";
    }
    console.log(e);
}