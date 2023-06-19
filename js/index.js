// LoadData Function:
const LoadData = () => {
  loader(true);
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((res) => res.json())
    .then((data) => {
      const allData = data;
      showAiData(allData.data.tools.slice(0, 6));
    });
};

// Showing data to the UI:
const showAiData = (data) => {
  loader(true);
  data.forEach((Ai) => {
    const { name, image, published_in, features, id } = Ai;
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card shadow-xl bg-slate-100 rounded-2xl h-full  ">
        <figure class="px-10 max-h-80 pt-10">
            <img src="${image}" class="rounded-2xl" />
          </figure>
          <div class="card-body ">
            <div>
            <h2 class="card-title font-bold">Features</h2>
            <span class"text-[#585858]"><p>1.${features[0]}</p>
            <p>2.${features[1]}</p>
            <p>3.${features[2] ? features[2] : "Text generation"}</p>
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
  loader(false);
  // setTimeout(loader, 500);
};

// Loader Function:
const loader = (isLoading) => {
  const LoaderSection = document.getElementById("loader");
  if (isLoading) {
    LoaderSection.classList.remove("hidden");
  } else {
    LoaderSection.classList.add("hidden");
  }
};


// Showing More Data Function:
const seeMoredata = () => {
  emtyInnerHTML();
  loader(true);
  const SeeMoreBtn = document.getElementById("btn-seeMore");
  SeeMoreBtn.classList.add("hidden");
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((res) => res.json())
    .then((data) => {
      showAiData(data.data.tools);
      document.getElementById("btn-seeLess").classList.remove("hidden");
      document.getElementById("btn-seeMore").classList.add("hidden");
    });
};

// seeLessData Function:
const seeLessData = () => {
  emtyInnerHTML();
  loader(true);
  loader(true);
  loader(true);
  loader(true);
  LoadData();
  document.getElementById("btn-seeLess").classList.add("hidden");
  document.getElementById("btn-seeMore").classList.remove("hidden");
};

// emtyInnerHTML Function:
const emtyInnerHTML = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
};

// Calling the LoadData function:
LoadData();
