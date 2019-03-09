import React, {Component} from 'react';

class Classes extends Component {

    constructor(props){
        super(props);

        this.state = {
            classesList: [
                {nombre: 'Experiencia',
                 codigo: '346'},
                 {nombre: 'Teoria Base de Datos',
                 codigo: '235'},
                 {nombre: 'Progra 1',
                 codigo: '121'}
            ]
        }
    }

    render() {

        const listaClases = (item, index) => {
            return(<li key={index}> {item.codigo} - {item.nombre} </li>);
        }


        return(
            <ul>
                {this.state.classesList.map(listaClases)}
            </ul>
        );
    }

}

export default Classes;