<template>
  <div id="visor">
      <h1>Inicio</h1>
      <div id="Tarjeta">
        <div class="btnEdit">/</div>
        <div class="btnDelete">X</div>
        <div class="Vid">imagen</div>
        <div class="Name"><h2>{{titulo}}</h2></div>
        <div class="Description">{{descripcion}}</div>
        <button class="Details">Ver Detalles</button>
      </div>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js';
export default {
    name: 'Home',
    data() {
      return{
      titulo: 'Pepe',
      descripcion: "Esta es la descripcion"
    }
    },
     methods: {
    emitGlobalClickEvent() {
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', this.clickCount);
    }
  }
}

function PullData(){
fetch('http://localhost:3000/posts/1')
  .then(response => response.json())
  .then(data =>(console.log(data)))
  }
</script>

<style>
#Tarjeta {
  border: 2px solid black;
  width: 20%;
}
</style>