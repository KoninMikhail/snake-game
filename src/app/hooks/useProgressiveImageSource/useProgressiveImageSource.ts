import {useState} from 'react';
import {useEffectOnce} from 'usehooks-ts';
import {IProgressiveImageSourceLoader} from './useProgressiveImageSource.interface';

/**
 * @name useProgressiveImageSourceLoader
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for lazy load logo source
 *
 * @param src - main logo source url
 * @param placeholder - placeholder logo source
 * @return {string}
 */
const useProgressiveImageSourceLoader = ({ src, placeholder }: IProgressiveImageSourceLoader) => {
    const [output, setOutput] = useState(placeholder || src);

    useEffectOnce(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setOutput(src);
        };
    });

    return output;
};

export default useProgressiveImageSourceLoader;
