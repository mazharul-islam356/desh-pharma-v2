
const stats = [
  { value: "22", label: "OUTLETS" },
  { value: "5", label: "YEARS SINCE INCEPTION" },
  { value: "22,357", label: "LOYALTY CARD USERS" },
  { value: "5,688", label: "ORDERS PER DAY" },
];

const OurServices = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-5 lg:gap-0 gap-10 lg:mt-0 mt-20 justify-around bg-white lg:shadow-md rounded-lg lg:p-10 lg:w-10/12 w-6/12 border px-4 py-8 mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h3 className="text-4xl font-semibold text-gray-800">{stat.value}</h3>
          <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
        </div>
    );
};

export default OurServices;