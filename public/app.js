
window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest(); //Request Construcor

  // here we are setting up our request
  request.open("GET", url); // get method from URL
  request.onload = function(){
    if( request.status === 200){ // 200 means successful http connection
      console.log("got the data");
      // console.log(request.responseText);
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      // populate_countries_list
      countriesDrop( countries );
    }
  }
  request.send(null); // needs to be null here
}

// var populateCList = function( countries ){
//   var cList = []
//   for ( country of countries ){
//     cList.push( country.name );
//   }
//   return cList
// }

var countriesDrop = function( countries ){
  var drop = document.getElementById('drop-list');
  for ( country of countries ){
    var option = document.createElement('option');
    option.setAttribute('value', country.name);
    option.text = country.name;
    drop.appendChild(option);
    drop.onchange = countryClick;
  }
}

var countryClick = function(){
  var c = document.getElementById("drop-list").value;
  for ( var i = 0; i < countries.length; i++ ){
    if ( c === countries[i].name ){
      theCountry = countries[i];
      break;
    }
  }
  // Set Attributes: name, population , blah, blah
}

var setAttribute = function( country, attribute ){
  var detail = document.createElement('P');
  detail.text = country[attribute].value + ': ' + country[attribute];
  drop.appendChild(detail);
  drop.onchange = countryClick;
}
