import { init } from 'sapper/runtime.js';
import { manifest } from './manifest/client.js';
import '../../';

init({
  target: document.querySelector('#sapper'),
  manifest
});
