
window.onload=function(){
    const canvas = document.getElementById("ProjectCanvas")
    let ctx = canvas.getContext("2d")
    ctx.font = "8px Ubuntu"
    let CurrentProject = 0
    let Projects = [
        {"Title": "PyKart Drive","Image": "Project1Image","Description": "This is a game written in Python with pygame. \n  The player can build their own vehicles and the drive them in  \n procedurally generated landscapes the player can select. \n the building system is not based on tiles, \n and there is a total of 27 parts organized in categories to build with \n The driving of the vehicle features particles, a minimap and physics made possible by pymunk."}]

    function draw(){
        let DrawProject = Projects[CurrentProject]
        ctx.clearRect(0,0,canvas.width,canvas.height)
        let Image = document.getElementById(Projects[CurrentProject].Image)
        ctx.drawImage(Image,0,0,canvas.width,canvas.height)
        ctx.fillStyle = "white"
        //put description in paragraph below canvas
        let Desc = DrawProject.Description
        document.getElementById("ProjectDescription").innerText = Desc
        //put title in paragraph below canvas
        let Title = DrawProject.Title
        document.getElementById("ProjectTitle").innerText = Title


    }
    draw()


}