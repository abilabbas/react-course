import { createContext, useState, useContext } from "react";

export const Appcontext = createContext({});

export const useTodoContext = () => useContext (Appcontext);

const AppContextProvider = ({ children }) => {
    const STATUS_TODO = ['TODO', 'IN PROGRESS', 'IN TEST', 'DONE']
    
    const [data, setData] = useState([
        {
            title: 'Todo 1',
            id: 1,
            status: 'TODO'
        },
    ]);

    const onChange = (id, key, value) => {
        const newData = data.map(item =>
            item.id === id ? {
                ...item, [key]: value,
                ...(value === 'IN PROGRESS' || value === 'IN TEST') && {
                    bgColor: 'bg-information-100',
                    textColor: 'text-information',
                },
                ...value === 'DONE' && {
                    bgColor: 'bg-success-100',
                    textColor: 'text-success',
                },
                ...value === 'TODO' && {
                    bgColor: 'bg-gray-60',
                    textColor: 'text-gray-100',
                  },
            } : item
            );
            setData(newData);
    };

    const filteredData = (status) => {
        return data.filter(el => el.status === status);
    };

    const addTodo = () => {
        setData([...data, {
            id: data.length ? data.length + 1 : 1,
            title: 'New Todo',
            status: 'TODO',
            bgColor: 'bg-gray-60',
            textColor: 'text-gray-100',
        }])
    };

    const state = {
        addTodo,
        onChange,
        data,
        filteredData,
        STATUS_TODO,
    };

    return (
        <AppContextProvider value = {state}>
            {children}
        </AppContextProvider>
    );
};

export default AppContextProvider;