	// 1 - After the DOM loads, add a paragraph tag that says "Page loaded"
	// to the section element

$(document).ready(function() {
	 	function appendDOM () {
  	('.status').append('<p>' + Page Loaded + '</p>');


	// 2 - Change the text of the h1 element to something (anything!) else.
		$('h1').empty();
		$('h1').append('HELLO WORLD');

  // 3 - Get rid of (delete) the useless unordered list (ul) by first
  // selecting the h2 nested within its list item.

		$('ul').children().children().remove();

	}
});


// Didnt quite finish  :(
