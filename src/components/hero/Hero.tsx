import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import theme, { devices } from '../../theme';
import { ArrowsOutSimple, Circle, DownloadSimple, Heart, ThumbsUp, UploadSimple } from '@phosphor-icons/react';
import Button from '../buttons/Button';
import { storage, firestore } from '../../firebase';
import { addDoc, collection, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { HeadingsTypography, NormalTypography, SubHeadingsTypography } from '../typography/Typography';
import Section from '../section/Section';

interface FirestoreImage {
  url: string;
  likes: number;
  uploadTime: string;
}

const Hero = () => {
  const [images, setImages] = useState<Array<FirestoreImage>>([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [initialFetchLoading, setInitialFetchLoading] = useState(true);

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
  
  const handleButtonClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
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
          {initialFetchLoading && (
            <NormalTypography color={theme.colors.text.light}>Hämtar bilder...</NormalTypography>
          )}
          {(!images || images.length === 0) && !initialFetchLoading && (
            <NormalTypography color={theme.colors.text.light}>Inga bilder har laddats upp ännu.</NormalTypography>
          )}
          <Gallery>
            {images && images.length && !initialFetchLoading ? images.map(({ url, likes }) => (
              <ImageContainer key={url}>
                <Image src={url} alt="uploaded" />
                <ImageToolBar>
                  <LikesContainer>
                    <div onClick={() => handleLikeImage(url)}>
                      <Heart weight={hasLikedImage(url) ? 'fill' : 'regular'} size={24} color={theme.colors.common.white} />
                    </div>
                    <NormalTypography color={theme.colors.common.white}>{likes}</NormalTypography>
                  </LikesContainer>
                  <div onClick={() => handleDownload(url)} style={{ cursor: 'pointer' }}>
                    <ArrowsOutSimple size={24} color={theme.colors.common.white} />
                  </div>
                </ImageToolBar>
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
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.grey.light};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  box-sizing: border-box;
`;

const ImageToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xxs} ${theme.spacing.s};
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: ${theme.spacing.m};
  box-sizing: border-box;
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
  align-items: end;
  gap: ${theme.spacing.xxs};

  ${NormalTypography} {
    color: ${theme.colors.common.white};
  }

  svg {
    cursor: pointer;
  }
`;

export default Hero;