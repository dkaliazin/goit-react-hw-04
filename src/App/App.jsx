import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import { ErrorMessage } from 'formik';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
function App() {
  const [images, setImages] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageModalWindow, setImageModalWindow] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleSearch = async (newTopicName) => {
    setImages([]);
    setPage(1);
    setTopicName(newTopicName);
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

  const handleImageModalWindow = (modalData) => {
    setImageModalWindow(!imageModalWindow);
    setModalData(modalData);
  }
  return (
    <div className={css.container}>
      
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModalWindow={handleImageModalWindow}/>
      )}
      
    </div>
  )
}
/*{error && <ErrorMessage/>}*/
export default App
