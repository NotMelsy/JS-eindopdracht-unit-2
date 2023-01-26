class App {
    runApplication() {

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        //weg
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();

        //zon
        ctx.beginPath();
        ctx.arc(900, 50, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();

        //bomen
        ctx.beginPath();
        ctx.arc(812, 350, 60, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.fillStyle = "black";
            ctx.fillRect(800, 400, 30, 100);


        //sneeuwpop
        ctx.beginPath();
        ctx.arc(950, 470, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(950, 425, 20, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(950, 395, 15, 0, 2 * Math.PI);
        ctx.fill();

        //sneeuwpop zwarte punten
        ctx.fillStyle = "black";
        ctx.fillRect(953, 390, 5, 5);
        ctx.fillRect(943, 390, 5, 5);
        ctx.fillRect(948, 430, 5, 5);
        ctx.fillRect(948, 450, 5, 5);
        ctx.fillRect(948, 470, 5, 5);
        ctx.fillStyle = "orange";
        ctx.fillRect(948, 400, 5, 5);

        //buildings
        function draw() {
            background(220);
            drawBuildings(canvas);
          }
           {
            // Gebouw 1
            ctx.fillStyle = "grey";
            ctx.fillRect(50, 300, 100, 200);

            // Gebouw 2
            ctx.fillStyle = "grey";
            ctx.fillRect(200, 250, 150, 250);

            // Gebouw 3
            ctx.fillStyle = "grey";
            ctx.beginPath();
            ctx.fillRect(450,150,175,350)
            ctx.closePath();
            ctx.fill();
        }


        
        //kerstwens
        ctx.fillText("fijne kerst", 50, 100);
        ctx.fillStyle = "white";








    }
}

let app = new App();
app.runApplication();
