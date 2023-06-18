console;
const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showAiData(data.data.tools);
  });

//show the data to UI
const showAiData = (data) => {
  let showData;

  // console.log(data)
  const sliceData = data.slice(0, 6).forEach((Ai) => {
    // console.log(Ai)
    const { name, description, image, published_in, features } = Ai;
    console.log();
    console.log(features[1]);
    console.log(features[2]);
    const div = document.createElement("div");
    const container = document.getElementById("container");
    div.innerHTML = `
        <div class="card shadow-xl bg-slate-100 rounded-2xl mt-5 h-full ">
        <figure class="px-10 max-h-80 pt-10">
            <img src="${image}" alt="Shoes" class="rounded-2xl" />
          </figure>
          <div class="card-body ">
            <h2 class="card-title font-bold">Features</h2>
            <p>1.${features[0]}</p>
            <p>2.${features[1]}</p>
            <p>3.${features[2]}</p>
            <br>
            <hr>
            <h2 class="card-title font-bold">${name}</h2>
            <p>${published_in}</p>

            <div class="flex justify-between">

            <div><i class="fa-solid fa-calendar-days"></i></div>

            <div><i class="fa-solid fa-arrow-right" style="color: #EB5757;"></i></div>
            </div>
          </div>
      </div>
        `;
    container.appendChild(div);
    // console.log(Ai)
  });
};
