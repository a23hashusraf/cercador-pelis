<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field v-model="searchQuery" label="Buscar película" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="primary" @click="buscarPeliculas">Buscar</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="pelicula in peliculas" :key="pelicula.imdbID" cols="12" md="4">
            <v-card>
              <v-img height="200px" :src="pelicula.Poster"></v-img>
              <v-card-title>{{ pelicula.Title }}</v-card-title>
              <v-card-actions>
                <v-btn text @click="mostrarMasInfo(pelicula.imdbID)">Más info</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialogo" max-width="600px">
          <v-card v-if="peliculaSeleccionada">
            <v-card-title>{{ peliculaSeleccionada.Title }}</v-card-title>
            <v-card-text>
              <p><strong>Año:</strong> {{ peliculaSeleccionada.Year }}</p>
              <p><strong>Género:</strong> {{ peliculaSeleccionada.Genre }}</p>
              <p><strong>Sinopsis:</strong> {{ peliculaSeleccionada.Plot }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="dialogo = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import communicationManager from '../services/communicationManager'

  const searchQuery = ref('')
  const peliculas = ref([])
  const peliculaSeleccionada = ref(null)
  const dialogo = ref(false)

  const buscarPeliculas = async () => {
    const respuesta = await communicationManager.buscar(searchQuery.value)
    peliculas.value = respuesta.Search || []
  }

  const mostrarMasInfo = async id => {
    const detalle = await communicationManager.detalle(id)
    peliculaSeleccionada.value = detalle
    dialogo.value = true
  }
</script>
