define({

  //Type your controller code here ,
  confirmationAlert: function () {
    //Creating the basicConfig object 
    var basicConf = {
      message: "This is an confirmation alert",
      alertType: constants.ALERT_TYPE_CONFIRMATION,
      alertTitle: "Confirmation",
      noLabel: "NoNo",
      yesLabel: "YesYes",
      // alertIcon: "acme.png",
    };
    //Creating the pspConfig object
    var pspConfig = {
      "contentAlignment": constants.ALERT_CONTENT_ALIGN_CENTER
    };
    var myAlert = kony.ui.Alert(basicConf, pspConfig);
    
    // voltmx.ui.dismissAlert(myalert);
  } 
  
});