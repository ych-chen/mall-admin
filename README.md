# mall-admin

mall-admin是一套电商后台管理系统，基于**Vue3 + Vite + Vue-Router + Element-Plus + Echarts + Axios 技术栈**开发。

系统包含登录界面、首页门户、数据可视化、轮播图配置、热销商品配置、新品上线配置、为你推荐配置、商品管理、会员管理、系统管理等模块。

线上预览地址：https://admin.ychch.top 测试账号密码：admin 123456。

## 未解决的问题

项目在本地可以正常运行，但是将代码上传到github，再部署到vercel、HeroKu、腾讯云web应用托管等网站时，均出现了如下图所示问题

该问题还未得到解决，故线上无法正常访问，可以将项目下载到本地运行使用

![image-20230209195922889](https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209195922889.webp)

## 部署方案

1. git clone 到本地
2. npm install  安装项目所需的包
3. npm run dev  即可

# 项目搭建

1. 项目搭建使用 vite，而没有用 webpack，用新不用旧。
2. 安装路由插件 vue-router
3. 二次封装axios
4. 配置proxy代理接口已处理跨域问题；
5. 引入UI组件库element-plus

# 页面展示

## 登录界面

技术点：常见页面布局、token登录

本文 采用 token 令牌 形式鉴权，常见的还有 `cookie`、`OAuth(开放授权)`、`HTTP Basic Authentication`等

<img src="https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209191836876.webp" alt="image-20230209191836876" style="zoom:50%;" />

## 首页门户

技术点：常见页面布局、vue-router的配置与使用

后台管理界面，布局样式如图所示：右边导航栏、左侧上部为头部、下部为底部，中间为内容 content

为保证复用性，导航栏、头部和底部 都在主组件中定义好，内容部分用 放置`<router-view>` 标签。

通过点击导航栏，触发路由，右侧视图也随之变化

<img src="https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209192548811.webp" alt="首页门户" style="zoom: 50%;" />

## 数据可视化

技术点：数据可视化、`Echarts` 图表插件的引入及使用

![数据可视化](https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209193524262.webp)

## 轮播图配置

技术点：element-plus的使用，axios 获取数据、弹窗组件的封装

![轮播图配置](https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209194606047.webp)

## 商品管理、会员管理

技术点：el-table、el-card、el-radiogroup等组件的熟练使用

商品、会员账号的增删改查

![image-20230209194712155](https://ychch-blog.oss-cn-hongkong.aliyuncs.com/image-20230209194712155.webp)
