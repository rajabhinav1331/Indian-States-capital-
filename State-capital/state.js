

function result(){
   let state =  document.getElementById('state-name').value;
   console.log(state);

  
   if(state.toUpperCase() === "BIHAR"){
    document.getElementById('capital').innerHTML = 'PATNA'
    // document.getElementById('main-body').style.background 
   }
  else if(state.toUpperCase() === "JHARKHAND"){
    document.getElementById('capital').innerHTML = 'RANCHI'
   }
  else if(state.toUpperCase() === "ANDHRA PRADESH"){
    document.getElementById('capital').innerHTML = 'Amravati'
   }
   else if(state.toUpperCase() === "ARUNACHAL PRADESH"){
    document.getElementById('capital').innerHTML = 'ITANAGAR'
   }
   else if(state.toUpperCase() === "ASSAM"){
    document.getElementById('capital').innerHTML = 'DISPUR'
   }
   else if(state.toUpperCase() === "CHHATISGARH"){
    document.getElementById('capital').innerHTML = 'RAIPUR'
   }
   else  if(state.toUpperCase() === "GOA"){
    document.getElementById('capital').innerHTML = 'PANJI'
   }
   else  if(state.toUpperCase() === "GUJURAT"){
    document.getElementById('capital').innerHTML = 'GANDHI NAGAR'
   }
   else if(state.toUpperCase() === "HARYANA"){
    document.getElementById('capital').innerHTML = 'CHADIGARH'
   }
   else if(state.toUpperCase() === "HIMACHAL PRADESH"){
    document.getElementById('capital').innerHTML = 'SHIMLA'
   }
   else if(state.toUpperCase() === "KARNATAKA"){
    document.getElementById('capital').innerHTML = 'BENGALURU'
   }
   else if(state.toUpperCase() === "KERELA"){
    document.getElementById('capital').innerHTML = 'THIRUVANANTHAPURAM'
   }
   else  if(state.toUpperCase() === "MADHYA PRADESH"){
    document.getElementById('capital').innerHTML = 'BHOPAL'
   }
   else if(state.toUpperCase() === "MAHARASHTRA"){
    document.getElementById('capital').innerHTML = 'MUMBAI'
   }
   else if(state.toUpperCase() === "MANIPUR"){
    document.getElementById('capital').innerHTML = 'IMPHAL'
   }
   else if(state.toUpperCase() === "MEGHALAYA"){
    document.getElementById('capital').innerHTML = 'SHILONG'
   }
   else if(state.toUpperCase() === "MIZORAM"){
    document.getElementById('capital').innerHTML = 'AIZAWAL'
   }
   else if(state.toUpperCase() === "NAGALAND"){
    document.getElementById('capital').innerHTML = 'KOHIMA'
   }
   else if(state.toUpperCase() === "ODISHA"){
    document.getElementById('capital').innerHTML = 'BHUBNESWAR'
   }
   else if(state.toUpperCase() === "PUNJAB"){
    document.getElementById('capital').innerHTML = 'CHANDIGARH'
   }
   else  if(state.toUpperCase() === "RAJASTHAN"){
    document.getElementById('capital').innerHTML = 'JAIPUR'
   }
   else if(state.toUpperCase() === "SIKKIM"){
    document.getElementById('capital').innerHTML = 'GANGTOK'
   }
   else if(state.toUpperCase() === "TAMIL NADU"){
    document.getElementById('capital').innerHTML = 'CHENNAI'
   }
   else if(state.toUpperCase() === "TELANGANA"){
    document.getElementById('capital').innerHTML = 'HYDRABAD'
   }
   else if(state.toUpperCase() === "TRIPURA"){
    document.getElementById('capital').innerHTML = 'AGARTALA'
   }
   else if(state.toUpperCase() === "UTTAR PRADESH"){
    document.getElementById('capital').innerHTML = 'LUCKNOW'
   }
   else if(state.toUpperCase() === "UTTRAKHAND"){
    document.getElementById('capital').innerHTML = 'DEHRADUN'
   }
   else if(state.toUpperCase() === "WEST BANGAL"){
    document.getElementById('capital').innerHTML = 'KOLKATA'
   }

   // UNION TERRITORY
   else  if(state.toUpperCase() === "ANANDMAN AND NICOBAR ISLAND"){
    document.getElementById('capital').innerHTML = 'PORT BLAIR'
   }
   else if(state.toUpperCase() === "CHANDIGARH"){
    document.getElementById('capital').innerHTML = 'CHANDIGARH'
   }
   else if(state.toUpperCase() === "DADAR AND NAGAR HAVELI"){
    document.getElementById('capital').innerHTML = 'DAMAN'
   }
   else if(state.toUpperCase() === "DAMAN AND DIU"){
    document.getElementById('capital').innerHTML = 'DAMAN'
   }
   else if(state.toUpperCase() === "DELHI"){
    document.getElementById('capital').innerHTML = 'DELHI'
   }
   else if(state.toUpperCase() === "JAMMU AND KASHMIR"){
    document.getElementById('capital').innerHTML = `SUMMER:-SRINAGAR, WINTER:-JAMMU`
   }
   else  if(state.toUpperCase() === "LADAKH"){
    document.getElementById('capital').innerHTML = 'LEH'
   }
   else if(state.toUpperCase() === "LAKSHADWEEP"){
    document.getElementById('capital').innerHTML = 'KAVARATTI'
   }
   else if(state.toUpperCase() === "PUDUCHERRY"){
    document.getElementById('capital').innerHTML = 'PUDUCHERRY'
   }

   else{
    document.getElementById('capital').innerHTML = 'NOT A STATE'
   }


  
}



// let states = ['BIHAR', 'JHARKHAND', "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "CHHATISGARH", "GOA", "GUJURAT", "HARYANA","HIMACHAL PRADESH","KARNATAKA","KERELA","MADHYA PRADESH",
// "MAHARASTHRA", 'MANIPUR','MEGHALAYA',"MIZORAM", 'NAGALAND', 'ODISSHA', 'PUNJAB', 'RAJASTHAN','SIKKIM', 'TAMIL NADU', 'TELENGANA', 'TRIPURA', 'UTTAR PRADESH',
// 'UTTARAKHAND', 'WEST BANGAL', "ANANDMAN AND NICOBAR ISLAND", "CHANDIGARH","DADAR AND NAGAR HAVELI","DAMAN AND DIU","DELHI", "JAMMU AND KASHMIR","LADAKH","LAKSHADWEEP", "PUDUCHERRY"]



// let capital = ['PATNA', 'RANCHI', 'KOLKATA', "ANANDMAN AND NICOBAR ISLAND", "CHANDIGARH"]

// let value = 'bihar'
// let capvalue

// for(i=0;i<states.length;i++){
//   if(value.toUpperCase() === states[i]){
//       capvalue = capital[i]
//   }
// }

// console.log(capvalue)