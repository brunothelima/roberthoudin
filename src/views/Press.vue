<template>
  <section class="press">
    <v-container>
      <h1>Espetáculo de música e ilusionismo conta um episódio da vida do Pai da Mágica Moderna</h1>
      <v-btn class="gallery-link" tag="router-link" to="/galeria">
        <v-svg :src="require('@/assets/img/camera.svg')" />
        VER GALERIA
      </v-btn>
      <v-btn class="release" tag="a" href="/release.pdf" download>
        <v-svg :src="require('@/assets/img/download.svg')" />
        BAIXAR RELEASE
      </v-btn>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/G1ggZwQauQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h2>Uma viagem ao mundo árabe com Robert-Houdin.</h2>
      <p>
      Em meados do século XIX, a França mantinha a Argélia como sua colônia, mas estava enfrentando muita dificuldade para manter o seu domínio no país africano - as insurgências eram cada vez maiores e mais frequentes.
      Para conter os rebeldes, as forças de Napoleão III resolveram utilizar uma arma secreta inusitada. Não era um super-soldado, muito menos um novo canhão ou uma metralhadora... A arma secreta dos imperialistas era um mágico! Mas não era qualquer mágico, estamos falando de Robert-Houdin, o pai da mágica moderna.
      Robert-Houdin foi enviado ao país árabe com o desafio de fazer aquilo que os mágicos melhor sabem fazer: encantar e iludir. O seu plano era mostrar que o exército francês contava com um feiticeiro invencível e para isso montou uma apresentação com esse objetivo.
      </p>
      <p>A Cia dos Homens de Palha e a banda NOAH BR apresentam Robert-Houdin,pra lá de Marrakech, um espetáculo que se propõe a estreitar as fronteiras entre a mágica e a música para apresentar ao público um recorte da mística árabe.
      As apresentações serão realizadas em três cidades do Vale do Paraíba paulista, Cruzeiro e São Bento do Sapucaí e São José dos Campos. O projeto conta com o apoio do Governo do Estado de São Paulo, por meio do ProAC.</p>
      <div class="grid">
        <div class="cia">
          <v-svg :src="require('@/assets/img/cia-logo.svg')" />
          <p>Respeitável público, chegou a hora de chamar eles que são a alegria do circo. Com vocês... os Homens de Palha! Em outros tempos, os circenses faziam graça colocando enchimentos de palha que deformavam o seus corpos e causavam riso com o seu jeito grotesco. Eram os Homens de Palha, dizia a vizinhança. "O raio, o sol suspende a lua; olha o... no meio da rua". Eram os Homens de Palha, eram os Palhaços . A Cia. dos Homens de Palha é um grupo de circo que faz das ruas, feiras e praças o seu picadeiro. Surgiu em 2010 com o propósito de investigar sobre o universo do circo-teatro e explorar as fronteiras das linguagens artísticas que culminaram na produção do espetáculo "Sonho de Palhaço - Carambas & Carambolas!", em parceria com a banda de Evolua. Uma mistura de circo, teatro, poesia e Rock N ́ Roll. As artes mágicas fazem parte do repertório do grupo desde a montagem de O sumiço do mágico Abracadabrus em 2016.
          </p>
        </div>
        <div class="noah">
          <v-svg :src="require('@/assets/img/noah-logo.svg')" />
          <p>Amigos de longa data e parceiros de outras bandas, muito antes dos ensaios já escreviam suas primeiras músicas, que deram origem ao primeiro EP lançado em 2014. Com um caldeirão de influências, transitam por várias vertentes do metal trabalhando dinâmicas, ambiências e partes agressivas durante as músicas. Em 2015, lançaram o single Waves & Trees, trabalho que antecede o segundo EP, chamado The Almighty Human, nessa mesma época, a banda foi chamada para abrir o show da banda Obey The Brave (Canadá) em São Paulo. Em 2016 a banda lançou o EP duplo chamado The Almighty Human. O trabalho consiste em três faixas com a temática metal que é o carro chefe da banda e versões lights das mesmas músicas. A proposta foi muito bem aceita pelo público, trouxe uma nova frente para a banda, expandindo o público alvo e aumentando o alcance de mercado. Profissionais da área da comunicação e áudio/vídeo, que aposta no trabalho em conjunto.</p>
        </div>
      </div>
      <v-btn class="gallery-link" tag="router-link" to="/galeria">
        <v-svg :src="require('@/assets/img/camera.svg')" />
        VER GALERIA
      </v-btn>
      <v-btn class="release" tag="a" href="/release.pdf" download>
        <v-svg :src="require('@/assets/img/download.svg')" />
        BAIXAR RELEASE
      </v-btn>
    </v-container>
  </section>
</template>

<script>
import Container from '@/components/Container.vue'
import SvgLoader from '@/components/SvgLoader';
import Btn from '@/components/Btn';

export default {
  name: 'About',
  components: {
    'v-container': Container,
    'v-svg': SvgLoader,
    'v-btn': Btn,
  },
};
</script>

<style lang="scss" scoped>
.press {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .container {
    padding-top: 120px;
    padding-bottom: 120px;
    @media screen and (max-width: #{$brakepoint-medium}) {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
  .video {
    position: relative;
    padding-bottom: 56%;
    margin: $gutter * 4 0;
    box-sizing: border-box;
    width: 100%;
    iframe {
      position: absolute;
      left: 0; top: 0;
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    margin-bottom: $gutter * 4;
  }
  h2, h3 {
    margin: $gutter * 6 0 $gutter * 2;
  }
  p {
    margin-bottom: $gutter * 2;
    line-height: 200%;
  }
  a {
    margin-right: $gutter * 2;
    margin-bottom: $gutter * 2;
  }
  .grid {
    grid-gap: $gutter * 8;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    margin-bottom: $gutter * 8;
    @media screen and (max-width: #{$brakepoint-medium}) {
      display: block;
    }
    .svg {
      padding-top: $gutter * 8;
      display: block;
      margin: 0 auto $gutter * 4;
      text-align: center;
      /deep/ svg path {
        fill: $color-dark;
      }
    }
  }
}
</style>
