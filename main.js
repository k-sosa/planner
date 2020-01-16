const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]



function loadPage() {

    let currentDate = moment().format('LLLL')
    $("#current-date").html(currentDate)


     let currentHour = moment().hour()

     console.log(currentHour)

    for (let index = 0; index < hours.length; index++) {


   

        let row = $("<div class='row '>")
        let column1 = $("<div class='col-sm-2  text-right'>")

        let column2 = $("<div class='col-sm-8'>")
        let column3 = $("<div class='col-sm-2'>")

        let midDay = " am"

        if (hours[index] >= 12) {
            midDay = " pm"
        }

        let standardHour = hours[index]
        if (hours[index] >= 13) {
            standardHour = hours[index] - 12
        }
        column1.append(standardHour + midDay)

        let textArea = $("<textarea>")
        textArea.attr("id", "textarea" + index)
        let color =  "bg-danger"
        
        if (  currentHour <  hours[index]) {
            color = "bg-success"
        }

        if (currentHour > hours[index]) {

            color = "bg-secondary"
        }
        textArea.attr("class", color)
        let getTextareaInput = localStorage.getItem("textarea"+index)
        textArea.val(getTextareaInput)
        column2.append(textArea)
        let button = $("<button>")
        button.text("save")
        button.attr("class", "save")
        column3.append(button)
        row.append(column1, column2, column3)
        $("#planner").append(row)


    }
   

}

loadPage()

$(".save").on("click",function(){

      for (let index = 0; index < hours.length; index++) {
             let textareaInput = $("#textarea"+index).val()

             localStorage.setItem("textarea"+index, textareaInput)
          
      }
})










