import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = (key: string, value: unknown) => {
    AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getItem = async <T>(key: string) => {
    const item = await AsyncStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return null;
};

export const removeItem = (key = '') => {
    AsyncStorage.removeItem(key);
};
