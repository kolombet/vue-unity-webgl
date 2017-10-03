import unity from './Unity.vue';

var install = function (Vue) {
  Vue.component('unity', unity);
};

unity.install = install;

var instance = unity.data().gameInstance;

var message = function (gameObject, method, param) {
  if (param === null) {
    param = '';
  }
  if (UnityInstance !== null) {
    instance.SendMessage(gameObject, method, param);
  } else {
    console.warn("vue-unity-webgl: you've sent a message to the Unity content, but it wasn\t instantiated yet.");
  }
};

export var Unity = unity;
export var Message = message;
export var Instance = instance;

export default Unity;
