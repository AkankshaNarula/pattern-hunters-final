let link;

var menuItem = {
  "id": "Checktest",
  "title": "Check for Dark Pattern",
  "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "Checktest" && clickData.selectionText) {
    (async () => {
      const rawResponse = await fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'value': clickData.selectionText })
      });
      let content = await rawResponse.json();
      console.log(content);
      var timestamp = new Date().getTime();
      chrome.notifications.create(
        "notification2" + timestamp,
        {
          type: "basic",
          iconUrl: "images.jpg",
          title: "This is a notification",
          message: content.result,
        },
        function () { }
      );
    })();
  }
});

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);

  console.log(tab)
  // notifyMe();
  // const notification= new Notification("Hi there!");
  if (typeof tab == 'undefined') {
  }
  else {
    if (tab.status == "complete") {
      if (link == tab.url) {
        return;
      }
      link = tab.url;
      console.log(tab.url);
      (async () => {
        const rawResponse = await fetch('http://127.0.0.1:5000/url', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 'value': tab.url })
        });
        let content = await rawResponse.json();
        console.log(content.result);
        console.log(typeof (content.result))
        // alert("hello")
        // chrome.tabs.create({url:"dpbh.html"});
        var timestamp = new Date().getTime();
        chrome.notifications.create(
          "notification" + timestamp,
          {
            type: "basic",
            iconUrl: "images.jpg",
            title: "This is a notification",
            message: content.result,
            // expandedMessage: "works"
            // items: [{"1":result[0]}],

          },
          function () { }
        );
      })();
    }
  }
}
chrome.tabs.onUpdated.addListener(function (activeInfo) {
  console.log(activeInfo);
  getCurrentTab();
  // chrome.tabs.create({url:"dpbh.html"});
});