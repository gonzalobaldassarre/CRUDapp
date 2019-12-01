import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import Icon  from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext); // lista de posts, es el contexto, el estado
    const blogPost = state.find( (blogPost) => blogPost.id == navigation.getParam('id') );
    
    return <View style={styles.container}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>
}
// OPCIONES DE NAVIGATION PARA ESTA PANTALLA
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:<TouchableOpacity onPress={ () => navigation.navigate('Edit', { id: navigation.getParam('id') })  }><Icon name="plus" size={25}  style={styles.icon} /></TouchableOpacity>
    }
}
// --- AGREGAMOS UN BOTON :D --- //

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },  
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 12
    },
    icon: {
        alignSelf: 'center',        
        marginRight: 15,
    },
    });

export default ShowScreen;