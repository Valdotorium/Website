
window.onload=function(){
    const canvas = document.getElementById("ProjectCanvas")
    let ctx = canvas.getContext("2d")
    ctx.font = "8px Ubuntu"
    let CurrentProject = 0
    let Projects = [
        {"Title": "PyKart Drive","Image": "Project1Image","Description": "This is a game written in Python with pygame. \n  The player can build their own vehicles and the drive them in  \n procedurally generated landscapes the player can select. \n the building system is not based on tiles, \n and there is a total of 27 parts organized in categories to build with \n The driving of the vehicle features particles, a minimap and physics made possible by pymunk. \n See <a href=https://www.reddit.com/r/pygame/comments/1bu9d0b/my_pygame/> This reddit post </a> for gameplay footage. \n <a href=https://github.com/Valdotorium/Project-Exoplanet/> here </a> is the GitHub repository of the project."},
        {"Title": "VGraphs","Image": "Project1Image", "Description": "A website which can be used to animate data in "}]

    function draw(){
        let DrawProject = Projects[CurrentProject]
        ctx.clearRect(0,0,canvas.width,canvas.height)
        let Image = document.getElementById(Projects[CurrentProject].Image)
        ctx.drawImage(Image,0,0,canvas.width,canvas.height)
        ctx.fillStyle = "white"
        //put description in paragraph below canvas
        let Desc = DrawProject.Description
        document.getElementById("ProjectDescription").innerHTML = Desc
        //put title in paragraph below canvas
        let Title = DrawProject.Title
        document.getElementById("ProjectTitle").innerText = Title


    }
    draw()


}