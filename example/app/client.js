import { init } from 'sapper/runtime.js';
import { manifest } from './manifest/client.js';
import '../../runtime';

init({
  target: document.querySelector('#sapper'),
  manifest
});
