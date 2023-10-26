const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');
let isHidden = true;

toggleButton.addEventListener('click', () => {
	if (isHidden) {
		myDiv.classList.remove('hidden'); // Remove the 'hidden' class to show the content
		myDiv.style.transform = "translateY(0)"; // Slide the div down
	} else {
		myDiv.style.transform = "translateY(-100%)"; // Slide the div back up
		setTimeout(() => {
			myDiv.classList.add('hidden'); // Add the 'hidden' class to hide the content
		}, 300); // Match the duration of the transition (0.3s)
	}
	isHidden = !isHidden; // Toggle the state
});