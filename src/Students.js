import React, {Component} from 'react';

class Students extends Component {

    constructor(props){
        super(props);

        this.state = {
            studentLists: [
                {nombre: 'Luis',
                 apellido: 'Ponce',
                 cuenta: '21711234'},
                 {nombre: 'Hey',
                 apellido: 'Apellido Yes',
                 cuenta: '21711234'},
                 {nombre: 'Julia',
                 apellido: 'Gomez',
                 cuenta: '21711223'}
            ]
        }
    }

    render() {

        const listaEstudiantes = (item, index) => {
            return(<li key={index}> {item.cuenta} - {item.nombre} - {item.apellido} </li>);
        }


        return(
            <ul>
                {this.state.studentLists.map(listaEstudiantes)}
            </ul>
        );
    }

}

export default Students;