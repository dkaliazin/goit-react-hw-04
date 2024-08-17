import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
function App() {
  const [images, setImages] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setselectedImage] = useState(null);
  const handleSearch = async (newTopicName) => {
    setImages([]);
    setPage(1);
    setTopicName(newTopicName);
  }
  const handleLoadMore = () => {
    setPage(page + 1);
  }
useEffect(() => {
  const getImages = async () => {
    try {
      setLoading(true);
      const results = await axios.get(`https://api.unsplash.com/search/photos?query=${topicName}&page=${page}&client_id=P7ByciXJKPkJC46zpMWNVK8C8nALBCKpESinSOr59DI`);
      setImages((prev) => [...prev, ...results.data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (topicName) {
    getImages();
  }
}, [topicName, page]);

    const openModalWindow = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModalWindow = () => {
    setSelectedImage(null);
  };
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModalWindow={openModalWindow} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          imageSrc={selectedImage}
          altDesc="Modal image"
          onRequestClose={closeModalWindow}
        />
      )}
      <Toaster />
    </div>
  )
}
/*
*/
export default App
