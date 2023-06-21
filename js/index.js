// LoadData Function:
const LoadData = () => {
  loader(true);
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((res) => res.json())
    .then((data) => {
      const allData = data;
      showAiData(allData.data.tools.slice(0, 6));
      showAiData2(allData.data.tools.slice(0, 6));
    });
};

// Showing data to the UI:
const showAiData = (data) => {
  loader(true);
  data.forEach((Ai) => {
    const { name, image, published_in, features, id } = Ai;
    const date = published_in;
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card shadow-2xl bg-zinc-200 rounded-2xl h-full ">
        <figure class="px-10 max-h-80 pt-10">
          <img src="${image}" class="rounded-2xl" />
        </figure>
        <div class="card-body ">
          <div>
            <h2 class="card-title font-bold">Features</h2>
            <span class"text-[#585858]">
              <p>1.${features[0]}</p>
              <p>2.${features[1]}</p>
              <p>3.${features[2] ? features[2] : "Text generation"}</p>
            </span>
          </div>
          <hr class="border border-gray-300 my-4">
          <h2 class="card-title font-bold">${name}</h2>
          <div class="flex justify-between">
            <div><i class="fa-solid fa-calendar-days">  ${date}</i></div>
            <div><i onclick="singleAiLoad('${id}')" class="fa-solid fa-arrow-right btn bg-zinc-300 p-4 roudnded-2xl" style="color: #EB5757;"></i></div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  loader(false);
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
  emtyInnerHTML2();
  loader(true);
  const SeeMoreBtn = document.getElementById("btn-seeMore");
  SeeMoreBtn.classList.add("hidden");
  fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((res) => res.json())
    .then((data) => {
      showAiData(data.data.tools);
      showAiData2(data.data.tools);
      document.getElementById("btn-seeLess").classList.remove("hidden");
      document.getElementById("btn-seeMore").classList.add("hidden");
    });
};

// seeLessData Function:
const seeLessData = () => {
  emtyInnerHTML();
  emtyInnerHTML2();
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

const emtyInnerHTML2 = () => {
  const container = document.getElementById("container-sort");
  container.innerHTML = "";
};

// Single Ai Load Function:
const singleAiLoad = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showAiDetails(data);
    });
};

// Show Details function:
const showAiDetails = (AiData) => {
  const {
    accuracy,
    description,
    image_link,
    input_output_examples,
    pricing,
    features,
    integrations,
  } = AiData.data;

  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `      
<dialog id="my_modal_4" class="modal  ">
<form method="dialog" class="modal-box mx-auto h-auto max-w-screen-lg bg-slate-300 ">
<div class="modal-action">
<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
        <div class="grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 rounded-4xl     ">
            <div class="  rounded-2xl p-5 shadow-2xl bg-red-200 ">
                <div class="text-xl font-bold p-3 ">${description}</div>
                    <div class="grid grid-cols-3 gap-3 font-semibold mt-5">
                    <div class="text-[#03A30A] p-4 shadow-2xl rounded-xl">
                    <p>${
                      pricing[0].price
                        ? pricing[0].price + " Basic"
                        : "Free of Cost/Basic"
                    }</p>
                    </div>
                    <div class="text-[#F28927] p-4 shadow-2xl rounded-xl">
                    <p>${
                      pricing[1].price
                        ? pricing[1].price + " Pro"
                        : "Free Of Cost/Pro"
                    }</p>
                    </div>
                    <div class="text-[#EB5757]  p-4 shadow-2xl rounded-xl">
                    <p>${
                      pricing[2].price
                        ? pricing[2].price
                        : "Free of Cost /Enterprise"
                    }</p>
                    </div>
                    </div>
                    <div class="grid grid-cols-2 ms-2 gap-2 my-5">
                    <div>
                    <h2 class="text-xl font-bold ">Features</h2>
                    <li class="">${features[1].feature_name}</li>
                    <li>${features[2].feature_name}</li>
                    <li>${features[3].feature_name}</li>
                    </div>
                    <div>
                    <h2 class="text-xl font-bold">Integrations</h2>
                        <div>
                            <li>${
                              integrations[0]
                                ? integrations[0]
                                : "No data found"
                            }</li>
                            <li>${
                              integrations[1]
                                ? integrations[1]
                                : "No data found"
                            }</li>
                            <li>${
                              integrations[2]
                                ? integrations[2]
                                : "No data found"
                            }</li>
                        </div>
                    </div>
                </div>
                </div>
            <div class="relative  rounded-2xl p-5 shadow-2xl bg-red-200">
                <div><img class="rounded-xl "
                        src="${image_link[0]}"
                        alt=""></div>
                <div class="text-center rounded-md p-4">
                    <h2 class="text-lg font-bold ">${
                      input_output_examples[0].input
                    }</h2>
                    <p>${
                      input_output_examples[0].output
                        ? input_output_examples[0].output
                        : "No! Not Yet! Take a break!!!"
                    }</p>
                </div>
                <div class="absolute right-2 top-2">
                    <P class="bg-[#EB5757] rounded-md mt-4 me-6 shadow-2xl">${
                      accuracy.score ? accuracy.score + "% accuracy" : ""
                    }</P>
                    </div>
            </div>
        </div>
        </form>
</dialog>
`;

  modalContainer.appendChild(div);
  window.my_modal_4.showModal();
};

// ------------------------------------
// For showing data by datewise:
const showAiData2 = (data) => {
  emtyInnerHTML2();

  loader(true);
  data.sort((a, b) => {
    const dateA = new Date(a.published_in);
    const dateB = new Date(b.published_in);
    return dateB - dateA; // Sort in descending order
  });

  data.forEach((Ai) => {
    const container2 = document.getElementById("container-sort");
    const { name, image, published_in, features, id } = Ai;
    const date = published_in;
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card shadow-2xl bg-zinc-200 rounded-2xl h-full ">
        <figure class="px-10 max-h-80 pt-10">
          <img src="${image}" class="rounded-2xl" />
        </figure>
        <div class="card-body ">
          <div>
            <h2 class="card-title font-bold">Features</h2>
            <span class"text-[#585858]">
              <p>1.${features[0]}</p>
              <p>2.${features[1]}</p>
              <p>3.${features[2] ? features[2] : "Text generation"}</p>
            </span>
          </div>
          <hr class="border border-gray-300 my-4">
          <h2 class="card-title font-bold">${name}</h2>
          <div class="flex justify-between">
            <div><i class="fa-solid fa-calendar-days">  ${date}</i></div>
            <div><i onclick="singleAiLoad('${id}')" class="fa-solid fa-arrow-right btn bg-zinc-300 p-4 roudnded-2xl" style="color: #EB5757;"></i></div>
          </div>
        </div>
      </div>
    `;
    container2.appendChild(div);
  });

  loader(false);
};

//  Sort by Date fucntion:
const SortByDate = () => {
  setTimeout(loader, 500);
  setTimeout(emtyInnerHTML, 250);
  // emtyInnerHTML();
  const SortContainer = document.getElementById("container-sort");
  const showSortContainer = SortContainer.classList.remove("hidden");
  setTimeout(showSortContainer, 250);
  const Container = document.getElementById("container");
  Container.classList.add("hidden");
  loader(true);
};

// Calling the LoadData function:
LoadData();
