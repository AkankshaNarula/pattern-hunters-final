// const site = windows.location.hostname
// console.log(site)

// console.log("Injected to script: ")
// alert("WORKS")
(async ()=> {
    // console.log("WORKS");
    const response = await fetch("http://127.0.0.1:5000/data");
    const dark_patterns = await response.json();
    for(i in dark_patterns.result){
        let text=dark_patterns.result[i][0];
        let selector=dark_patterns.result[i][1].slice(0,-6);
        let type=dark_patterns.result[i][3];
        console.log(text+" "+selector+" "+type+"\n");
        Change_CSS(selector,text,type);
    }
})();
function Change_CSS(x,y,z) {
    const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css
    // let Selector = "span.a-badge-text";
    Add_Custom_Style(`
            .DPBH {
                background-color: #008dff !important;
            }
            .DPBH:hover .DP-Type{
                display:inline ;
            }
            .DP-Type{
                z-index:99;
                position:absolute;
                display:none;
                margin-left:50px;
                color:white;
                font-size: 20px;
                border: 2px solid red;
                padding-bottom: 10px;
                padding-top: 5px;
                padding-left: 2px;
                background-color:red;
            }
        `)
    // alert("Content script is working")
    Selector = document.querySelectorAll(x)
    for (var i = 0, len = Selector.length; i < len; i++) {
        console.log(Selector[i].innerText)
        if (Selector[i].innerText == y) {
            console.log(Selector[i])
            Selector[i].classList.add("DPBH")

            const newNode = document.createElement("div");
            const textNode = document.createTextNode(z);
            newNode.appendChild(textNode);
            newNode.classList.add("DP-Type")
            const list = document.getElementById("myList");
            Selector[i].insertBefore(newNode, Selector[i].children[0]);
        }

    }

}