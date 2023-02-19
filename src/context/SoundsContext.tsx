import { createContext, ReactNode, useContext } from 'react';
import { SoundsData, soundsData } from '@data/soundsData';

interface ISoundsContextProvider {
    children: ReactNode;
    sounds: SoundsData;
}

/* The context itself */
const SoundsContext = createContext<SoundsData>(soundsData);

/* The provider */
const SoundsProvider = ({ children, sounds = soundsData }: ISoundsContextProvider) => (
    <SoundsContext.Provider value={sounds}>{children}</SoundsContext.Provider>
);

/* A custom hook to get access to the provided Sounds */
export const useSoundsContext = () => useContext(SoundsContext);

/* The Sounds provider itself */
export default SoundsProvider;
