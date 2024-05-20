import { useState, useEffect } from 'react';

// Создаем функцию-компонент, в которой будет происходить загрузка данных по скроллу
const useInfiniteScroll = (callback: () => void) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                    document.documentElement.offsetHeight ||
                isFetching
            )
                return;

            setIsFetching(true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);

    useEffect(() => {
        if (!isFetching) return;
        callback();
    }, [isFetching, callback]);

    return { isFetching, setIsFetching };
};

export default useInfiniteScroll;
