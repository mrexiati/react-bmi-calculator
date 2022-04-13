export const getData = (key) => {
    if(!localStorage) {
        return;
    }

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error(`Error getting item ${key} from localStorage`, err);
    }
};

export const setData = (key, item) => {
    if(!localStorage) {
        return;
    }

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.error(`Error setting item ${key} to localStorage`, err);
    }
}