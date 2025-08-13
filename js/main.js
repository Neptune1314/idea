// Мобайл цэс
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Санаануудын өгөгдөл
const ideas = [
  {
    title: "Орон нутгийн бүтээгдэхүүний цахим дэлгүүр",
    desc: "Жижиг дунд үйлдвэрлэгчдийн бүтээгдэхүүнийг нэг дэлгүүрт цуглуулж, цахимаар борлуулах платформ. Бүтээгдэхүүн бүрт түүх, үйлдвэрлэгчийн танилцуулгатай.",
    category: "Бизнес",
    tags: ["Цахим худалдаа", "Орон нутгийн бүтээгдэхүүн", "ЖДҮ"],
    date: "2025-08-14",
    icon: "fa-store",
  },
  {
    title: "Монгол хэлний AI туслах",
    desc: "Монгол хэлээр ярилцах чадвартай AI туслах. Дууны командаар ажиллах, асуултанд хариулах, орчуулга хийх, бичгийн алдаа засах зэрэг үйлчилгээ үзүүлнэ.",
    category: "Технологи",
    tags: ["AI", "Монгол хэл", "Дууны удирдлага"],
    date: "2025-08-13",
    icon: "fa-robot",
  },
  {
    title: "Хүүхдийн тоглоомын солилцооны платформ",
    desc: "Хүүхдийн хэрэглээгүй тоглоомуудыг солилцох, түрээслэх боломжийг олгодог платформ. Эцэг эхчүүд хямд зардлаар шинэ тоглоом ашиглах боломжтой.",
    category: "Хөгжилт",
    tags: ["Хүүхэд", "Тоглоом", "Зелен эдийн засаг"],
    date: "2025-08-12",
    icon: "fa-gamepad",
  },
  {
    title: "Улаанбаатар амралтын газрын мэдээллийн систем",
    desc: "Хотын ойролцоох амралтын газруудын мэдээлэл, захиалга, үнэлгээг нэг дороос харьцуулах систем. Хэрэглэгчид шууд захиалга хийх боломжтой.",
    category: "Аялал жуулчлал",
    tags: ["Амралт", "Захиалга", "Мэдээлэл"],
    date: "2025-08-08",
    icon: "fa-umbrella-beach",
  },
  {
    title: "Эрүүл хоолны хүргэлтийн үйлчилгээ",
    desc: "Мэргэжлийн хоолны мэргэжилтнүүдийн бэлдсэн эрүүл, тэнцвэртэй хоолыг гэрт хүргэх үйлчилгээ. Хэрэглэгч өдрийн хоолны төлөвлөгөөгөө апп-аар удирдана.",
    category: "Эрүүл мэнд",
    tags: ["Хоол хүнс", "Эрүүл мэнд", "Хүргэлт"],
    date: "2025-08-10",
    icon: "fa-utensils",
  },
  {
    title: "Онлайн урлаг соёлын академи",
    desc: "Монголын уламжлалт урлаг, соёлыг сургах онлайн платформ. Хатгамал, хуур, бичгийн урлаг, домог үлгэр зэрэг хичээлүүдийг видео хичээлээр дамжуулан заана.",
    category: "Боловсрол",
    tags: ["Урлаг", "Соёл", "Онлайн сургалт"],
    date: "2025-08-09",
    icon: "fa-palette",
  },
];

// Санаануудыг DOM-д оруулах
const ideasContainer = document.getElementById("ideas-container");

ideas.forEach((idea) => {
  const ideaElement = document.createElement("div");
  ideaElement.className =
    "bg-white rounded-xl shadow-md overflow-hidden card-hover transition-all duration-300";
  ideaElement.innerHTML = `
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-3">${
                          idea.category
                        }</span>
                        <span class="text-gray-500 text-sm">${idea.date}</span>
                    </div>
                    <div class="text-4xl text-blue-500 mb-4">
                        <i class="fas ${idea.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">${
                      idea.title
                    }</h3>
                    <p class="text-gray-600 mb-4">${idea.desc}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${idea.tags
                          .map(
                            (tag) =>
                              `<span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium category-chip">${tag}</span>`
                          )
                          .join("")}
                    </div>
                    <button class="w-full mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                        Дэлгэрэнгүй
                    </button>
                </div>
            `;
  ideasContainer.appendChild(ideaElement);
});

// Өдрийн санааг санамсаргүйгээр солих
function getRandomIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

//  Өдрийн санааг шинэчлэх
function updateDailyIdea() {
  const randomIdea = getRandomIdea();
  document.getElementById("today-idea-title").textContent = randomIdea.title;
  document.getElementById("today-idea-desc").textContent = randomIdea.desc;
}

// Өдөр бүр автоматаар шинэ санаа үзүүлэх
setInterval(updateDailyIdea, 86400000); // 24 цагт нэг удаа

// Initialize Slick slider
$(document).ready(function () {
  $(".banner-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// Хөвөгч товчны event listener
document.querySelector(".floating-btn").addEventListener("click", function () {
  updateDailyIdea();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
