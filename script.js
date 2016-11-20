$(document).ready(function(){
  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1Rdq5Kra6xrKIp6scSa5f8QQ8_rAoY7NItlNkBNze1Wc/pubhtml?gid=0&single=true";

  var isVerticle;

  $(".info").click(function(){
  $(".info_container").toggleClass("show");
  });

  $(".container").click(function(){
        $(".info_container").toggleClass("show");
        });

  getSpreadsheetJSON(public_spreadsheet_url, function(response){
    var obj = response;
    console.log(obj);


    if(response[0].isverticle == "TRUE"){
    isVerticle = "TRUE";
    for(var i = 0; i < obj.length; i++){
      if((i+1)<obj.length){
      $(".container").append("<div class='vertical' style='background-color:" + obj[i].stripecolor + "; width:" + obj[i].stripewidth + "vw; box-shadow: -" + obj[i].stripewidth/2 + "vw 0px " + obj[i].stripewidth/1.5 + "vw " + obj[(i+1)].stripecolor + " inset;'></div>");
    } else {
      $(".container").append("<div class='vertical' style='background-color:" + obj[i].stripecolor + "; width:" + obj[i].stripewidth + "vw; box-shadow: -" + obj[i].stripewidth/2 + "vw 0px " + obj[i].stripewidth/1.5 + "vw " + obj[(i)].stripecolor + " inset;'></div>");
    }
    }
  } else {
    isVerticle = "FALSE";
    for(var i = 0; i < response.length; i++){
      if((i+1)<obj.length){
      $(".container").append("<div class='horizontal' style='background-color:" + response[i].stripecolor + "; height:" + (response[i].stripewidth)+ "vh; box-shadow:0px -" + response[i].stripewidth/2 + "vh " + response[i].stripewidth/1.5 + "vh " + response[i+1].stripecolor + " inset;'></div>");
    } else {
      $(".container").append("<div class='horizontal' style='background-color:" + response[i].stripecolor + "; height:" + (response[i].stripewidth)+ "vh; box-shadow:0px -" + response[i].stripewidth/2 + "vh " + response[i].stripewidth/1.5 + "vh " + response[i].stripecolor + " inset;'></div>");
    }
    }
  }

  $(".change").click(function(){
    if(isVerticle == "TRUE"){
      isVerticle = "FALSE";
    } else {
      isVerticle = "TRUE";
    }
    console.log(isVerticle);
    $(".container").html("");
    if(isVerticle == "TRUE"){
    for(var i = 0; i < response.length; i++){
      if((i+1)<obj.length){
      $(".container").append("<div class='vertical' style='background-color:" + obj[i].stripecolor + "; width:" + obj[i].stripewidth + "vw; box-shadow: -" + obj[i].stripewidth/2 + "vw 0px " + obj[i].stripewidth/1.5 + "vw " + obj[(i+1)].stripecolor + " inset;'></div>");
    } else {
      $(".container").append("<div class='vertical' style='background-color:" + obj[i].stripecolor + "; width:" + obj[i].stripewidth + "vw; box-shadow: -" + obj[i].stripewidth/2 + "vw 0px " + obj[i].stripewidth/1.5 + "vw " + obj[(i)].stripecolor + " inset;'></div>");
    }        }
  } else {
    for(var i = 0; i < response.length; i++){
      if((i+1)<obj.length){
      $(".container").append("<div class='horizontal' style='background-color:" + response[i].stripecolor + "; height:" + (response[i].stripewidth)+ "vh; box-shadow:0px -" + response[i].stripewidth/2 + "vh " + response[i].stripewidth/1.5 + "vh " + response[i+1].stripecolor + " inset;'></div>");
    } else {
      $(".container").append("<div class='horizontal' style='background-color:" + response[i].stripecolor + "; height:" + (response[i].stripewidth)+ "vh; box-shadow:0px -" + response[i].stripewidth/2 + "vh " + response[i].stripewidth/1.5 + "vh " + response[i].stripecolor + " inset;'></div>");
    }        }
  }
  });
  });
});
