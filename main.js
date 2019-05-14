// contents of room here
alert("Loading main.js!"); //Don't change this line
player = new Player();

//Create your objects
let room1 = new Room("lab 1");
let testtubes = new Item("testing tubes", "very cloudy and has illegible writing. Filled with a dark substance.")
let monster = new Item("monster")
let room2 = new Room("lab 2");
let pods = new Item("pod" , "very cold and contains a very hairy figure inside.")
let room3 = new Room("security room");
let cctv = new Item("cctv cameras")
let room4 = new Room("elevator");
let buttons = new Item("elevator buttons")
let room5 = new Room("analysis room");
let results = new Item("lab results")
let start = new Room("Testing Lab", "You have no memory of this place.");


// Put them in their spots
room1.addItem(testtubes);
room1.addItem(monster);
room2.addItem(pods);
room3.addItem(cctv);
room4.addItem(buttons);
room5.addItem(results);
start.addItem(room1);
start.addItem(room2);
start.addItem(room3);
start.addItem(room4);
start.addItem(room5);
player.location = start;


player.location.enter();
