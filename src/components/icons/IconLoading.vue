<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="line_loading" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30">
    <defs xmlns="http://www.w3.org/2000/svg"></defs>
    <circle class="line_loading_spinner" fill="none" stroke="#FF4C4C" stroke-width="5px" stroke-linecap="round" cx="15" cy="15" r="13" />
  </svg>
</template>

<style>
.line_loading {
  -webkit-animation: rotator 1s linear infinite;
  animation: rotator 1s linear infinite;
}

.line_loading_spinner {
  stroke-dasharray: 80;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-animation: dash 1s linear infinite;
  animation: dash 1s linear infinite;
}

@-webkit-keyframes rotator {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(320deg);
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(320deg);
  }
}

@-webkit-keyframes dash {
  0% {
    transform: rotate(0deg);
    stroke-dashoffset: 80;
  }

  50% {
    transform: rotate(200deg);
    stroke-dashoffset: 20;
  }

  100% {
    stroke-dashoffset: 80;
    transform: rotate(400deg);
  }
}

@keyframes dash {
  0% {
    transform: rotate(0deg);
    stroke-dashoffset: 80;
  }

  50% {
    transform: rotate(200deg);
    stroke-dashoffset: 20;
  }

  100% {
    stroke-dashoffset: 80;
    transform: rotate(400deg);
  }
}
</style>
