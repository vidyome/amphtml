import {validateData} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function temedya(global, data) {
  validateData(data, ['keyId','siteId']);
  temedyaAds(global, data);
}

/**
 * @param {!Window} global
 * @param {!Object} data
 */

function temedyaAds(global, data) {
  const f = global.document.createElement('script');
  f.setAttribute('title', data.title);
  f.setAttribute('key-id', data.keyId);
  f.setAttribute('site-id', data.siteId);
  f.setAttribute('site-url', data.siteUrl);
  f.setAttribute('type-id', data.typeId);
  f.setAttribute('paid-item', data.paidItem);
  f.setAttribute('organic-item', data.organicItem);
  f.setAttribute('theme', data.theme);
  f.setAttribute('width', data.width);
  f.setAttribute('height', data.height);
  setStyles(f, {
    border: '0 none transparent',
    position: 'relative',
  });
  f.onload = function() {
    window.context.renderStart();
  };
  f.src = 'https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js';
  const url = window.top.location.search.substring(1);
  if (url && url.indexOf('hb=true') !== -1) {
    f.src = f.src + '&hb=true';
  }
  global.document.body.appendChild(f);
}
