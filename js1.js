for(var i=3;i<=15;i++){
    for(var j=1;j<=15;j++)
    {
        x=i*j
        st = String(i) +"*"+ String(j)+"："
        process.stdout.write(st)(st+"\r") 
        console.log(x) 
    }
}

