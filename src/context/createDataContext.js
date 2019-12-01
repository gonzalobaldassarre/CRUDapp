// lowecase pq solo vamos 
// a exportar funciones y no el componente
import React, { useReducer } from 'react';
// pasamos las 3 cosas esenciales que necesitamos para crear un contexto
// 1 - reducers
// 2 - actions - Los helpers(crean las acciones y las despachan)
// 3 - el estado iniciar


export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state,dispatch] = useReducer(reducer,initialState);
        // actions === { addBlogPost: (dispatch) => { return () => {} } } -- hay que loopear

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
            //same boundActions.key donde key == addBlogPost por ej y llamo esa funcion
            //con dispatch con parametro ;), quedan guardadas en boundActions todas las acciones
            // estoy agregando una a una las acciones 
        }


        // si la variable que paso es igual al nombre de la propiedad, puede ir solo una vez -> state : state === state
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    
    return { Context, Provider };
}

