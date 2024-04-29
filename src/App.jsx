import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import useModal from "./hooks/useModal.js";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  const { showModal, openModal, closeModal } = useModal();

  const handleClick = async () => {
    refreshFact();
  };

  const handleGif = async () => {
    openModal();
  };

  return (
    <main className="flex flex-col justify-center items-center max-w-3xl place-content-center m-auto">
      <h1 className="flex justify-center text-3xl mb-5 mt-10">
        App de gatitos
      </h1>
      <div className="flex flex-row gap-6">
        <button
          className="bg-green-400 p-5 rounded-2xl my-5 max-w-96 font-bold hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg"
          onClick={handleClick}
        >
          Get new fact
        </button>
        <button
          className="bg-green-400 p-5 rounded-2xl my-5 max-w-96 font-bold hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg"
          onClick={handleGif}
        >
          Get random Cat gif
        </button>
      </div>

      {fact && <p className="m-5 text-2xl text-center">' {fact} '</p>}
      {imageUrl && (
        <img
          className="rounded-3xl shadow-2xl shadow-gray-400 m-5"
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-5xl mx-auto my-6">
            <div className="relative flex flex-col w-96 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-3xl font-semibold">Random Cat GIFs</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex items-center justify-center overflow-hidden">
                <iframe
                  className="w-full"
                  title="Cat GIFs"
                  src="https://cataas.com/cat/gif"
                  width="100%"
                  height="400px"
                ></iframe>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
    </main>
  );
}

export default App;
