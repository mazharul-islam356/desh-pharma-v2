
const HelthTips = () => {
  return (
    <div class="relative h-[90vh] bg-fixed bg-[url('https://i.ibb.co.com/jTwrZF4/helth-Tips.jpg')] bg-cover bg-center">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <div class="relative z-10 flex flex-col items-center  h-full text-center text-white px-4">
        <h1 class="text-4xl font-bold mb-4 mt-10">Helth Tips</h1>

        <div className="grid grid-cols-3 items-center justify-center gap-8 mt-8">
          
          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Stay Hydrated</h3>

            <p>
              Drink at least 8-10 glasses of water daily to keep your body
              hydrated, improve digestion, and maintain healthy skin.
            </p>
          </div>

          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Eat a Balanced Diet</h3>

            <p>
            Include a variety of fruits, vegetables, lean proteins, whole grains, and healthy fats in your meals to ensure you get all the essential nutrients.
            </p>
          </div>

          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Exercise Regularly</h3>

            <p>
            Aim for at least 30 minutes of moderate physical activity, like walking, jogging, or yoga, most days of the week to boost your physical and mental health.
            </p>
          </div>


          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Get Enough Sleep</h3>

            <p>
            Ensure 7-9 hours of quality sleep each night to allow your body to recover, reduce stress, and maintain optimal cognitive function.
            </p>
          </div>


          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Manage Stress</h3>

            <p>
            Engage in activities like meditation, deep breathing, or hobbies to lower stress levels and maintain emotional well-being.
            </p>
          </div>


          <div class="bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl w-96 h-48 px-4 flex flex-col  justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2">Protect Your Skin</h3>

            <p>
            Use sunscreen with an SPF of 30 or higher, wear protective clothing, and avoid excessive sun exposure to prevent skin damage and reduce the risk of skin cancer.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelthTips;
