var form = document.getElementById("ordersForm");
var myNumber = document.getElementById("myNumber");
var checkedRadio = document.querySelector('input[name=order-item]:checked');

var finalOrderItems2 = [];

var radio = document.getElementById("myCheck");
var radio2 = document.getElementById("myCheck2");

var reserve = document.getElementById("reservationInfo");
var ftext = document.getElementById("partyNumber");
var ftext1 = document.getElementById("reservationDate");
var ftext2 = document.getElementById("reservationTime");

var alertString = "";
var orderItems = document.getElementById("allOrderItems")
var itemList = ["Roasted Tomato and Red Bell Pepper Soup",
                "Classic Greek Salad",
                "Superfood Salad",
                "Homemade Falafel Wrap",
                "Tomato and Feta Risotto",
                "Aubergine and Chickpea Penne",
                "Grilled Pumpkin and Black Bean Burger",
                "Pasta with Creamy Mushroom Sauce",
                "Vegan Sushi",
                "Sweet and Sour Aubergines",];

var gnum = document.getElementById('n');
var gnum1 = document.getElementById('n1');
var gnum2 = document.getElementById('n2');
var gnum3 = document.getElementById('n3');
var gnum4 = document.getElementById('n4');
var gnum5 = document.getElementById('n5');
var gnum6 = document.getElementById('n6');
var gnum7 = document.getElementById('n7');
var gnum8 = document.getElementById('n8');
var gnum9 = document.getElementById('n9');

var num = document.getElementById("rTSoup1");
var num1 = document.getElementById("greekSalad1");
var num2 = document.getElementById("superfoodSalad1");
var num3 = document.getElementById("homemadeFalafel1");
var num4 = document.getElementById("tomatoRisotto1");
var num5 = document.getElementById("auberginePenne1");
var num6 = document.getElementById("pumpkinBurger1");
var num7 = document.getElementById("pastaMushroom1");
var num8 = document.getElementById("veganSushi1");
var num9 = document.getElementById("sAubergines1");

function orderType(type) {

  if (type === 'table') {

    if (radio.checked === true){
      orderItems.style.display = "none";
      reserve.style.display = "block";
     }
   }
    else if (type === 'takeaway') {

      if (radio2.checked === true){
        reserve.style.display = "none";
        orderItems.style.display = "block";
      }
    }
  }

  function itemDetails() {
    var mnum = document.getElementById("number");
    var mnum1 = document.getElementById("number1");
    var mnum2 = document.getElementById("number2");
    var mnum3 = document.getElementById("number3");
    var mnum4 = document.getElementById("number4");
    var mnum5 = document.getElementById("number5");
    var mnum6 = document.getElementById("number6");
    var mnum7 = document.getElementById("number7");
    var mnum8 = document.getElementById("number8");
    var mnum9 = document.getElementById("number9");

    if (num.checked === true){
      mnum.style.display = "inline-block";
    } else {
      mnum.style.display = "none";
      gnum.value = "0";
      }
          if (num1.checked === true) {
            mnum1.style.display = "inline-block";
          } else {
              mnum1.style.display = "none";
              gnum1.value = "0";
            }
                if (num2.checked === true) {
                  mnum2.style.display = "inline-block";
                } else {
                    mnum2.style.display = "none";
                    gnum2.value = "0";
                  }
                      if (num3.checked === true) {
                        mnum3.style.display = "inline-block";
                      } else {
                          mnum3.style.display = "none";
                          gnum3.value = "0";
                        }
                            if (num4.checked === true) {
                              mnum4.style.display = "inline-block";
                            } else {
                                mnum4.style.display = "none";
                                gnum4.value = "0";
                              }
                                  if (num5.checked === true) {
                                    mnum5.style.display = "inline-block";
                                  } else {
                                      mnum5.style.display = "none";
                                      gnum5.value = "0";
                                    }
                                        if (num6.checked === true) {
                                          mnum6.style.display = "inline-block";
                                        } else {
                                            mnum6.style.display = "none";
                                            gnum6.value = "0";
                                          }
                                              if (num7.checked === true) {
                                                mnum7.style.display = "inline-block";
                                              } else {
                                                  mnum7.style.display = "none";
                                                  gnum7.value = "0";
                                                }
                                                    if (num8.checked === true) {
                                                      mnum8.style.display = "inline-block";
                                                    } else {
                                                        mnum8.style.display = "none";
                                                        gnum8.value = "0";
                                                      }
                                                          if (num9.checked === true) {
                                                            mnum9.style.display = "inline-block";
                                                          } else {
                                                              mnum9.style.display = "none";
                                                              gnum9.value = "0";
                                                            }
                                                          }

function confirmOrder() {
  var textForTakeaway = "You have ordered ";

  if (radio2.checked == true){
    if (gnum.value > 0)
      finalOrderItems2.push({itemAmount:gnum.value, itemName:itemList[0]});
        if (gnum1.value > 0)
          finalOrderItems2.push({itemAmount:gnum1.value, itemName:itemList[1]});
            if (gnum2.value > 0)
              finalOrderItems2.push({itemAmount:gnum2.value, itemName:itemList[2]});
                if (gnum3.value > 0)
                  finalOrderItems2.push({itemAmount:gnum3.value, itemName:itemList[3]});
                    if (gnum4.value > 0)
                      finalOrderItems2.push({itemAmount:gnum4.value, itemName:itemList[4]});
                        if (gnum5.value > 0)
                          finalOrderItems2.push({itemAmount:gnum5.value, itemName:itemList[5]});
                            if (gnum6.value > 0)
                              finalOrderItems2.push({itemAmount:gnum6.value, itemName:itemList[6]});
                                if (gnum7.value > 0)
                                  finalOrderItems2.push({itemAmount:gnum7.value, itemName:itemList[7]});
                                    if (gnum8.value > 0)
                                      finalOrderItems2.push({itemAmount:gnum8.value, itemName:itemList[8]});
                                        if (gnum9.value > 0)
                                          finalOrderItems2.push({itemAmount:gnum9.value, itemName:itemList[9]});

    alertString = "";

    for (i=0; i < finalOrderItems2.length; i++) {
      alertString = alertString + textForTakeaway + finalOrderItems2[i].itemAmount + " " + finalOrderItems2[i].itemName + ". "
    };

    window.alert(alertString);
    clearForm();

  } else if (radio.checked == true){
      var textForTable = "You have reserved ";

      window.alert( textForTable + " a table for " + ftext.value + " people on " + ftext1.value + " at " + ftext2.value + ". Thank you for your reservation.");
      clearForm();
    }
  }

function log(text, str) {
  console.log("------------");
  console.log(text);
  console.log(str);
  console.log("------------");
}

function clearForm() {
  form.reset();
  reserve.style.display = "none";
  orderItems.style.display = "none";
  alertString = "";
  finalOrderItems2 = [];
}
