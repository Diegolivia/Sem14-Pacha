<template>
  <section>
    <h1>Añadir Nuevo Video</h1>
    <form
      onsubmit="event.preventDefault();onSubmit();"
      onresize="onReset();"
      autocomplete="off"
      class="form-content"
    >
      <ul>
        <li>
          <input type="text" name="Titulo" id="ipTitulo" placeholder="Titulo" />
        </li>
        <li>
          <input type="text" name="Link" id="ipLink" placeholder="Link" />
        </li>
        <li id="liTextarea">
          <textarea name="Descripcion" id="ipDescripcion" placeholder="Sobre él/ella*" rows="10"></textarea>
        </li>
      </ul>
      <div id="Botones">
        <button type="submit">Aceptar</button>
        <button type="reset">Cancelar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "AddVideo"
};
</script>

<style>
label {
  margin: 0;
  padding: 0;
}

#liTextarea {
  width: 92%;
}

#Botones {
  text-align: center;
}

form h2 {
  margin: 0 50px;
  align-self: center;
}

form ul {
  width: 100%;
}

form ul li {
  width: 40%;
  padding: 0 2%;
  display: inline-block;
}

form ul li > * {
  width: 90%;
}

form ul li input {
  padding: 5% 3%;
  margin: 5px 0 22px 0;
}

form button {
  padding: 2% 5%;
  background-color: lightgrey;
  border: none;
}
</style>