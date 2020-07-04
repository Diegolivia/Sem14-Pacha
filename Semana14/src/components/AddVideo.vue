<template>
  <section>
    <h1>Añadir Nuevo Video</h1>
    <form
      onsubmit="event.preventDefault();"
      @submit="onFormSubmit"
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
  name: "AddVideo",
  data: {
    curr: 0
  },
  methods: {
    onFormSubmit: function() {
      if (this.Validar()) {
        var frmData = this.frmRead();
        console.log(frmData);
        if (true) this.DbInsert(frmData);
        else this.DbUpdate(frmData);
        this.frmReset();
      }
    },
    Validar: function() {
      let isValid = true;
      if (document.getElementById("ipTitulo").value == "") {
        isValid = false;
        document.getElementById("ipTitulo").style.border = "solid 1px red";
      }
      if (document.getElementById("ipLink").value == "") {
        isValid = false;
        document.getElementById("ipLink").style.border = "solid 1px red";
      }
      if (document.getElementById("ipDescripcion").value == "") {
        isValid = false;
        document.getElementById("ipDescripcion").style.border = "solid 1px red";
      }
      return isValid;
    },
    frmRead: function() {
      var frmData = {};
      frmData["Titulo"] = document.getElementById("ipTitulo").value;
      frmData["Link"] = document.getElementById("ipLink").value;
      frmData["Descripcion"] = document.getElementById("ipDescripcion").value;
      return frmData;
    },
    DbInsert: function(data) {
      fetch("http://localhost:3000/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: data.Titulo,
          link: data.Link,
          descripcion: data.Descripcion
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    },
    frmReset: function() {
      document.getElementById("ipTitulo").value = "";
      document.getElementById("ipLink").value = "";
      document.getElementById("ipDescripcion").value = "";
      this.curr = null;
    },
    DbUpdate: function(data) {
      fetch("http://localhost:3000/posts/", {
        method: "PUT",
        body: JSON.stringify({
          id: data.id,
          title: data.Titulo,
          link: data.Link,
          descripcion: data.Descripcion
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    },
    DbDelete: function(data) {
      fetch("http://localhost:3000/posts/", {
        method: "DELETE"
      });
    }
  }
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
  width: 60%;
  margin: auto;
  padding: 0;
}

form ul li {
  width: 40%;

  display: inline-block;
}

form ul li > * {
  width: 100%;
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