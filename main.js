
//!
const projects = [
  {
    id: 1,
    title: "Corporate Dashboard System",
    description: "Pellentesque habitant morbi tristique senectus et netus.",
    category: "Web Design",
    isFeatured: false,
    date: "2024",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-2.webp",
  },
  {
    id: 2,
    title: "Smart Finance Application",
    description: "Maecenas tempus tellus eget condimentum rhoncus.",
    category: "Mobile Apps",
    isFeatured: true,
    date: "2024",
    tags: ["Flutter", "Dart", "Firebase"],
    image:
      "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-4.webp",
  },
  {
    id: 3,
    title: "Fashion Label Identity",
    description: "Donec quam felis ultricies nec pellentesque pretium.",
    category: "Branding",
    isFeatured: false,
    date: "2023",
    tags: ["Photoshop", "Illustrator", "InDesign"],
    image:
      "https://bootstrapmade.com/content/demo/Orbit/assets/img/portfolio/portfolio-6.webp",
  },
];

const projectsContainer = document.getElementById("projects");

projectsContainer.innerHTML = projects
  .map(
    (project) => `
    
    <div class="group bg-white rounded-3xl overflow-hidden
                shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl">

      <!-- //? image -->
      <div class="relative h-68.75 overflow-hidden">

        <img
          src="${project.image}"
          alt="${project.title}"
          class="w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-110"
        >

        <!-- //? category-->
        <span class="absolute top-5 left-5 z-20
                  bg-white text-[#009ee3]
                    text-sm font-semibold uppercase
                    tracking-wider px-5 py-3
                    rounded-full shadow-md">

          ${project.category}
        </span>

        <!-- //? Featured -->
        ${
          project.isFeatured
            ? `
            <span class="absolute top-5 right-5 z-20
                      flex items-center gap-2
                      bg-[#26a7df] text-white
                      text-sm font-semibold
                      px-4 py-3 rounded-full shadow-lg">

              <i class="fa-solid fa-star"></i>
              FEATURED

            </span>
          `
            : ""
        }

        <!--//? hover -->
        <div class="absolute inset-0 z-10 
                    bg-linear-to-t
                    from-[#1e293b]/75
                    via-[#1e293b]/35
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300">

        </div>

        <!-- //? hover icon -->
        <div class="absolute inset-0 z-20
                    flex items-center justify-center gap-4
                    opacity-0 translate-y-5
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-300
                    pointer-events-none
                    group-hover:pointer-events-auto">

          <!-- //? View -->
          <a href="${project.image}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ${project.title}"
              class="w-15 h-15
                    flex items-center justify-center
                    bg-white text-[#009ee3]
                    text-xl rounded-full
                    hover:bg-[#009ee3]
                    hover:text-white
                    transition-all duration-300">

            <i class="fa-regular fa-eye"></i>

          </a>

          <!-- //? links -->
          <a href="${project.image}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ${project.title}"
              class="w-15 h-15
                    flex items-center justify-center
                    bg-white text-[#009ee3]
                    text-xl rounded-full
                    hover:bg-[#009ee3]
                    hover:text-white
                    transition-all duration-300">

            <i class="fa-solid fa-link"></i>

          </a>

        </div>

      </div>

      <!-- //? content-->
      <div class="p-7.5">

        <!-- title -->
        <h3 class="text-[21px] font-bold
                  text-[#1e293b] mb-3">

          ${project.title}

        </h3>

        <!--  //? description -->
        <p class="text-[16px] text-[#718096]
                  leading-6 mb-5">

          ${project.description}

        </p>

        <!-- //? line -->
        <div class="border-t border-gray-200 mb-5"></div>

        <!-- //? footer -->
        <div class="flex items-center justify-between gap-3">

          <!-- //? tags -->
          <div class="flex flex-wrap gap-2">

            ${project.tags
              .map(
                (tag) => `
              
              <span class="bg-[#e0f4fd]
                          text-[#009ee3]
                          text-[13px] font-semibold
                          px-3 py-1.5 rounded-full">

                ${tag}

              </span>

            `,
              )
              .join("")}

          </div>

          <!-- DATE -->
          <span class="text-[#94a3b8]
                      text-sm font-semibold shrink-0">

            ${project.date}

          </span>
        </div>

      </div>

    </div>
    
  `,
  )
  .join("");
