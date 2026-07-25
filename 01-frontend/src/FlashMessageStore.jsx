import { atom, useAtom } from 'jotai';

export const flashMessageAtom = atom({
    message: '',
    type: 'info',
});

let timeoutId = null;

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type = 'info') => {
        // if there is an ongoing timer, clear it
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        setFlashMessage({ message, type });

        // clear the flash message after 3 seconds
        setTimeout(clearMessage, 3000);
    };

    const clearMessage = () => {

        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        setFlashMessage({ message: '', type: 'info' });
    };

    return {
        flashMessage,
        showMessage,
        clearMessage

    };
}

