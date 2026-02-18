const posts = [
  {
    id:1,
    title:"Bugün ne öğrendim",
    content:"JavaScript'te array map kullandım."
  },
  {
    id:2,
    title:"Okul notu",
    content:"Matematik sınavı zor geçti."
  }
];

const postList = document.getElementById("posts");

if(postList){
  posts.forEach(p=>{
    postList.innerHTML += `
      <div class="post" onclick="openPost(${p.id})">
        <h3>${p.title}</h3>
      </div>
    `;
  });
}

function openPost(id){
  localStorage.setItem("post", id);
  location.href="post.html";
}

const postPage = document.getElementById("post");

if(postPage){
  const id = localStorage.getItem("post");
  const p = posts.find(x=>x.id==id);

  postPage.innerHTML = `
    <h1>${p.title}</h1>
    <p>${p.content}</p>
  `;
}
