$(function(){
  var totalValue = 0;
  $('input[type="checkbox"]:not(.disabled), input[type="radio"]:not(.disabled)').on('change', function(){
    totalValue = 0;
    $('input[type="checkbox"]:checked:not(.disabled), input[type="radio"]:checked:not(.disabled)').each(function(){
      totalValue += parseFloat($(this).val());
    });
    console.log( totalValue );
    $('#total').val(getRiskLevel(totalValue));
  })
  
  function getRiskLevel( value )
  {
    var messages = 
    [
      "Low Risk: A 21-year-old man with no diseases is the lowest risk investment for an insurance company. Females are always a higher risk than males.",
      "Moderately Low Risk: A 25-year-old woman who has had a child and had no complications during the pregnancy is a moderately low risk investment.",
      "Moderately High Risk: A 60-year-old man with Diabetes and Congestive Heart Failure would be a moderately high risk investment.",
      "High Risk: A 60-year-old woman with a hip fracture would be a high risk investment. ",
      "Extremely High Risk: Hemophilia is one of the diseases that makes any person an extremely high-risk investment because the medications cost so much."
    ]
    
    var messageIndex = 0;
    
    if( value >= 0 && value <= 2 )
    {
      messageIndex = 0;
    }
    else if( value >= 2 && value <= 5 )
    {
      messageIndex = 1;
    }
    else if( value >=5.1 && value <= 10)
    {
      messageIndex = 2;
    }
    else if( value >=10.1 && value <= 15)
      {
        messageIndex = 3;
      }
      else
    {
      messageIndex = 4;
    }
    return messages[messageIndex];
  }
})
function newPopup(url) {
  var popupWindow = window.open("", "MsgWindow", "width:100px, height=100px");
  popupWindow.document.write("<p><b>Method</b><br/>The Health and Human Services Department gives numerical values of risk based on characteristics and conditions. The full report is here: http://www.gpo.gov/fdsys/pkg/FR-2013-03-11/pdf/2013-04902.pdf. <br/>This was made based on the following scale:<br/> 0-2 Low Risk<br/> 2-5 Moderately Low<br/> 5-10 Moderately High<br/> 10-15 High<br/> 15+ Extremely High<br/> <b>Privacy</b><br/>The Wall Street Journal is not collecting any data from the results of this form. </p>");
}
