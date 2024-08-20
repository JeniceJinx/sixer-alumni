import React, { useEffect, useState } from 'react';
import { db, storage } from '../Firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import './Gallery.css';
import IHS_Sign from '/Users/jenicemcdaniel/Desktop/SixerProject/sixer-alumni/src/images/IHS SIGN.jpg';  // Import the image file

const Gallery = () => {
  const [row1Images, setRow1Images] = useState([]);
  const [row2Images, setRow2Images] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  useEffect(() => {
    const photoCollection = collection(db, 'photos');
    const unsubscribe = onSnapshot(photoCollection, (snapshot) => {
      const row1 = [];
      const row2 = [];

      snapshot.docs.forEach((doc) => {
        const image = { id: doc.id, url: doc.data().url };
        if (doc.data().row === 'row1') {
          row1.push(image);
        } else {
          row2.push(image);
        }
      });

      setRow1Images(row1);
      setRow2Images(row2);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          if (idTokenResult.claims.admin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        });
      }
    });
  }, []);

  const handleFileChange = (e) => {
    setSelectedImageFile([...e.target.files]); // Store multiple files
  };

  const handleAddPhoto = async () => {
    const photoCollection = collection(db, 'photos');
    
    if (selectedImageFile && selectedImageFile.length > 0) {
      for (let i = 0; i < selectedImageFile.length; i++) {
        const file = selectedImageFile[i];
        const storageRef = ref(storage, `photos/${file.name}`);
        await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(storageRef);

        // Alternate between row1 and row2 for each file uploaded
        if (row1Images.length <= row2Images.length) {
          await addDoc(photoCollection, { url: fileUrl, row: 'row1' });
        } else {
          await addDoc(photoCollection, { url: fileUrl, row: 'row2' });
        }
      }
    } else if (newPhotoUrl.trim()) {
      // If a URL is entered, add it directly to Firestore
      await addDoc(photoCollection, { url: newPhotoUrl, row: row1Images.length <= row2Images.length ? 'row1' : 'row2' });
    }

    // Clear inputs and close form
    setNewPhotoUrl('');
    setSelectedImageFile([]);
    setShowAddForm(false);
  };

  const handleDeletePhoto = async () => {
    if (selectedImageId && isAdmin) {
      const photoDoc = doc(db, 'photos', selectedImageId);
      await deleteDoc(photoDoc);
      setSelectedImageId(null);
      setShowDeleteForm(false);
    }
  };

  return (
    <div className="gallery-container" style={{ backgroundImage: `url(${IHS_Sign})` }}>
      <div className="add-photo-section">
        <button onClick={() => setShowAddForm(!showAddForm)}>Add Photo</button>
        {showAddForm && (
          <div className="add-photo-form">
            <h2>Add a New Photo</h2>
            <p>You can upload photos from your device or provide a URL.</p>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            <p>Or</p>
            <input
              type="text"
              placeholder="Enter Image URL"
              value={newPhotoUrl}
              onChange={(e) => setNewPhotoUrl(e.target.value)}
            />
            <div className="form-buttons">
              <button className="submit-button" onClick={handleAddPhoto}>
                Confirm Add Photos
              </button>
              <button className="cancel-button" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="gallery-row gallery-row-left">
        {row1Images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt="gallery-item" className="gallery-image" />
            {isAdmin && (
              <button
                onClick={() => setSelectedImageId(image.id) || setShowDeleteForm(true)}
                style={{ height: '20px', position: 'absolute', top: '5px', right: '5px' }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="gallery-row gallery-row-right">
        {row2Images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt="gallery-item" className="gallery-image" />
            {isAdmin && (
              <button
                onClick={() => setSelectedImageId(image.id) || setShowDeleteForm(true)}
                style={{ height: '20px', position: 'absolute', top: '5px', right: '5px' }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {showDeleteForm && isAdmin && (
        <div className="delete-photo-form">
          <h2>Remove Photo</h2>
          <p>Are you sure you want to remove this photo? Photos deemed inappropriate or unrelated to Sixer events will be removed by admins.</p>
          <div className="form-buttons">
            <button className="submit-button" onClick={handleDeletePhoto}>Confirm Remove Photo</button>
            <button className="cancel-button" onClick={() => setShowDeleteForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
