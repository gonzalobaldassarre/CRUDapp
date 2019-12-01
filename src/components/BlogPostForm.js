import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);


    return <View style={ styles.container }>
        <Text style={styles.text}>Ingrese un titulo: </Text>
        <TextInput style={styles.input} onChangeText={ (text) => setTitle(text) } value={title} autoCapitalize='none' autoCorrect={false} />
       
        <Text style={styles.text}>Ingrese contenido: </Text>
        <TextInput style={styles.input} onChangeText={ (text) => setContent(text) } value={content} autoCapitalize='none' autoCorrect={false}/>
       
        <Button 
            title='Guardar BlogPost' 
            onPress={ () =>  onSubmit(title,content)}/>
    </View>
};

// SI DEFINO ALGO CON PROPS Y NO SON PASADAS,
// DEFAULT PROPS DEFINE UNAS POR DEFECTO
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        marginVertical: 10
    },
    container: {

        padding: 10
    },

});

export default BlogPostForm;