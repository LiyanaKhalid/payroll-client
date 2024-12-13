/* eslint-disable react/prop-types */

const PLACEHOLDER_URL = "https://placehold.co/400x400/000000/FFF";

const CompanyList = ({ companies, onSelect }) => (
  <div className="w-screen min-h-screen bg-green-500 flex flex-col justify-center items-center gap-10 p-10">
    <header>
      <h2 className="font-bold text-2xl">Select a company</h2>
    </header>
    <main className="max-w-full flex flex-wrap gap-10">
      {companies.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-2 group hover:scale-105 duration-150"
          onClick={() => onSelect(item)}
        >
          <div className="w-40 h-40 overflow-hidden rounded-lg">
            <img src={item.logo_url ?? PLACEHOLDER_URL} />
          </div>
          <h3 className="text-white text-xl group-hover:font-medium">
            {item.name}
          </h3>
        </div>
      ))}
    </main>
  </div>
);

export default CompanyList;
