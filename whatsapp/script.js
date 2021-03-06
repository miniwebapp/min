openwhatsapp = () => {
    var phonenumber = document.getElementsByTagName("input")[0].value;
    if (phonenumber > 999999999) {
        window.location.assign("https://wa.me/" + phonenumber);
    }
}

deleteelement = (x) => {x.style.display = "none"}

let message;
let textmessage;
let textnode;

sendmessage = () => {
  message = document.getElementsByTagName("input")[1].value;
    if(message !== "")
    {
        let node = document.createElement("div");
        node.classList.add("chat");
        message.toString();

        if(message[0] === "." ) 
        {
            node.classList.add("left");
            message = message.substring(1);          
        }
        else
        {
            node.classList.add("right");
        }
        
        textnode = document.createTextNode(message);
        node.appendChild(textnode);
        document.getElementsByTagName("main")[0].appendChild(node);
        document.getElementsByTagName("input")[1].value = "";
    }
}

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/whatsapp/sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install prompt on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('#installbtn');
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
  
    addBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
  });
  