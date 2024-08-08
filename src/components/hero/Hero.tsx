import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import theme, { devices } from '../../theme';
import { ArrowSquareOut, Circle, Heart, Trash, UploadSimple } from '@phosphor-icons/react';
import Button from '../buttons/Button';
import { storage, firestore } from '../../firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { HeadingsTypography, NormalTypography, SubHeadingsTypography } from '../typography/Typography';
import Section from '../section/Section';
import Modal from '../modal/Modal';

interface FirestoreImage {
  url: string;
  likes: number;
  uploadTime: string;
};

const key = 'n9egn498tho3thn409j03rurjt09u0twehg9ht3489hg3eg'

const Hero = () => {
  const [images, setImages] = useState<Array<FirestoreImage>>([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [initialFetchLoading, setInitialFetchLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [imageToDelete, setImageToDelete] = useState<string | undefined>();
  const [deleteImageLoading, setDeleteImageLoading] = useState(false);
  
  const urlHasKey = window.location.href.includes(key);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesCollection = collection(firestore, 'images');
      const snapshot = await getDocs(imagesCollection);
      setImages(snapshot.docs.map((doc) => (
        { url: doc.data().url, likes: doc.data().likes, uploadTime: doc.data().uploadTime }
      )).sort((a, b) => new Date(b.uploadTime).getTime() - new Date(a.uploadTime).getTime()));
      setInitialFetchLoading(false);
    };

    fetchImages();
  }, []);
  
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadLoading(true);
    const files = e.target.files;
    if (files) {      
      const uploadPromises = Array.from(files).map(async (file) => {
        const fileRef = ref(storage, file.name);
        await uploadBytes(fileRef, file);
        const fileUrl = await getDownloadURL(fileRef);
  
        const imagesCollection = collection(firestore, 'images');
        await addDoc(imagesCollection, { url: fileUrl, likes: 0, uploadTime: new Date().toUTCString() });
  
        return fileUrl;
      });
  
      const fileUrls = await Promise.all(uploadPromises);
      setImages((prevImages) => [...fileUrls.map(url => ({ url, likes: 0, uploadTime: new Date().toUTCString() })), ...prevImages]);
      const myUploadedImages = JSON.parse(localStorage.getItem('myUploadedImages') || '[]');
      localStorage.setItem('myUploadedImages', JSON.stringify([...myUploadedImages, ...fileUrls]));
    }
    setUploadLoading(false);
  };

  const handleLikeImage = async (url: string) => {
    const imagesCollection = collection(firestore, 'images');
    const q = query(imagesCollection, where('url', '==', url));
  
    const likedImages = JSON.parse(localStorage.getItem('likedImages') || '[]');
  
    if (!likedImages.includes(url)) {
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          const currentLikes = querySnapshot.docs[0].data().likes || 0;
  
          await updateDoc(docRef, {
            likes: currentLikes + 1
          });
    
          likedImages.push(url);
          localStorage.setItem('likedImages', JSON.stringify(likedImages));
  
          setImages((prevImages) => prevImages.map((image) => {
            if (image.url === url) {
              return { ...image, likes: image.likes + 1 };
            }
            return image;
          }));
        } else {
          console.log('No documents found');
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          const currentLikes = querySnapshot.docs[0].data().likes || 0;
  
          if (currentLikes > 0) {
            await updateDoc(docRef, {
              likes: currentLikes - 1
            });
    
            const index = likedImages.indexOf(url);
            if (index > -1) {
              likedImages.splice(index, 1);
              localStorage.setItem('likedImages', JSON.stringify(likedImages));
            }
  
            setImages((prevImages) => prevImages.map((image) => {
              if (image.url === url) {
                return { ...image, likes: image.likes - 1 };
              }
              return image;
            }));
          }
        } else {
          console.log('No documents found');
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const handleDeleteImage = async () => {
    setDeleteImageLoading(true);
    const myUploadedImages = JSON.parse(localStorage.getItem('myUploadedImages') || '[]');
    
    const image = myUploadedImages.find((image: string) => image === imageToDelete);
    const canDeleteImage = (image && image.length > 0) || urlHasKey;
    
    if (canDeleteImage) {
      try {
        const imagesCollection = collection(firestore, 'images');
        const q = query(imagesCollection, where('url', '==', imageToDelete));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          const currentLikes = querySnapshot.docs[0].data().likes || 0;
  
          await deleteDoc(docRef);
    
          const newArray = myUploadedImages.filter((image: string) => image !== imageToDelete);
          localStorage.setItem('myUploadedImages', JSON.stringify(newArray));
  
          setImages((prevImages) => prevImages.filter((image) => image.url !== imageToDelete));
        } else {
          console.log('No documents found');
        }
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }

    setDeleteImageLoading(false);
    setImageToDelete(undefined);
    setShowConfirmationModal(false);
  }
  
  const handleButtonClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = `image-${Math.random() * 100}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hasLikedImage = (url: string) => {
    const likedImages = JSON.parse(localStorage.getItem('likedImages') || '[]');
    return likedImages.includes(url);
  }

  return (
    <Container>
      <Content>
        <h1>Bröllopsfest Sara & Christian</h1>
        <SubheadingContainer>
          <h2>Hällsnäs Hotell & Restaurang</h2>
          <Circle size={4} weight='fill' />
          <ThinH2>10 augusti 2024</ThinH2>
        </SubheadingContainer>
      </Content>
      <Section id='images' background='grey' wide>
        <GallerySection>
          <GallerySectionHeader>
          <HeadingsTypography>Galleri</HeadingsTypography>
            <>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleUpload}
                multiple
                accept="image/*"
              />
              <Button color="dark" onClick={handleButtonClick} disabled={uploadLoading}>
                <UploadSimple size={30} color={theme.colors.common.white} />
                {uploadLoading ? 'Laddar upp...' : 'Ladda upp bilder'}
              </Button>
            </>
          </GallerySectionHeader>
          {!initialFetchLoading && (
            <NormalTypography color={theme.colors.text.light}>Här kan du som gäst se, gilla och ladda upp bilder från festen 🥳</NormalTypography>
          )}
          {initialFetchLoading && (
            <NormalTypography color={theme.colors.text.light}>Hämtar bilder...</NormalTypography>
          )}
          <Gallery noImages={!initialFetchLoading && images.length === 0}>
            {images && images.length && !initialFetchLoading ? images.map(({ url, likes }) => (
              <ImageContainer key={url}>
                <Image src={url} alt="uploaded" />
                <ImageToolBar>
                  <LikesContainer>
                    <IconContainer onClick={() => handleLikeImage(url)}>
                      <Heart weight={hasLikedImage(url) ? 'fill' : 'regular'} size={24} color={theme.colors.common.white} />
                    </IconContainer>
                    <NormalTypography color={theme.colors.common.white}>{likes}</NormalTypography>
                  </LikesContainer>
                  <IconContainer onClick={() => handleDownload(url)}>
                    <ArrowSquareOut size={24} color={theme.colors.common.white} />
                  </IconContainer>
                  {(JSON.stringify(localStorage.getItem('myUploadedImages')).includes(url) || urlHasKey) && (
                    <IconContainer onClick={() => {
                      setImageToDelete(url);
                      setShowConfirmationModal(true);
                    }}>
                      <Trash size={24} color={theme.colors.common.white} />
                    </IconContainer>
                  )}
                </ImageToolBar>
                <ImageToolBarMobile>
                  <LikesContainer>
                    <IconContainer onClick={() => handleLikeImage(url)}>
                      <Heart weight={hasLikedImage(url) ? 'fill' : 'regular'} size={24} color={theme.colors.text.dark} />
                    </IconContainer>
                    <NormalTypography color={theme.colors.common.white}>{likes}</NormalTypography>
                  </LikesContainer>
                  <IconContainer onClick={() => handleDownload(url)}>
                    <ArrowSquareOut size={24} color={theme.colors.text.dark} />
                  </IconContainer>
                  {(JSON.stringify(localStorage.getItem('myUploadedImages')).includes(url) || urlHasKey) && (
                    <IconContainer onClick={() => {
                      setImageToDelete(url);
                      setShowConfirmationModal(true);
                    }}>
                      <Trash size={24} color={theme.colors.text.dark} />
                    </IconContainer>
                  )}
                </ImageToolBarMobile>
              </ImageContainer>
            )) : (
              <ImageUploadPlaceholder onClick={handleButtonClick}>
                <UploadSimple size={24} color={theme.colors.text.dark} />
                <NormalTypography>Ladda upp bilder</NormalTypography>
              </ImageUploadPlaceholder>
            )}
          </Gallery>
        </GallerySection>
      </Section>
      {showConfirmationModal && (
        <Modal
          title='Ta bort bild'
          onClose={() => setShowConfirmationModal(false)}
        >
          <NormalTypography>Vill du verkligen ta bort bilden?</NormalTypography>
          <ModalButtonContainer>
            <Button
              color='dark'
              onClick={() => {
                setShowConfirmationModal(false);
                setImageToDelete(undefined);
              }}
            >
              Avbryt
            </Button>
            <Button color="danger" disabled={deleteImageLoading} onClick={() => handleDeleteImage()}>{deleteImageLoading ? 'Tar bort...' : 'Ja, ta bort'}</Button>
          </ModalButtonContainer>
        </Modal>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding-top: 140px;

  @media ${devices.tablet} {
    padding-top: 180px;
    padding-bottom: ${theme.spacing.l};
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.l};
  padding: 0 20px 0 20px;

  > h1 {
    font-size: 54px;
    text-align: center;
  }
  
  @media ${devices.tablet} {
    padding: 0 20px 0 0;

    > h1 {
      font-size: 80px;
      text-align: left;
    }
  }
`;

const SubheadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.s};
  padding-top: ${theme.spacing.s};
  padding-bottom: ${theme.spacing.l};
  
  @media ${devices.tablet} {
    flex-direction: row;
    gap: ${theme.spacing.l};
    padding-top: 0;
  }
`;

const ThinH2 = styled.h2`
  font-weight: 400;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 2;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.grey.light};
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    aspect-ratio: 1 / 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  box-sizing: border-box;
`;

const ImageToolBar = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    padding: ${theme.spacing.xxs} ${theme.spacing.s};
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    gap: ${theme.spacing.xs};
  }
`;

const ImageToolBarMobile = styled.div`
  display: flex;
  align-items: center;
  padding: 6px ${theme.spacing.xxs};
  width: 100%;
  box-sizing: border-box;
  gap: ${theme.spacing.xxs};

  @media ${devices.tablet} {
    display: none;
  }
`;

const GallerySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.m};
  background-color: ${theme.colors.common.white};
  padding: ${theme.spacing.m};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Gallery = styled.div<{ noImages: boolean }>`
  display: grid;
  grid-template-columns: ${({ noImages }) => noImages ? '1fr' : 'repeat(2, 1fr)'};
  gap: ${theme.spacing.xs};
  box-sizing: border-box;

  @media ${devices.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.spacing.m};
  }
`;

const GallerySectionHeader = styled.div`
  display: flex;
  gap: ${theme.spacing.s};
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  
  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ImageUploadPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${theme.colors.grey.light};
  border-radius: 8px;
  border: 1px dashed ${theme.colors.grey.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xs};
  cursor: pointer;
`;

const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
  flex: 1;
  
  @media ${devices.tablet} {
    ${NormalTypography} {
      color: ${theme.colors.common.white};
    }
    svg {
      cursor: pointer;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  > button {
    width: 100%;
  }
`;

export default Hero;