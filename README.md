# qm-vi

## packages文件夹下
```
index.js是所有组件汇总
每个组件有src-vue文件和index.js文件，若想增加组件，按例添加即可
```

### npm run lib
```
packages写完后，src文件夹改成了examples名，然后在vue.config.js重置entry等
在package.json文件srcripts下增加lib后即可npm run lib打包一个lib文件夹
```

### npm publish
```
在package.json设置好main、version、private（设置为false）、description、keyword后
npm publish即可，库发布后，packages的组件若有更新，则需要重新 npm run lib 再修改package.json的version版本后npm publish发布
```

### 使用对象：vue3.0框架（3.0发布只能3.0使用）
```
使用者在框架的main.js中如下设置：

const app=createApp(App)
import qwvii from 'qw-vii'
app.use(qwvii).mount('#app')

然后 npm install qw-vii
在APP.vue中<ky-switch ></ky-switch>即可显示使用了……

```

### 借用注意
```
此项目，可大致直接发布，但是请注意：
1）发布前需要npm login登录，无账号去npm官网注册+验证邮箱
2）npm publish时候，package.json每次都需要更新version
3）若新增了组件想重新发布，记得packages下的index.js需要加上新组件后再npm run lib……npm publish
```
