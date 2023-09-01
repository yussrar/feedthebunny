
window.onload= function(){

  //getting messages and buttons
  var message1 = document.getElementById("message1");
  var message2 = document.getElementById("message2");
  var counts = document.getElementById("counts")
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  btn1.onclick = startGame;
  btn2.onclick = reloadPage;

  var counter = 0;

  message2.style.display = "none";

  var rabbitInterval;

    //getting the counter 
    var counterShow = document.getElementById("counter");
    counterShow.style.display="none";

  function startGame(){

    //playing background music 
    var audio = document.getElementById("backAudio");
    audio.loop = true;
    audio.play();

    setTimeout(stopGame, 20000);

    message1.style.display="none";
    counterShow.style.display="block";

    // Get the rabbits container element
    const rabbitsContainer = document.getElementById("rabbits");

    // Create a function to generate a random position for the rabbit
    function generateRandomPosition() {
      const containerWidth = rabbitsContainer.offsetWidth;
      const containerHeight = rabbitsContainer.offsetHeight;
      const left = Math.floor(Math.random() * containerWidth);
      const top = Math.floor(Math.random() * containerHeight)+740;
      return { left, top };
    }

    // Create a function to create a new rabbit element and add it to the container
    function createNewRabbit() {
      const rabbit = document.createElement("div");
      rabbit.classList.add("rabbit");
      const { left, top } = generateRandomPosition();
      rabbit.style.left = `${left}px`;
      rabbit.style.top = `${top}px`;
      rabbitsContainer.appendChild(rabbit);
    }

    // Call the createNewRabbit function at a fixed interval to create new rabbits
    rabbitInterval = setInterval(createNewRabbit, 700);

    //adding a function that counts how many times the rabbit is clicked
    rabbitsContainer.onclick= rabbitFed;

    //add the counter and play audio when rabbit fed
    function rabbitFed(){
      var audio2 = document.getElementById("myAudio");
      var counts= document.getElementById("counterShow")
      audio2.play();
      counter = counter+1;
      counts.innerHTML = counter;
      console.log(counter);

      clickedRabbit.querySelector('img').src = "new-image.jpg";
    }
  }




  // end the game by stopping rabit intervel and display counter
  function stopGame() {
    clearInterval(rabbitInterval);
    message2.style.display= "block";
    counterShow.style.display="none";
    counts.innerHTML = counter;
  }

  function reloadPage(){
    location.reload();
  }
}

