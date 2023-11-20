// components/NewsletterSubscribe.tsx
const NewsletterSubscribe = () => {
  return (
    <div className="bg-blue-600 text-white text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">
        Don't miss out on our top deals! Don't worry, we will not spam you.
      </p>
      <form className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your Email Here"
          className="p-3 w-1/3 text-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          required
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-bold p-3 rounded-r-lg shadow-lg transform active:scale-95 transition duration-150 ease-in-out hover:bg-blue-100"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;
