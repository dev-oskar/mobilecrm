import { React, StyleSheet } from 'react-native';


var colours = {
  main: '#E4E4E4', // Głowny kolor tla
  second: '#b0b0b0', // Kolor tła w nagowku na gorze.
  auxiliary: '#AFA98D', // Kolor poboczny
  fontColour: '#000000', // Kolor czcionki (przyjmuje kolor poboczny)
  addButton: '#3399FF', // Kolor przycisku dodawania na stronie głownej

};

var links = {
  //addTaskLink: apiLink + "/dodajzadanie";
  //logInLink: apiLink + "/logowanie";
}

export default styles = StyleSheet.create({

    /* Style ktore sa uzywane przez wiele komponentow. Reszta podzielona na sekcje */

    container:
    {
        flex: 1,
        backgroundColor: colours.main,
    },
    containerScroll:
    {
        flex: 1,
        backgroundColor: colours.main,
        height: '100%',
    },
    header:
    {
        position: 'absolute',
        top: 0,
        left: 15,
        backgroundColor: 'transparent',
        // borderBottomWidth: 1,
        // borderBottomColor: colours.auxiliary,
    },
    title:
    {
        fontSize: 25,
        fontWeight: '500',
        color: colours.fontColour,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
    },
    submitButton:
    {
        padding: 15,
        backgroundColor: colours.second,
        width: '80%',
        //borderRadius: 100,
        borderColor: 'white',
        alignSelf: 'center',
    },
    submitButtonText:
    {
        color: colours.fontColour,
        textAlign: 'center',
    },
    inputWhite:
    {
        backgroundColor: 'transparent',
        color: colours.fontColour,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    addButton:
    {
        width: 80,
        height: 80,
        borderRadius: 100/2,
        borderWidth: 1,
        borderColor: colours.auxiliary,
        backgroundColor: colours.addButton,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        bottom: 25,
        right: 25,
        elevation: 3,
    },
    addButtonSign:
    {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: '100',
        shadowOffset: {width: 25, height: 25},
        shadowColor: colours.fontColour,
        shadowOpacity: 300,
    },
    /* Sekcja APIAddress Start */

    contentAPI:
    {
        position: 'absolute',
        bottom: 100,
        width: '100%'
    },

    /* Sekcja APIAddress Koniec */

    /* Sekcja LogIn Start */

    contentLogIn:
    {
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    descLogIn:
    {
        fontSize: 10,
        color: colours.fontColour,
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 5,
    },

    /* Sekcja LogIn Koniec */

    /* Sekcja MainActivity Start */

    mainContent:
    {
        position: 'absolute',
        bottom: '50%',
    },
    mainString:
    {
        color: colours.fontColour,
        padding: 10,
        fontSize: 20,
    },
    mainHello:
    {
        color: colours.fontColour,
        fontSize: 30,
        padding: 10,
    },

    /* Sekcja MainActivity Koniec*/

    /* Sekcja ActiveTasks Start */
    separator:
    {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colours.auxiliary,
        marginBottom: 5,
    },
    activeTasksContent:
    {
        backgroundColor: 'blue',
    },
    activeTasksRowTitle:
    {
        color: colours.fontColour,
        fontSize: 24,
        padding: 10,
    },

    /* Sekcja ActiveTasks Koniec*/

    /* Sekcja AddTaskForm Start*/

    AddTaskContent:
    {
        position: 'absolute',
        width: '100%',
        top: 50,
    },
    inputWhiteBig:
    {
        backgroundColor: 'transparent',
        color: colours.fontColour,
        width: '80%',
        height: 100,
        alignSelf: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    addTaskPicker:
    {
        width: '80%',
        color: colours.fontColour,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 2,
        borderColor: colours.second,
        alignSelf: 'center',
    },
    datePicker:
    {
        width: '100%',
    },
    addTaskButton:
    {
        padding: 15,
        backgroundColor: colours.addButton,
        width: '80%',
        alignSelf: 'center',
        elevation: 2,
    },
    addTaskButtonText:
    {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    /* Sekcja AddTaskForm Koniec*/

    /* Sekcja Row Start*/

    containerRow:
    {
        flex: 1,
        padding: 12,
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        elevation: 2,
    },
    textRow:
    {
        marginLeft: 10,
        fontSize: 16,
        color: colours.fontColour,
    },
    specificTaskText:
    {
        fontSize: 16,
        color: colours.fontColour,
        padding: 10,
    },
    specificTaskTitle:
    {
        fontSize: 16,
        color: colours.fontColour,
    },
    specificTaskCategory:
    {
        fontSize: 16,
        color: colours.second,
    }
    /* Sekcja Row Koniec*/
});
