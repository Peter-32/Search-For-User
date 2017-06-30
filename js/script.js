function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function printStudent(student) {
html = "<h3>" + student.name + "</h3>"
"<ul>";
for (var prop in student) {
	if (prop != 'name') {
		html += "<li>" + capitalizeFirstLetter(prop) + ": " + student[prop] + "</li>";
	}
}
html += "</ul>";
print(html);
}

var search;

while (true) {
    search = prompt('What student would you like to search for?  (Type "quit" to exit)');
    if (search.toUpperCase() === 'QUIT' || search === null) {
    	break;
    }
    
    for (var i = 0; i < students.length; i++) {
    	var student = students[i];
    	if (student.name.toUpperCase() === search.toUpperCase()) {
    		printStudent(student)
    		break;    		
    	}
    }

} 