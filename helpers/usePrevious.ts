import { useEffect, useRef } from 'react';

/**
 * Adapted from react-native-screens-swiper
 * https://www.npmjs.com/package/react-native-screens-swiper
 */
export function usePrevious(value: any) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
