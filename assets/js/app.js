// //geting elements

// const root = document.getElementById("root");
// const blackBtn = document.getElementById("black-btn");
// const whiteBtn = document.getElementById("white-btn");
// const imgTop = document.getElementById("img-top");
// //data array

// const whiteNike = {
//   imgUrl: "./assets/img/white.webp",
//   price: "300$",
// };

// const balckNike = {
//   imgUrl: "./assets/img/black.webp",
//   price: "500$",
// };

// const changeDataWhite = () => {
//   const div = document.createElement("div");
//   div.innerHTML = `
//         <div class="card" style="width: 18rem">
//         <img src="${whiteNike.imgUrl}" class="card-img-top" alt="..." />
//         <div class="card-body bg-sami">
//           <div class="d-flex justify-content-between gap-2">
//             <h1 class="card-title fs-5">Nike Air max</h1>
//             <div class="d-flex gap-3">
//               <span href="" class="white-btn white-btn--active" id="white-btn"></span>
//               <span
//                 href=""
//                 class="black-btn black-btn"
//                 id="black-btn"
//               ></span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-center mt-4">
//             <button class="buy-btn">Buy Now</button>
//           </div>
//           <div
//             class="d-flex justify-content-start border-top border-1 border-black mt-3 pt-3"
//           >
//             <h3>${whiteNike.price}</h3>
//           </div>
//         </div>
//       </div>

//   `;
//   root.innerHTML = "";
//   root.append(div);
// };

// const changeDataDark = () => {
//   const div = document.createElement("div");
//   div.innerHTML = `
//         <div class="card" style="width: 18rem">
//         <img src="${balckNike.imgUrl}" class="card-img-top" alt="..." />
//         <div class="card-body bg-sami">
//           <div class="d-flex justify-content-between gap-2">
//             <h1 class="card-title fs-5">Nike Air max</h1>
//             <div class="d-flex gap-3">
//               <span href="" class="white-btn " id="white-btn"></span>
//               <span
//                 href=""
//                 class="black-btn black-btn--active"
//                 id="black-btn"
//               ></span>
//             </div>
//           </div>
//           <div class="d-flex justify-content-center mt-4">
//             <button class="buy-btn">Buy Now</button>
//           </div>
//           <div
//             class="d-flex justify-content-start border-top border-1 border-black mt-3 pt-3"
//           >
//             <h3>${balckNike.price}</h3>
//           </div>
//         </div>
//       </div>

//   `;
//   root.innerHTML = "";
//   root.append(div);
// };

// whiteBtn.addEventListener("click", changeDataWhite);
// blackBtn.addEventListener("click", changeDataDark);

// Getting elements
const root = document.getElementById("root");
const blackBtn = document.getElementById("black-btn");
const whiteBtn = document.getElementById("white-btn");

// Data objects
const whiteNike = {
  imgUrl: "./assets/img/white.webp",
  price: "300$",
};

const blackNike = {
  imgUrl: "./assets/img/black.webp",
  price: "500$",
};

// Display data functions
const displayWhiteData = () => {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="card" style="width: 18rem">
      <img src="${whiteNike.imgUrl}" class="card-img-top" alt="..." />
      <div class="card-body bg-sami">
        <div class="d-flex justify-content-between gap-2">
          <h1 class="card-title fs-5">Nike Air max</h1>
          <div class="d-flex gap-3">
            <span href="" class="white-btn white-btn--active" id="white-btn"></span>
            <span href="" class="black-btn black-btn" id="black-btn"></span>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button class="buy-btn">Buy Now</button>
        </div>
        <div class="d-flex justify-content-start border-top border-1 border-black mt-3 pt-3">
          <h3>${whiteNike.price}</h3>
        </div>
      </div>
    </div>
  `;
  root.innerHTML = "";
  root.append(div);
};

const displayBlackData = () => {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="card" style="width: 18rem">
      <img src="${blackNike.imgUrl}" class="card-img-top" alt="..." />
      <div class="card-body bg-sami">
        <div class="d-flex justify-content-between gap-2">
          <h1 class="card-title fs-5">Nike Air max</h1>
          <div class="d-flex gap-3">
            <span href="" class="white-btn" id="white-btn"></span>
            <span href="" class="black-btn black-btn--active" id="black-btn"></span>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button class="buy-btn">Buy Now</button>
        </div>
        <div class="d-flex justify-content-start border-top border-1 border-black mt-3 pt-3">
          <h3>${blackNike.price}</h3>
        </div>
      </div>
    </div>
  `;
  root.innerHTML = "";
  root.append(div);
};

// Event listeners
whiteBtn.addEventListener("click", displayWhiteData);
blackBtn.addEventListener("click", displayBlackData);
