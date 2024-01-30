
document.getElementById("myButton").addEventListener("click", myFunction)
function myFunction() {
  let x = document.getElementById("input").value;
  // console.log("notifcsdfjis");
  // var timestamp = new Date().getTime();
  // chrome.notifications.create(
  //   ""+timestamp,
  //   {
  //     type: "list",
  //     iconUrl: "images.jpg",
  //     title: "This is a notification",
  //     message: "hello there!",
  //     items: [{ title: "Item1", message: "This is item 1."},
  //     { title: "Item2", message: "This is item 2."},
  //     { title: "Item3", message: "This is item 3."}],
  //   },
  //   function () {}
  // );
  let content;
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