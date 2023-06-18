console;
const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showAiData(data.data.tools);
  });

//show the data to UI
const showAiData = (data) => {
  // console.log(data)
  const sliceData = data.slice(0,6).forEach((Ai) => {
    // console.log(Ai)
    const { name,image, published_in, features} = Ai;
    const div = document.createElement("div");
    const container = document.getElementById("container");
    div.innerHTML = `
        <div class="card shadow-xl bg-slate-100 rounded-2xl mt-5 h-full  ">
        <figure class="px-10 max-h-80 pt-10">
            <img src="${image}" alt="Shoes" class="rounded-2xl" />
          </figure>
          <div class="card-body ">
            <div>
            <h2 class="card-title font-bold">Features</h2>
            <span class"text-[#585858]"><p>1.${features[0]}</p>
            <p>2.${features[1]}</p>
            <p>3.${features[2] ? features[2] :'Text generation' }</p>
            </span>
            </div>
            <hr>
            <h2 class="card-title font-bold"> ${name}</h2>
            <div class="flex justify-between">
            <div><i class="fa-solid fa-calendar-days">  ${published_in}</i></div>
            <div><i class="fa-solid fa-arrow-right btn" style="color: #EB5757;"></i></div>
            </div>
          </div>
      </div>
        `;
    container.appendChild(div);
  });
};
