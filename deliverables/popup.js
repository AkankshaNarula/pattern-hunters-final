document.getElementById("myButton").addEventListener("click", myFunction)
function myFunction() {
  let x = document.getElementById("input").value;
  // let content;
  console.log(x);
  (async () => {
    const rawResponse = await fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'value': x })
    });
    let content = await rawResponse.json();
    console.log(content);
    document.getElementById("output").innerHTML = content.result;
  })();
}