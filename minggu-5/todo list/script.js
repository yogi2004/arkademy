let todo = [
    {
        title: "rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
    },
    {
        title: "sate ayam",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
    },
    {
        title: "steak",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
    },
    {
        title: "nasi goreng",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
    },
    {
        title: "bakso",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
    },
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=>{
        for (let x in todo){  
            this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'

        }
    }
    setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        /<div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()