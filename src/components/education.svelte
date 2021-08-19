<script>
  import Detailed from './detailed.svelte';

  let showeducation = false;
  const toggleShow = () => {
    showeducation = !showeducation;
  };
</script>

<div class="education">
  <h3>Utbildning</h3>
  <div class="item educate" on:click={toggleShow}>
    <div class="date">
      <p>2020 - idag</p>
    </div>
    <div class="details">
      <p>Frontend-utvecklare, YH</p>
    </div>
    <div class="place">
      <p>EC utbildning, Västerås</p>
    </div>
  </div>
  <div class="expandable">
    {#if showeducation}
      <div>
        <Detailed
          kurs={'Agila projektmetoder'}
          points={10}
          info={'Teori och lätt praktik i agila projektmetoder. Störst vikt vid SCRUM.'}
        />
        <Detailed
          kurs={'UX och grafisk design'}
          points={45}
          info={'UX och design. Kursen uppdelad i två delar och avslutas i September 2021.'}
        />
        <Detailed
          kurs={'HTML och CSS'}
          points={40}
          info={'Grundkurs HTML och CSS. Uppgift att designa en hemsida utifrån bifogad mall.'}
        />
        <Detailed
          kurs={'Javascript 1'}
          points={40}
          info={'Grundkurs vanilla Javascript. Form-validering och TODO-app.'}
        />
        <Detailed
          kurs={'Javascript 2'}
          points={45}
          info={'Fortsättning Javascript. Node.js och Vue. Uppgift att bygga en webshop med registreringsfuntionalitet och inlogg med webtoken'}
        />
        <Detailed
          kurs={'Javascript 3'}
          points={40}
          info={'React, angular och typescript. I React byggde vi en webshop med inlogg och administratörs-funtionalitet. Angular och typescript ett digitalt CV.'}
        />
      </div>
    {/if}
  </div>
  <div class="flex borderbottom">
    {#if !showeducation}
      <i on:click={toggleShow} class="fas fa-chevron-down" />
    {:else}
      <i on:click={toggleShow} class="fas fa-chevron-up" />
    {/if}
  </div>
  <div class="item">
    <div class="date">
      <p>2004 - 2007</p>
    </div>
    <div class="details">
      <p>Bachelor of Business Administration</p>
    </div>
    <div class="place">University of Kent, Canterbury</div>
  </div>
  <div class="item">
    <div class="date">
      <p>1999 - 2002</p>
    </div>
    <div class="details">
      <p>Naturvetenskapliga linjen</p>
    </div>
    <div class="place">
      <p>Rudbeckianska Gymnasiet, Västerås</p>
    </div>
  </div>
</div>

<style>
  h3 {
    margin: 1.5rem;
  }
  .education {
    margin-bottom: 1rem;
  }
  /* .education .item {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid rgba(77, 72, 72, 0.2);
  } */
  .education .item {
    width: 100%;
    display: inline-grid;
    /* justify-content: center;
    align-items: flex-end; */
    grid-template-columns: 1fr 3fr 1fr;
    gap: 8px;
    padding: 1rem;
    /* border-bottom: 1px solid rgba(77, 72, 72, 0.2); */
    /* margin-bottom: 1rem; */
  }
  /* .educate {
    cursor: pointer;
  } */
  /* .expandable {
    display: flex;
  } */
  .fas {
    margin: auto;
    cursor: pointer;
  }
  .fas:active {
    transform: translateY(3px);
  }
  .borderbottom {
    border-top: 1px solid rgba(77, 71, 71, 0.2);
  }
  .flex {
    display: flex;
  }
</style>
