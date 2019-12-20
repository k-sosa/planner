const date1 = moment().format("LLLL")
const dateHeader = $("<hd1>");
dateHeader.addClass("header-color");
dateHeader.attr("date-data", date1);
dateHeader.text(date1);
$(".head").append(date1);

const userInput = $(".user-input");
const savedNote = $(".saved-note");
const displayNote = userInput.value;

renderLastRegistered();


function displayMessage(type, message) {
  savedNote.textContent = message;
  savedNote.setAttribute("id", type);
}

function renderLastRegistered() {
  const appointments = localStorage.getItem("todos");

  userInput.textContent = todos;

}

$(".saveLocalStorage")click(function() {
  

  const userInput = $(".user-input").value

  if (userInput === "") {
    displayMessage("error", "Note cannot be blank");
  } else {
    displayMessage("success", "Success");

    localStorage.setItem("todos", appointments);
    
    renderLastRegistered();
  }
});





