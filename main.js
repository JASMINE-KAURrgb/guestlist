guestlistarray=[];
function submit(){
    //for displaying array
    //var displaylistarray=[];
    var guestname=document.getElementById("name1").value;
        console.log(guestname);
        guestlistarray.push(guestname);
    console.log(guestlistarray);
//todisplay the names
    var lenghofarray=guestlistarray.length;
    console.log(lenghofarray);
   document.getElementById("displayname").innerHTML=guestlistarray.toString();
}
//to show list and hide and display buttons
function show(){
    var showarray=guestlistarray.join("<br>");
    document.getElementById("sortedlist").innerHTML=showarray.toString();
    console.log(showarray);
    document.getElementById("sortbtn").style.display="block";

}

//to sort and display list
function sorting(){
    guestlistarray.sort();
    var sortedarray=guestlistarray.join("<br>");
    document.getElementById("sortedlist").innerHTML=sortedarray.toString();
    console.log(sortedarray);
}
//to search a name 
function search(){
    var s=document.getElementById("searchname").value;
    var found=0;
    var j;
    var pos;
    for(j=0; j<guestlistarray.length; j++){
        if(s==guestlistarray[j]){
            found=found+1;
            pos=j+1;
        }
    }
    if(found==0){
        document.getElementById("p2").innerHTML="name NOT found";
    }
    else{
        document.getElementById("p2").innerHTML="name found "+found+" time/s "+"<br>"+"at position"+ pos;
        console.log("name found" +found+ "time/s"+"<br>"+"at position"+ pos);
    }
    document.getElementById("p2").innerHTML="name found"+found+" time/s";
    console.log("name found" +found+ "time/s");
}
