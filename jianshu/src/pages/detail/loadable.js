import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'), //代表当前目录下的index.js
  loading(){
      return <div>正在加载</div>
  } //在加载时，默认显示的内容
});

export default () => <LoadableComponent/>