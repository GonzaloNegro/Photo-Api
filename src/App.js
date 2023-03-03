import React from "react";
import { Component } from "react";
import './Components/Styles.css/style.css'
import Buscador from "./Components/Buscador";
import Resultado from "./Components/Resultado";

class App extends Component{
  state = {
    termino: '',
    imagenes : [],
    pagina: ''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () =>{
  //Leer el state de la pagina actual
  let pagina = this.state.pagina;
  //Leer si la pagina es 1, ya no ir hacia atras
  if(pagina === 1) return null;
  //Restar uno a la pagina actual
  pagina -= 1;
  //Agregar el cambio al state
  this.setState({
    pagina
  }, () =>{
    this.consultarApi();
    this.scroll();
  });
/*   console.log(pagina) */
  }

  paginaSiguiente = () =>{
  //Leer el state de la pagina actual
  let pagina = this.state.pagina;
  //Sumar uno a la pagina actual
  pagina += 1;
  //Agregar el cambio al state
  this.setState({
    pagina
  }, () =>{
    this.consultarApi();
    this.scroll();
  });
/*   console.log(pagina) */
    }

  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=34041529-4861cfe85e7aa67f839e3b5b3&q=${termino}&per_page=30&page=${pagina}`;
    /* console.log(url); */
    fetch(url)
    .then(resolve => resolve.json())
    .then(result => this.setState({ imagenes : result.hits}));
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
    }, () =>{
      this.consultarApi();
    })
  }

  render(){
    return(
      <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className="row justify-content-center">
      <Resultado
        imagenes={this.state.imagenes}
        pagina={this.state.pagina}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
      />
      </div>
    </div>
    )
  }
}

export default App;
