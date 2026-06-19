import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { pandits } from "../../data/pandits";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";




const ritualNameMap = {
  "ganesh": "Ganesh Puja",
  "griha": "Griha Shanti",
  "navgraha": "Navgraha",
  "griha-pravesh": "Griha Pravesh",
  "marriage-puja": "Marriage Rituals",
  "vehicle-puja": "Vehicle Puja",
  "satyanarayan-katha": "Satyanarayan Katha",
  "mundan-sanskar": "Mundan",
  "navratri-puja": "Navratri Puja",
  "diwali-lakshmi-puja": "Diwali Puja",
  "dussehra-puja": "Dussehra Puja",
  "rudrabhishek": "Rudrabhishek",
  "maha-mrityunjaya": "Mahamrityunjaya",
  "lakshmi-puja": "Lakshmi Puja",
  "saraswati-puja": "Saraswati Puja",
  "hanuman-puja": "Hanuman Puja",
  "business-puja": "Business Opening Puja",
  "vastu-shanti": "Vastu Shanti",
  "namkaran": "Naamkaran",
  "upanayan": "Upanayan Sanskar",
  "annaprashan": "Annaprashan",
};




const AllPandits = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

const ritual = searchParams.get("ritual");


  const filters = [
    "All",
    "Most Booked",
    "Recommended",
    "Premium",
  ];

  // Search + Filter Logic
  const filteredPandits = pandits.filter((pandit) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      pandit.name.toLowerCase().includes(searchTerm) ||
      pandit.languages.some((lang) =>
        lang.toLowerCase().includes(searchTerm)
      ) ||
      pandit.specialization.some((item) =>
        item.toLowerCase().includes(searchTerm)
      );

    const matchesFilter =
      filter === "All" || pandit.tag === filter;







const matchesRitual =
  !ritual ||
  pandit.specialization.some((item) =>
    item
      .toLowerCase()
      .includes(
        ritualNameMap[ritual]?.toLowerCase() || ""
      )
  );

return (
  matchesSearch &&
  matchesFilter &&
  matchesRitual
);
   
  });

  // Pagination
  const itemsPerPage = 6;

  const totalPages = Math.ceil(
    filteredPandits.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentPandits = filteredPandits.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            All <span className="text-amber-400">Pandits</span>
          </h2>

          <p className="text-slate-400 mt-4">
            Browse verified spiritual experts across India.
          </p>
        </div>

        {ritual && (
  <div className="mb-8 text-center">
    <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
      Showing Pandits for Ritual
    </span>
  </div>
)}

        {/* Search + Filter */}
        <div className="mb-14">

          <div className="flex flex-col items-center gap-6">

            {/* Search */}
            <div className="w-full max-w-2xl">

              <div
                className="
                  flex items-center gap-3
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  backdrop-blur-xl
                  hover:border-amber-400/30
                  focus-within:border-amber-400/50
                  transition-all duration-300
                "
              >
                <FiSearch className="text-amber-400 text-xl flex-shrink-0" />

                <input
                  type="text"
                  placeholder="Search pandits, languages, rituals..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-slate-500
                    text-sm sm:text-base
                  "
                />
              </div>

            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">

              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`
                    px-5 py-2.5
                    rounded-full
                    text-sm
                    font-medium
                    border
                    transition-all
                    duration-300

                    ${
                      filter === item
                        ? "bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-500/20"
                        : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/30 hover:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

  {/* Results Counter */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">

  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
      <span className="text-amber-400 text-sm font-bold">
        {filteredPandits.length}
      </span>
    </div>

    <div>
      <p className="text-white font-medium">
        Showing {currentPandits.length} of {filteredPandits.length} Pandits
      </p>

      <p className="text-slate-500 text-sm">
        Verified spiritual experts across India
      </p>
    </div>
  </div>

  {search && (
    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
      <span className="text-slate-400 text-sm">
        Search:
      </span>{" "}
      <span className="text-amber-400 text-sm font-medium">
        "{search}"
      </span>
    </div>
  )}

</div>

        {/* Grid Coming Next */}

        {/* Grid */}
{filteredPandits.length === 0 ? (

  <div className="text-center py-20">

    <div className="text-6xl mb-4">
      🕉️
    </div>

    <h3 className="text-2xl font-bold text-white">
      No Pandits Found
    </h3>

    <p className="text-slate-400 mt-3">
      Try changing your search term or filters.
    </p>

    <button
      onClick={() => {
        setSearch("");
        setFilter("All");
      }}
      className="
        mt-6
        px-6 py-3
        rounded-xl
        bg-amber-400
        text-black
        font-semibold
        hover:scale-105
        transition-all
      "
    >
      Reset Filters
    </button>

  </div>

) : (

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
    "
  >
  {currentPandits.map((pandit) => (
    <div
      key={pandit.id}
      className="
        group
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-amber-400/30
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={pandit.image}
          alt={pandit.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-amber-500/15 border border-amber-500/20 text-amber-300">
          {pandit.tag}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-semibold text-white">
          {pandit.name}
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          {pandit.experience} Experience
        </p>

        <div className="flex items-center justify-between mt-4">

          <span className="text-amber-400">
            ⭐ {pandit.rating}
          </span>

          <span className="text-slate-500 text-sm">
            {pandit.reviews} Reviews
          </span>

        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mt-4">

          {pandit.languages.map((lang) => (
            <span
              key={lang}
              className="
                px-2 py-1
                rounded-full
                text-xs
                bg-white/5
                border
                border-white/10
                text-slate-300
              "
            >
              {lang}
            </span>
          ))}

        </div>

        {/* Price */}
        <div className="mt-5">

          <p className="text-slate-500 text-xs">
            Starting From
          </p>

          <h4 className="text-2xl font-bold text-amber-400">
            {pandit.price}
          </h4>

        </div>

{/* 
       <Link
  to={
    ritual
      ? `/booking?pandit=${pandit.id}&ritual=${ritual}`
      : `/booking?pandit=${pandit.id}`
  }
>
  <button
    className="
      mt-6
      w-full
      py-3
      rounded-xl
      bg-amber-400
      text-black
      font-semibold
      hover:scale-[1.02]
      transition-all
    "
  >
    View Profile
  </button>
  </Link>

<Link to={`/booking?pandit=${pandit.id}`}>
  <button
    className="
      mt-3
      w-full
      py-3
      rounded-xl
      bg-amber-400
      text-black
      font-semibold
      hover:scale-[1.02]
      transition-all
    "
  >
    Book Pandit
  </button>
</Link> */}

<Link
  to={
    ritual
      ? `/booking?pandit=${pandit.id}&ritual=${ritual}`
      : `/rituals`
  }
>
  <button className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-black font-semibold">
    Book Pandit
  </button>
</Link>



      </div>
    </div>
  ))}

</div>

)}

        {/* Pagination Coming Next */}

        {/* Pagination */}
{totalPages > 1 && (
  <div className="flex justify-center items-center gap-2 my-12 flex-wrap">

    <button
      onClick={() =>
        setCurrentPage((prev) => Math.max(prev - 1, 1))
      }
      disabled={currentPage === 1}
      className="
        px-4 py-2
        rounded-xl
        border border-white/10
        bg-white/5
        text-white
        disabled:opacity-40
        disabled:cursor-not-allowed
      "
    >
      Prev
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`
          w-10 h-10
          rounded-xl
          transition-all

          ${
            currentPage === index + 1
              ? "bg-amber-400 text-black font-semibold"
              : "bg-white/5 text-white border border-white/10"
          }
        `}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() =>
        setCurrentPage((prev) =>
          Math.min(prev + 1, totalPages)
        )
      }
      disabled={currentPage === totalPages}
      className="
        px-4 py-2
        rounded-xl
        border border-white/10
        bg-white/5
        text-white
        disabled:opacity-40
        disabled:cursor-not-allowed
      "
    >
      Next
    </button>

  </div>
)}

      </div>

      {/* Premium Trust Section */}


    </section>
  );
};

export default AllPandits;