import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import Icon  from 'react-native-vector-icons/FontAwesome';

const indexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context); // nombre de la variable tiene que ser igual a la PROP de BlogContext que cree! -- es un objeto, puedo asignar asi(JS!!)
    
    useEffect( () => {
        getBlogPosts();
        // cada vez que se vuelva a esta pantalla, ponemos un listener para que vea
        // cuando nos enfocamos en esta.
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        }); 
        
        return () => {
            //  se va a llamar esta funcion cuando la pantalla sea cerrada realmente, no
            // mientras navegemos, hay que limpiar los listeners
            listener.remove();
        }
        },[]);
        
    return(
      <View>
        
        <FlatList
            data={state}
            keyExtractor={ (blogPost) => blogPost.title }
            renderItem={ ({ item }) => {
                return (
                    <TouchableOpacity onPress={ () => navigation.navigate('Show', { id : item.id })  }>
                        <View style={styles.container}>
                            
                            <Text style={styles.text}> {item.title} - {item.id} </Text>           
                            
                            <TouchableOpacity onPress={ () =>  deleteBlogPost(item.id)  }>
                                <Icon name="facebook" size={25}  style={styles.icon} />                         
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                );
            }}
        />
      </View>
    )
}

// OPCIONES DE NAVIGATION PARA ESTA PANTALLA
    indexScreen.navigationOptions = ({ navigation }) => {
        return {
            headerRight:<TouchableOpacity onPress={ () => navigation.navigate('Create')  }><Icon name="plus" size={25}  style={styles.icon} /></TouchableOpacity>
        }
    }
// --- AGREGAMOS UN BOTON :D --- //

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    icon: {
        alignSelf: 'center',        
        marginRight: 15, 
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        marginVertical: 5,
    },

});

export default indexScreen;