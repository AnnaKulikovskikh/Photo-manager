import './App.css'
import Preview from'./Preview'
import {useState} from 'react'

function App() {
  const [images, setImages] = useState([])

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }
  
  const handleSelect = async (evt) => {
      const files = [...evt.target.files];
      const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
      // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
  }

  

  return (
    <div className='container'>
      <div className='file-container'>
          <input type="file" accept='image/*' />
          <div className='select'>Click to select</div>
      </div>
      <Preview />
    </div>
  )
}

export default App;
