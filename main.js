function setup()
{
    canvas = creaeCanvas(600, 600);
    instializeInSetup(ping_pong_game)
}

function draw()
{
  game()
}

function preload()
{
    setSprites();
}