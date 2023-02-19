import { createContext, ReactNode, useContext } from 'react';
import { ImagesData, imagesData } from '@data/imagesData';

interface IImagesContextProvider {
    children: ReactNode;
    images: ImagesData;
}

/* The context itself */
const ImagesContext = createContext<ImagesData>(imagesData);

/* The provider */
const ImagesProvider = ({ children, images = imagesData }: IImagesContextProvider) => (
    <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>
);

/* A custom hook to get access to the provided Sounds */
export const useImagesContext = () => useContext(ImagesContext);

/* The Sounds provider itself */
export default ImagesProvider;
