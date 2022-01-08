<template>
  <div class="container-fluid">
  <!-- <div> -->
    <router-view/>
  </div>
</template>

<style>

  *{
    font-family: 'Lato', sans-serif;
  }
  h1,h2{
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight:600;
  }
  .float-date-remove{
    position: absolute;
    right: 5%;
    top:20%;
    border: 1px solid silver;
    border-radius: 50px;
  }
  .bg-dark{
    background-color: #262421 !important;
  }
  .auth-header{
    margin-bottom: 84px;
  }
  #redHeadings{
    color:#000000;
  }
  #redleft{
    height: 1043px;
    background: #000000;
  }
  .dates-button{
    background: #EBF2F2;
    border-radius: 10px !important;
    color:black;
  }
  .dateSelected{
    background-color:#FEE3B8; ;
    color:#FCA311;
    border:1px solid #FCA311;
  }
  .customInput{
    background: #EBF2F2;
    border-radius: 0.25rem;
    height:56px;
  }
  .customInput:focus,
  .customInput:hover{
    transition:.5s ease;
    border:1px solid #FCA311;
    background-color: white;
    box-shadow: inset 0 0  0.1rem 0 #262421;
  }
  .customInputButton{
    width:100%;
    height:56px;
    background: #000000;
    color:white !important;
  }
  .customInputButton:focus,
  .customInputButton:hover{
    transition: .5s ease;
    border:1px solid #000000;
    background-color: white;
    box-shadow: 0 0 0 0;
  }
  .customInputButtonTwo{
    background-color: white;
    border:2px solid #000000;
    color:black !important;
  }

  #menuFloat{
    background-color: white;
    color:black;
    position: fixed;
    left:0%;
    width: 70%;
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 20%;
    z-index: 9999 !important;
    top:0%;
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  hr.divider{
    content: 'OR';
    padding: auto;
    margin-bottom: 36px;
    border: none;
    border-top: 1px solid #e0e0e0;
    color: #6e6d7a;
    text-align: center;
  }
  hr.divider::after{
    content: 'OR';
    display: inline-block;
    position: relative;
    top: -9px;
    padding: 0 16px;
    background: white;
  }
  .no-scroll-bar::-webkit-scrollbar {
    display: none;
  }
  .no-scroll-bar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
