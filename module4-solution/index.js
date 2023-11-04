var names=new Array();

names=["Yaakov","Manoj","Kumar","jack","Jim","jay","Georage","Julie","Alie","frank","jimmy"];


names.forEach((name)=>
{
    if(name.charAt(0)=="J" || name.charAt(0)=="j")
    {
        console.log("Goodbye "+ name)
    }
    else{
        console.log("Hello "+name);
    }
})
