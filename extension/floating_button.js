// Define the HTML and CSS for the floating button
const floatingButtonHTML = `
<div id="floating-button">
  <img id="my-floating-button" src="${chrome.runtime.getURL('owl.jpeg')}">
</div>
`;

const floatingButtonCSS = `
#floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

#my-floating-button {
  width: 50px; /* Adjust width and height as needed */
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
`;

// Inject the HTML and CSS into the current webpage
function injectFloatingButton() {
  const floatingButtonContainer = document.createElement('div');
  floatingButtonContainer.innerHTML = floatingButtonHTML;
  document.body.appendChild(floatingButtonContainer);

  const floatingButtonStyle = document.createElement('style');
  floatingButtonStyle.textContent = floatingButtonCSS;
  document.head.appendChild(floatingButtonStyle);

  // Add event listener to the button
  const floatingButton = document.getElementById('my-floating-button');
  floatingButton.addEventListener('click', () => {
    // Handle button click event here
    alert('Floating button clicked!');
  });
}

// Call injectFloatingButton when the extension is loaded
injectFloatingButton();
