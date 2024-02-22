var bg;
var playbutton;
var aboutbutton;
var gameState = "wait";

function preload(){
    bg=loadImage("assets/bg.jpg")
}

function setup(){
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/play.png")
    playbutton.position(270, 450)
    playbutton.size(400, 400)
    playbutton.hide()

    aboutbutton = createImg("assets/about.png")
    aboutbutton.position(750, 450)
    aboutbutton.size(400, 400)
    aboutbutton.hide()

}

function draw(){

    if (gameState === "wait") {


        background(bg)
        playbutton.show()
        aboutbutton.show()
        //background_music.play();
    }

    aboutbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "about";
    })

    if (gameState == "about") {
        aboutgame();
    }

    drawSprites()

}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "shoot all the balloons to win\n Use Arrow keys to move up and down and space bar to shoot.",
        textAlign: "center",
        imageUrl: "assets/bg.jpg",
        imageSize: "200x200",
        confirmButtonText: "Let's start",
        confirmButtonColor: "blue",
    },

        function () {
            gameState = "wait"
        }
    )

}
